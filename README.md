Job Portal Application
A modern, responsive job portal built with Next.js that allows users to browse job opportunities and view detailed job descriptions. The application features a clean, professional design with full-screen layouts and native HTML components.

🚀 Features
Job Listings Page: Browse all available job opportunities with company information, locations, and categories
Job Detail Page: View comprehensive job descriptions, responsibilities, candidate requirements, and application details
Responsive Design: Fully responsive layout that works on desktop, tablet, and mobile devices
Native Components: Built with native HTML elements and Tailwind CSS (no external UI library dependencies)
Dynamic Routing: Individual pages for each job posting with clean URLs
Professional UI: Clean, modern interface with proper spacing, typography, and visual hierarchy
🛠️ Technology Stack
Framework: Next.js 14 (App Router)
Styling: Tailwind CSS
Language: TypeScript
Data: Static JSON file
Icons: Emoji characters (no external icon libraries)
📁 Project Structure
job-portal/
├── app/
│   ├── job/
│   │   └── [id]/
│   │       └── page.tsx          # Job detail page
│   ├── globals.css               # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Job listings page (homepage)
├── data/
│   └── jobs.json                # Job data
└── README.md
🎯 Pages Overview
1. Job Listings Page (/)
Displays all job opportunities in card format
Shows company avatars with fallback to company initials
Includes job titles, company names, locations, and brief descriptions
Features category badges with color coding
Displays total number of available positions
Each job card is clickable and navigates to the detail page  
<img width="830" height="440" alt="job_list" src="https://github.com/user-attachments/assets/7bb5c601-df90-44b0-8a38-1b7499eaf740" />

2. Job Detail Page (/job/[id])
Description Section: Complete job overview and responsibilities
Responsibilities: Bulleted list with visual indicators
Candidate Requirements: Detailed ideal candidate profile including age, gender, and traits
<img width="851" height="442" alt="job_description" src="https://github.com/user-attachments/assets/a1604897-9a2b-4a2b-8a58-075f9ddbbe25" />

When & Where: Onboarding event information
About Sidebar: Key details including posting date, deadline, location, start/end dates
Categories: Color-coded category tags
Required Skills: Skill badges for technical requirements
📊 Data Structure
The application uses a JSON file containing job postings with the following structure:

{
  "job_postings": [
    {
      "id": 1,
      "title": "Job Title",
      "description": "Job description...",
      "responsibilities": ["Responsibility 1", "Responsibility 2"],
      "ideal_candidate": {
        "age": "18-24",
        "gender": "Female",
        "traits": ["Trait 1", "Trait 2"]
      },
      "when_where": "Event details...",
      "about": {
        "posted_on": "Date",
        "deadline": "Date",
        "location": "Location",
        "start_date": "Date",
        "end_date": "Date",
        "categories": ["Category1", "Category2"],
        "required_skills": ["Skill1", "Skill2"]
      },
      "company": "Company Name",
      "image": "/path/to/image"
    }
  ]
}
🚀 Getting Started
Prerequisites
Node.js 18+
npm or yarn package manager
Installation
Clone or download the project files

Install dependencies

npm install
# or
yarn install
Run the development server

npm run dev
# or
yarn dev
Open your browser Navigate to http://localhost:3000 to view the application

Building for Production
npm run build
npm start
🎨 Design Features
Visual Elements
Color-coded Categories: Each job category has a unique color scheme
Professional Typography: Clean, readable fonts with proper hierarchy
Card-based Layout: Modern card design with hover effects
Responsive Grid: Adapts to different screen sizes seamlessly
Visual Indicators: Icons and badges for better user experience
User Experience
Intuitive Navigation: Clear back button and breadcrumb-style navigation
Hover Effects: Interactive elements with smooth transitions
Loading States: Proper error handling for missing images
Accessibility: Semantic HTML structure and proper contrast ratios
📱 Responsive Behavior
Mobile: Single column layout with stacked elements
Tablet: Optimized spacing and typography
Desktop: Full two-column layout with sidebar
Large Screens: Maximum width utilization with proper content distribution
🔧 Customization
Adding New Jobs
Edit data/jobs.json
Add new job object with required fields
Ensure unique ID for each job
Add company logo to public directory if needed
Styling Modifications
Colors can be modified in the getCategoryColor function
Layout adjustments can be made through Tailwind classes
Typography and spacing can be customized in individual components
Adding New Features
Search functionality can be added to the listings page
Filtering options can be implemented
Application forms can be integrated
User authentication can be added
🐛 Known Issues & Limitations
Images are currently placeholder-based
No backend integration (static data only)
No search or filtering functionality
No user authentication system
🤝 Contributing
When making changes:

Maintain the existing code structure
Follow TypeScript best practices
Ensure responsive design is preserved
Test on multiple screen sizes
Update documentation as needed
