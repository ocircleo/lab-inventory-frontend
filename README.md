# Lab Inventory Management System - Frontend

A modern Next.js 15 application for managing laboratory inventory with role-based dashboards for admins, staff, and users. Built with React 19, Tailwind CSS, DaisyUI, and Redux Toolkit.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [User Roles & Permissions](#user-roles--permissions)
- [Components & Utilities](#components--utilities)
- [State Management](#state-management)
- [Authentication Flow](#authentication-flow)
- [Deployment](#deployment)

## ✨ Features

### Multi-Role Dashboard System
- **Admin Dashboard** - Full control over labs, devices, users, staff assignments, and system logs
- **Staff Dashboard** - Manage assigned labs and devices within their scope
- **User Dashboard** - View assigned items and lab access

### Core Functionality
- 🔐 JWT-based authentication with cookie management
- 📊 Advanced inventory management with pagination
- 🔍 Real-time search and filtering capabilities
- 📋 Operation logging with pagination
- 👥 User management with role assignment
- 🏫 Lab management and staff assignment
- 📦 Device and component tracking
- 🗑️ Trash management with recovery options
- 🎨 Dark/Light theme support
- 📱 Fully responsive design

### User Management
- Admin can create and manage users
- Role-based access (Admin, Staff, User)
- User profile management
- Password change functionality
- Account disable/enable

### Lab & Device Management
- Create and manage laboratories
- Add/edit/delete devices and components
- Move items between labs
- Track device status changes
- Device categorization and templating

## 🛠 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js   | 15.3.2  | React framework with App Router |
| React     | 19.0.0  | UI library |
| Tailwind CSS | 4.0  | Styling |
| React Icons | 5.5.0  | Icon library |
| SweetAlert2 | 11.26.3 | Alert dialogs |

## 📦 Prerequisites

- Node.js v18 or higher
- npm or yarn package manager
- Environment access to backend API

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd lab-inventory-frontend
```

### 2. Install Dependencies
```bash
npm install
```

## 🔧 Environment Setup

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://192.168.0.100:3000/api-proxy
NEXT_PUBLIC_WEB_URL=http://localhost:3000



Update `src/config.js` for API and web URLs used throughout the app.

## 🎯 Running the Application

### Development Mode
```bash
npm run dev
```
Application will start at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
lab-inventory-frontend/
├── src/
│   ├── app/
│   │   ├── _components/           # Reusable components
│   │   │   ├── alert/             # Alert notifications
│   │   │   ├── BackButton/        # Navigation
│   │   │   ├── LoadingUI/         # Loading states
│   │   │   ├── popup/             # Modal popups
│   │   │   ├── lab/               # Lab-related components
│   │   │   ├── navbar/            # Navigation bar
│   │   │   ├── theme/             # Theme provider
│   │   │   └── ...
│   │   ├── utls/                  # Utilities
│   │   │   ├── pagination/        # Pagination component
│   │   │   ├── cookies/           # Cookie management
│   │   │   ├── FireApp/           # Firebase utilities
│   │   │   └── ...
│   │   ├── admin/                 # Admin dashboard
│   │   │   ├── page.js            # Admin home
│   │   │   ├── add-devices/       # Device management
│   │   │   ├── add-lab/           # Lab management
│   │   │   ├── add-template/      # Template management
│   │   │   ├── assign-users/      # User assignment
│   │   │   ├── labs/              # Lab list
│   │   │   ├── logs/              # Operation logs
│   │   │   ├── users/             # User management
│   │   │   └── templates/         # Template management
│   │   ├── staff/                 # Staff dashboard
│   │   │   ├── page.js            # Staff home
│   │   │   ├── labs/              # Lab viewing
│   │   │   ├── my-labs/           # Assigned labs
│   │   │   └── logout/
│   │   ├── user/                  # User dashboard
│   │   │   ├── page.js            # User home
│   │   │   └── logout/
│   │   ├── auth/                  # Authentication
│   │   │   ├── login/             # Login page
│   │   │   ├── register/          # Registration page
│   │   │   ├── auth-error/        # Auth error
│   │   │   └── auth-reset/        # Auth reset
│   │   ├── (MAINLAYOUT)/          # Main layout
│   │   ├── api-proxy/             # API proxy routes
│   │   ├── state/                 # Redux/Auth state
│   │   ├── globals.css            # Global styles
│   │   ├── layout.js              # Root layout
│   │   └── page.js                # Home page
│   ├── config.js                  # Configuration
│   ├── middleware.js              # Next.js middleware
│   └── ...
├── public/
│   ├── icons/
│   ├── images/
│   │   ├── icons/
│   │   └── logos/
│   └── ...
├── next.config.mjs                # Next.js config
├── tailwind.config.js             # Tailwind config
├── postcss.config.mjs             # PostCSS config
├── package.json                   # Dependencies
└── README.md
```

## 🔑 Key Features

### Authentication System
- Login with email and password
- User registration with role assignment
- JWT token in HTTP-only cookies
- Automatic token refresh
- Session validation middleware

### Admin Dashboard Features
- **User Management**
  - View all users
  - Filter by role (Admin, Staff, User)
  - Make/remove staff
  - Enable/disable users
  - Search by email

- **Lab Management**
  - Create new laboratories
  - Edit lab details
  - Delete labs
  - Assign staff to labs
  - View lab inventory

- **Device Management**
  - Add devices to labs
  - Edit device properties
  - Delete devices
  - Track device status
  - Move devices between labs

- **Staff Assignment**
  - Assign users as staff
  - Assign staff to specific labs
  - Manage staff permissions
  - Remove staff roles

- **Logs & Templates**
  - View operation logs with pagination
  - Create device templates
  - Manage template categories

### Staff Dashboard Features
- View assigned labs
- Manage devices in assigned labs
- Update device status
- View lab inventory
- Access limited to assigned labs

### User Dashboard Features
- View profile information
- Update personal information
- Change password
- View assigned items (if any)

## 👥 User Roles & Permissions

### Admin
- Full system access
- User and staff management
- Lab and device management
- Template management
- System logs access
- Assign staff to labs

### Staff
- View assigned labs
- Manage devices in assigned labs
- Update device status
- Limited to assigned labs only

### User
- View profile
- View assigned items
- Basic dashboard access

## 🧩 Components & Utilities

### Common Components
- **Alert** - Toast notifications (success, error, info, warning)
- **Spinner** - Loading indicator
- **Pagination** - Page navigation component
- **BackButton** - Navigation helper
- **Navbar** - Application navigation
- **Theme** - Dark/Light theme toggle

### API Integration
- Centralized API configuration
- Fetch wrapper with timeout
- Automatic cookie handling
- Token refresh logic

### State Management
- **AuthProvider** - Authentication state
- Redux store (optional for complex state)
- React Context for theme and alerts

## 🔐 Authentication Flow

```
1. User visits login page
2. Submits email and password
3. Backend validates and returns JWT token
4. Token stored in HTTP-only cookie
5. Middleware validates token on protected routes
6. Token refresh on /auth/login_with_cookie
7. Redirect to appropriate dashboard based on role
```

### Protected Routes
- `/admin/*` - Admin only (requires admin role)
- `/staff/*` - Staff/Admin (requires staff or admin role)
- `/user/*` - All authenticated users

## 🎨 Styling

### Tailwind CSS + DaisyUI
- Responsive design with mobile-first approach
- Pre-built component library via DaisyUI
- Custom color scheme configuration
- Dark mode support

### Global Styles
- `globals.css` - Main stylesheet
- `alert.css` - Alert styling
- `scroll.css` - Custom scrollbar

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: xs, sm, md, lg, xl
- Responsive navigation
- Mobile-friendly tables and forms

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Build Configuration
- Next.js App Router enabled
- Turbopack for faster builds
- Static generation where possible
- Dynamic routes for user pages

### Environment Variables
Ensure `.env.local` is set in production environment variables on Vercel.

## 🔄 Page Examples

### Logs Page (`/admin/logs`)
- Server component with pagination
- Fetches logs from backend API
- Displays in sortable table format
- Previous/Next navigation links
- Shows current page info

### User Management (`/admin/users`)
- Client component with search
- Real-time filtering by role
- Add/remove staff functionality
- User profile links

### Lab Management (`/admin/labs`)
- Create/edit/delete labs
- Assign staff to labs
- View lab inventory
- Pagination support

## 📝 Notes

- All API calls include credentials (cookies)
- Request timeout: configurable in FetchWithTimeOut
- Alert notifications use toast pattern
- Pagination uses query parameters (`?page=X`)
- Images and icons in public folder
- Firebase integration optional

## 🤝 Contributing

Follow these guidelines:
- Use functional components with hooks
- Follow ESLint configuration
- Use Tailwind CSS for styling
- Keep components modular and reusable
- Document complex logic

## 📄 License

© 2025 Md. Salman Hossain. All rights reserved.
This project is proprietary and may not be used, copied, modified, or distributed without explicit permission.

## 📞 Support

For issues or questions:
1. Check API documentation at `/docs` (backend)
2. Review backend error logs
3. Verify environment configuration
4. Check middleware.js for route protection rules
