# Overview

Homejobspro.com is a home services directory website that connects users with local service professionals. The application allows users to search for various home service providers including plumbers, electricians, HVAC technicians, landscapers, and other home service professionals. The site features a dynamic hero section with rotating service types, comprehensive search and filtering capabilities, and real-time data synchronization with a Google Sheets database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built with React and TypeScript using a modern component-based architecture. The application uses Vite as the build tool and development server, providing fast hot-reload capabilities. The UI is constructed with shadcn/ui components built on top of Radix UI primitives, styled with Tailwind CSS for a consistent, responsive design system.

The routing is handled by Wouter, a lightweight client-side router. State management utilizes TanStack Query (React Query) for server state management, providing caching, background updates, and optimistic updates. The application follows a component composition pattern with reusable UI components organized in a clear hierarchy.

### Backend Architecture
The backend is implemented as a Node.js Express server with TypeScript support. The server follows a RESTful API design pattern with clear separation of concerns:

- **Route handlers** (`server/routes.ts`) manage HTTP request/response logic
- **Storage layer** (`server/storage.ts`) provides data access abstraction with an interface-based design allowing for different storage implementations
- **Schema validation** using Zod for runtime type checking and API contract enforcement

The server implements middleware for logging, error handling, and serves both API endpoints and static assets. In development, it integrates with Vite's middleware for seamless full-stack development.

### Data Storage and Management
The application uses a hybrid storage approach:

- **Primary data source**: Google Sheets API integration for real-time data synchronization
- **Runtime storage**: In-memory storage (`MemStorage` class) for fast query processing
- **Database ready**: Drizzle ORM configuration with PostgreSQL dialect for future database migration

The storage layer implements comprehensive search and filtering capabilities including:
- Text-based search across multiple fields
- Industry/service type filtering
- Geographic filtering by city
- Rating-based filtering with min/max ranges
- Sorting options (rating, name)
- Pagination support

### Data Schema and Validation
The application uses a shared schema definition (`shared/schema.ts`) with Zod validation ensuring type safety across the full stack. Key entities include:

- **Service**: Represents a home service provider with rating, contact info, location, and service type
- **SearchFilters**: Defines available search and filter parameters
- **SearchResults**: Structured response format including results, pagination, and filter options

### External Dependencies

- **Google Sheets API**: Primary data source for service provider information
- **Neon Database**: PostgreSQL hosting service (configured but not actively used)
- **Unsplash**: Image hosting for service category images
- **Radix UI**: Accessible component primitives for the UI foundation
- **TanStack Query**: Server state management and caching
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the entire application stack

The Google Sheets integration allows for easy content management without requiring database administration, while the Drizzle ORM setup provides a migration path to a traditional database when scaling requirements demand it.