# IndieCaters Project - Hierarchical Structure Map

## 📁 Project Root Structure
```
indie/
├── 📂 src/
│   └── 📂 app/
│       ├── 📄 layout.js          # Root layout with fonts & metadata
│       ├── 📄 page.js            # Main application component (2000+ lines)
│       ├── 📄 globals.css        # Global styles & Tailwind imports
│       └── 📄 favicon.ico        # Site favicon
├── 📂 public/
│   ├── 📄 file.svg              # File icon
│   ├── 📄 globe.svg             # Globe icon  
│   ├── 📄 next.svg              # Next.js logo
│   ├── 📄 vercel.svg            # Vercel logo
│   └── 📄 window.svg            # Window icon
├── 📂 node_modules/             # Dependencies (500+ packages)
├── 📂 .next/                    # Next.js build output
├── 📂 .vscode/                  # VS Code settings
├── 📄 package.json              # Project dependencies & scripts
├── 📄 next.config.js            # Next.js configuration
├── 📄 next.config.mjs           # Alternative Next.js config
├── 📄 postcss.config.mjs        # PostCSS configuration
├── 📄 jsconfig.json             # JavaScript configuration
├── 📄 eslint.config.mjs         # ESLint configuration
├── 📄 README.md                 # Project documentation
├── 📄 SITEMAP.md                # Website sitemap
└── 📄 PROJECT_STRUCTURE_MAP.md  # This file
```

## 🏗️ Application Architecture Hierarchy

### 🎯 Level 1: Core Application
```
IndieCaters App (page.js)
├── 🔧 State Management
│   ├── Navigation State (activeDropdown, activeSection)
│   ├── UI State (isScrolled, isLoading, hoveredCard)
│   ├── Form State (formData, formErrors, isSubmitting)
│   └── Filter State (selectedIndustry, selectedCategory)
├── 🎨 Layout Components
│   ├── Loading Screen
│   ├── Navigation Bar
│   └── Footer (implied)
└── 📱 Main Content Sections
```

### 🎯 Level 2: Navigation Structure
```
Navigation System
├── 🏠 HOME
├── 📦 PRODUCTS (Dropdown)
│   ├── → Products Overview
│   ├── → Sterilisation Indicators  
│   ├── → Moisture Indicators
│   └── → Temperature Indicators
├── ℹ️ ABOUT (Dropdown)
│   ├── → About Company
│   ├── → Competitors
│   └── → Founder
├── 🏭 INDUSTRIES
└── 📞 CONTACT
```

### 🎯 Level 3: Content Sections Hierarchy

#### 🏠 HOME Section
```
Home (#home)
├── 🏢 Company Logo Section
│   └── IndieCaters Pvt. Ltd. Branding
├── 🎯 Hero Section
│   ├── Company Introduction
│   ├── Mission Statement
│   └── CTA Buttons (Explore Products, Learn More)
├── 📊 Statistics Grid
│   ├── 500+ Products Delivered
│   ├── 50+ Happy Clients
│   ├── 15+ Years Experience
│   └── 24/7 Customer Support
└── ⭐ Key Features Cards
    ├── ISO Certified
    ├── Reliable Performance
    └── Industry Expertise
```

#### 📦 PRODUCTS Section
```
Products (#products)
├── 🎛️ Industry Filter Bar
│   ├── All Industries 🏭
│   ├── Life Sciences 🧬
│   ├── Transportation 🚛
│   ├── Aerospace ✈️
│   ├── Defense 🛡️
│   ├── Food 🍽️
│   └── Manufacturing ⚙️
├── 🏷️ Category Filter Bar
│   ├── All Products (50+)
│   ├── Temperature Indicators (15)
│   ├── Impact Indicators (8)
│   ├── Tilt Indicators (6)
│   ├── Vibration Indicators (5)
│   ├── Humidity Indicators (12)
│   └── Liquid Detection (4)
└── 📋 Product Catalog
    ├── 🧪 Sterilisation Indicators
    │   ├── Class 5 Steam Indicators
    │   ├── Class 6 Steam Indicators
    │   ├── Bow Dick Helix Test Stripes
    │   ├── Self-Adhesive Tape
    │   ├── Helix PCD Test Stripes
    │   ├── BMS Helix Test Stripes
    │   └── Steam Indicator Labels
    ├── 💧 Moisture Indicators
    │   ├── Pink Alert State (High Moisture)
    │   ├── Blue Safe State (Optimal)
    │   ├── Lavender Transition (Intermediate)
    │   └── How It Works Section
    └── 🌡️ Temperature Indicators
        ├── Celsius Scale (71°C - 121°C)
        ├── Visual Confirmation System
        └── Durable Design Features
```

#### ℹ️ ABOUT Section
```
About (#about)
├── 🏢 Company Overview
│   ├── Mission & Vision
│   ├── Quality Standards
│   └── Certifications
├── 🏆 Competitors Analysis
│   ├── Market Positioning
│   ├── Competitive Advantages
│   └── Industry Leadership
└── 👤 Founder Information
    ├── Background & Vision
    ├── Company History
    └── Leadership Team
```

#### 🏭 INDUSTRIES Section
```
Industries (#industries)
├── 🧬 Life Sciences
│   ├── Pharmaceutical Manufacturing
│   ├── Biotechnology Applications
│   └── Research Laboratories
├── 🚛 Transportation & Logistics
│   ├── Cold Chain Monitoring
│   ├── Shipping & Freight
│   └── Supply Chain Management
├── ✈️ Aerospace
│   ├── Aircraft Component Monitoring
│   ├── Space Applications
│   └── Aviation Safety Systems
├── 🛡️ Defense
│   ├── Military Equipment Monitoring
│   ├── Security Applications
│   └── Defense Contractor Solutions
├── 🍽️ Food & Beverage
│   ├── Food Safety Monitoring
│   ├── Processing Plant Applications
│   └── Storage & Preservation
├── ⚙️ Manufacturing
│   ├── Industrial Process Control
│   ├── Quality Assurance
│   └── Equipment Monitoring
└── 🏥 Healthcare & Pharmaceuticals
    ├── Hospital Sterilisation
    ├── Medical Device Monitoring
    └── Patient Safety Applications
```

#### 📞 CONTACT Section
```
Contact (#contact)
├── 📝 Contact Form
│   ├── Name Field (Required)
│   ├── Email Field (Required + Validation)
│   ├── Message Field (Required)
│   └── Submit Handler
├── 💰 RFQ (Request for Quote)
│   ├── Product Selection
│   ├── Custom Requirements
│   └── Quote Generation
└── 📋 Company Information
    ├── Business Details
    └── 24/7 Support Info
```

## 🔧 Technical Component Hierarchy

### 🎨 UI Components Structure
```
UI Components
├── 🧭 Navigation Components
│   ├── Sticky Navigation Bar
│   ├── Dropdown Menus
│   └── Mobile Menu (Responsive)
├── 🎴 Content Components
│   ├── Hero Banner
│   ├── Statistics Cards
│   ├── Feature Cards
│   ├── Product Cards
│   ├── Filter Buttons
│   └── Form Components
├── 🖼️ Media Components
│   ├── Image Gallery
│   ├── Product Images (Unsplash)
│   ├── SVG Icons
│   └── Loading Animations
└── 📱 Interactive Components
    ├── Hover Effects
    ├── Scroll Detection
    ├── Form Validation
    └── Smooth Scrolling
```

### ⚙️ State Management Structure
```
Application State
├── 🧭 Navigation State
│   ├── activeDropdown (products/about/null)
│   ├── hoverTimeout (dropdown delays)
│   └── activeSection (scroll tracking)
├── 🎨 UI State
│   ├── isScrolled (navbar styling)
│   ├── isLoading (loading screen)
│   ├── hoveredCard (card interactions)
│   └── showContactForm (modal state)
├── 🎛️ Filter State
│   ├── selectedIndustry (industry filter)
│   ├── selectedCategory (product filter)
│   └── selectedProduct (RFQ selection)
└── 📝 Form State
    ├── formData (name, email, message)
    ├── formErrors (validation errors)
    └── isSubmitting (form submission)
```

### 🔌 External Dependencies
```
Dependencies Hierarchy
├── 🚀 Core Framework
│   ├── Next.js 15.5.3 (App Router)
│   ├── React 19.1.0 (Hooks & State)
│   └── React-DOM 19.1.0
├── 🎨 Styling & UI
│   ├── Tailwind CSS 4
│   ├── @tailwindcss/postcss
│   └── PostCSS
├── 🔧 Development Tools
│   ├── ESLint 9 (Code Quality)
│   ├── @eslint/eslintrc
│   └── eslint-config-next
├── 🖼️ Media & Assets
│   ├── Next/Image (Optimization)
│   ├── Google Fonts (Geist Sans/Mono)
│   └── Unsplash Integration
└── 📦 Build Tools
    ├── Turbopack (Development)
    ├── SWC Compiler
    └── Sharp (Image Processing)
```

## 🎯 Feature Hierarchy

### 🔍 Interactive Features
```
Interactive Features
├── 🧭 Navigation Features
│   ├── Smooth Scrolling
│   ├── Section Tracking
│   ├── Dropdown Menus
│   └── Mobile Responsiveness
├── 🎛️ Filtering System
│   ├── Industry Filters (7 categories)
│   ├── Product Filters (6 categories)
│   ├── Real-time Updates
│   └── Filter Combinations
├── 📝 Form Features
│   ├── Real-time Validation
│   ├── Error Handling
│   ├── Submission Feedback
│   └── RFQ Generation
└── 🎨 Visual Features
    ├── Loading Animations
    ├── Hover Effects
    ├── Card Interactions
    └── Responsive Design
```

### 📊 Data Structure
```
Content Data Hierarchy
├── 🏢 Company Data
│   ├── Statistics (500+ products, 50+ clients, etc.)
│   ├── Features (ISO, Reliability, Expertise)
│   └── Contact Information
├── 📦 Product Data
│   ├── Categories (Temperature, Impact, Tilt, etc.)
│   ├── Industries (Life Sciences, Transportation, etc.)
│   ├── Specifications (Temperature ranges, etc.)
│   └── Applications (Healthcare, Manufacturing, etc.)
├── 👥 Team Data
│   ├── Founder Information
│   ├── Company History
│   └── Leadership Details
└── 🏭 Industry Data
    ├── Sector Information
    ├── Use Cases
    └── Applications
```

## 🎨 Design System Hierarchy

### 🎨 Visual Design Structure
```
Design System
├── 🎨 Color Palette
│   ├── Primary: Pink (#f8b4cb) to Orange Gradients
│   ├── Secondary: Professional Grays
│   ├── Accent: Status Colors (Green, Red, Blue, Purple)
│   └── Background: White/Gray variations
├── 📝 Typography
│   ├── Primary: Geist Sans (Variable)
│   ├── Monospace: Geist Mono
│   └── Weights: Light → Bold
├── 📐 Layout System
│   ├── Grid System (Tailwind)
│   ├── Responsive Breakpoints
│   ├── Spacing Scale
│   └── Container Widths
└── 🎭 Component Styles
    ├── Cards & Containers
    ├── Buttons & CTAs
    ├── Forms & Inputs
    └── Navigation Elements
```

