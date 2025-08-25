import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { searchFiltersSchema } from "@shared/schema";
import { z } from "zod";
import { Request, Response } from "express"; // Import Request and Response types

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

  // Sync with Google Sheets
  app.post("/api/sync", async (req, res) => {
    try {
      await storage.syncFromGoogleSheets();
      res.json({ message: "Successfully synced with Google Sheets", timestamp: new Date().toISOString() });
    } catch (error) {
      console.error("Error syncing with Google Sheets:", error);
      res.status(500).json({ error: "Failed to sync with Google Sheets" });
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

  const httpServer = createServer(app);
  return httpServer;
}