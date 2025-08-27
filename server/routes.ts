import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { searchFiltersSchema } from "@shared/schema";
import { z } from "zod";
import { Request, Response } from "express"; // Import Request and Response types
import type { Settings } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {

  // Get all services
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getServices();
      res.json(services);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  // Search services with filters
  app.get("/api/search", async (req, res) => {
    try {
      const filters = searchFiltersSchema.parse({
        query: req.query.query,
        industry: req.query.industry,
        city: req.query.city,
        postCode: req.query.postCode,
        minRating: req.query.minRating ? parseFloat(req.query.minRating as string) : undefined,
        companyName: req.query.companyName,
        phone: req.query.phone,
        sortBy: req.query.sortBy || 'rating_desc',
        page: req.query.page ? parseInt(req.query.page as string) : 1,
        limit: req.query.limit ? parseInt(req.query.limit as string) : 20
      });

      const results = await storage.searchServices(filters);
      res.json(results);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid search parameters", details: error.errors });
      } else {
        console.error("Error searching services:", error);
        res.status(500).json({ error: "Failed to search services" });
      }
    }
  });

  // Sync data from Google Sheets
  app.post("/api/sync", async (req, res) => {
    try {
      await storage.syncFromGoogleSheets();
      res.json({
        success: true,
        message: "Data synced successfully",
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error("Sync error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to sync data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Get settings
  app.get("/api/settings", async (req, res) => {
    try {
      const settings = await storage.getSettings();
      res.json(settings);
    } catch (error) {
      console.error("Error getting settings:", error);
      res.status(500).json({
        success: false,
        message: "Failed to get settings",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Save settings
  app.post("/api/settings", async (req, res) => {
    try {
      const settings: Settings = req.body;
      await storage.saveSettings(settings);
      res.json({
        success: true,
        message: "Settings saved successfully",
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error("Error saving settings:", error);
      res.status(500).json({
        success: false,
        message: "Failed to save settings",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Get unique industries for filter dropdown
  app.get("/api/industries", async (req, res) => {
    try {
      const industries = await storage.getUniqueIndustries();
      res.json(industries);
    } catch (error) {
      console.error("Error fetching industries:", error);
      res.status(500).json({ error: "Failed to fetch industries" });
    }
  });

  // Get unique cities for filter dropdown
  app.get("/api/cities", async (req, res) => {
    try {
      const cities = await storage.getUniqueCities();
      res.json(cities);
    } catch (error) {
      console.error("Error fetching cities:", error);
      res.status(500).json({ error: "Failed to fetch cities" });
    }
  });

  // Search for business by industry and phone for renewal
  app.post("/api/search-business", async (req, res) => {
    try {
      const { industry, phone } = req.body;
      
      if (!industry || !phone) {
        return res.status(400).json({ error: "Industry and phone are required" });
      }

      // Clean phone number for matching (remove formatting)
      const cleanPhone = phone.replace(/\D/g, '');
      
      const business = await storage.searchBusinessByPhone(industry, cleanPhone);
      
      if (!business) {
        return res.status(404).json({ error: "Business not found" });
      }

      res.json(business);
    } catch (error: any) {
      console.error("Error searching for business:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}