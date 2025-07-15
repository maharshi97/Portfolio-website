# Replit.md - Maharshi Pathak Portfolio

## Overview

This is a professional portfolio website for Maharshi Pathak, a DevOps and Site Reliability Engineer with 3.5+ years of experience. The application is built as a modern full-stack web application using React with TypeScript for the frontend and Express.js for the backend, designed to showcase professional experience, skills, and projects in the DevOps/SRE domain.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Radix UI primitives with custom theming
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: PostgreSQL session store
- **API Design**: RESTful API with /api prefix routing

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon serverless
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle migrations with schema definitions
- **Session Storage**: PostgreSQL-backed session store using connect-pg-simple

## Key Components

### Frontend Components
- **Hero Section**: Professional introduction with contact information
- **Skills Section**: Technical competencies organized by category
- **Projects Section**: Featured DevOps/SRE projects with technical details
- **Experience Section**: Professional work history with achievements
- **Education Section**: Academic background and certifications
- **Network Section**: Professional networking statistics and activity
- **Contact Section**: Professional contact form and availability status

### Backend Components
- **Express Server**: Main application server with middleware
- **Route Registration**: Centralized route management system
- **Storage Interface**: Abstracted storage layer for data operations
- **Memory Storage**: In-memory storage implementation for development
- **Vite Integration**: Development server with HMR support

### Database Schema
- **Users Table**: Basic user management with username/password
- **Schema Validation**: Zod schemas for type safety and validation
- **Migration System**: Drizzle-kit for database schema management

## Data Flow

### Development Flow
1. Vite dev server serves React frontend with HMR
2. Express backend serves API routes under /api prefix
3. Frontend components fetch data using TanStack Query
4. Database operations handled through Drizzle ORM
5. Session management via PostgreSQL store

### Production Flow
1. Frontend built to static assets via Vite
2. Backend bundled with esbuild for Node.js deployment
3. Static assets served by Express in production
4. Database connections managed through Neon serverless

### Portfolio Data Flow
1. Static portfolio content rendered on client-side
2. Professional information stored in component data
3. Contact form submissions handled via API endpoints
4. User interactions managed through React state

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI components for accessibility
- **Lucide React**: Icon library for UI elements
- **Font Awesome**: Additional icons for professional sections

### Development Tools
- **TypeScript**: Type safety across frontend and backend
- **Vite**: Fast build tool with plugin ecosystem
- **ESBuild**: Fast bundler for production builds
- **Drizzle Kit**: Database migration and schema management

### Database and Backend
- **Neon Database**: Serverless PostgreSQL provider
- **Drizzle ORM**: Type-safe database operations
- **Express.js**: Web framework for Node.js
- **Session Management**: PostgreSQL session store

### Form and Validation
- **React Hook Form**: Performant form management
- **Zod**: Schema validation for TypeScript
- **Hookform Resolvers**: Integration between form and validation

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend
- **Hot Module Replacement**: Real-time updates during development
- **Database**: Local PostgreSQL or Neon development database
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Frontend**: Vite build creates optimized static assets
- **Backend**: ESBuild bundles server code for Node.js
- **Database**: Neon serverless PostgreSQL for production
- **Static Assets**: Served by Express in production mode

### Database Management
- **Migrations**: Drizzle migrations for schema changes
- **Schema**: Centralized schema definitions in shared directory
- **Connection**: Environment-based database URL configuration

### Replit Integration
- **Development**: Replit-specific plugins for enhanced development experience
- **Runtime Error Handling**: Replit error modal for development debugging
- **Cartographer**: Replit's code intelligence features when available

The application is designed to be a professional showcase that demonstrates both frontend development skills and understanding of full-stack architecture, while highlighting expertise in DevOps and Site Reliability Engineering practices.