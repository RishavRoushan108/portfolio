const projects = [
  {
    id: 1,
    title: "AI-Powered Blog Platform",
    category: "Full Stack",
    image: "/blog.png",

    shortDescription:
      "A full-stack blogging platform with secure authentication, image handling, and AI-powered comment summarization.",

    description:
      "Built a production-style blog platform where users can create, edit, and manage posts with authentication and media uploads. Integrated AI to summarize user comments, improving readability and engagement. Focused on clean backend architecture and real-world features like image lifecycle management.",

    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Multer",
      "Redis (optional if used)",
      "AI API",
    ],

    highlights: [
      "JWT authentication with protected routes",
      "Full CRUD blog system with image uploads",
      "Automatic cleanup of old images",
      "AI-based comment summarization",
      "User profile management",
    ],

    github: "https://github.com/RishavRoushan108/BLOGAPP",
    liveFrontend: "https://blogapp-ahgb.vercel.app",
    liveBackend: "https://blogapp-delta-three.vercel.app",

    featured: true,
  },
  {
    id: 2,
    title: "CoderConnector",
    category: "Full Stack",
    image: "/cc.png",

    shortDescription:
      "A developer-focused social platform with real-time chat, connection system, and production-style deployment.",

    description:
      "Built a social networking platform for developers to connect, send requests, and chat in real-time. Designed a complete user flow from authentication to messaging, with emphasis on scalable backend structure and real-world deployment using AWS, Nginx, and PM2.",

    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "Socket.IO",
      "JWT",
      "Tailwind",
      "AWS",
      "Nginx",
      "PM2",
    ],

    highlights: [
      "JWT-based authentication with protected routes",
      "Connection system (send, accept, reject requests)",
      "Real-time one-to-one chat using Socket.IO",
      "Profile management system",
      "Deployed on AWS EC2 with Nginx and PM2",
    ],

    impact: [
      "Enabled real-time communication between connected users",
      "Implemented full user interaction flow (connect → chat)",
      "Deployed using production-like infrastructure (AWS + Nginx)",
    ],

    github: "https://github.com/RishavRoushan108/coderconnector",
    liveFrontend: "https://coderconnector.vercel.app",
    liveBackend: "https://coderconnector.onrender.com",

    featured: true,
  },
  {
    id: 3,
    title: "Food Delivery Platform",
    category: "Full Stack",
    image: "/fd.png",

    shortDescription:
      "A multi-role food delivery system with dynamic pricing, order tracking, and real-world workflow simulation.",

    description:
      "Developed a full-stack food delivery application supporting Users, Hotel Owners, and Delivery Partners. Implemented a complete order lifecycle from placement to delivery, including distance-based pricing and role-specific dashboards. Focused on handling real-world workflows and scalable role separation.",

    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "JWT",
      "MongoDB", // adjust if needed
      "Maps API",
      "Vercel",
    ],

    highlights: [
      "Multi-role system (User, Hotel Owner, Delivery Partner)",
      "Complete order lifecycle (placed → accepted → picked → delivered)",
      "Dynamic delivery charges based on distance",
      "Cart system with real-time billing logic",
      "Order tracking and history management",
    ],

    impact: [
      "Simulated real-world delivery workflow with multiple stakeholders",
      "Implemented dynamic pricing using location-based calculations",
      "Designed role-based access and actions across the system",
    ],

    github: "https://github.com/RishavRoushan108/FOOD-dELIVERY-APP",
    liveFrontend: "https://food-d-elivery-app.vercel.app/restaurant",

    featured: true,
  },
  {
    id: 4,
    title: "ASKMYPDF – AI PDF Q&A System",
    category: "Full Stack / AI",
    image: "/askmypdf.png",

    shortDescription:
      "An AI-powered system that lets users upload PDFs and ask questions using semantic search and vector embeddings.",

    description:
      "Built a scalable PDF question-answering system where users can upload documents and query them in natural language. Implemented a pipeline that converts PDFs into chunks, generates embeddings, and stores them in a vector database (Qdrant). On user query, retrieves the most relevant chunks and sends them as context to Gemini AI for accurate responses. Used BullMQ for background processing and Docker for containerized deployment on AWS EC2.",

    techStack: [
      "Next.js",
      "Node.js",
      "Express",
      "LangChain",
      "Google Gemini API",
      "Qdrant",
      "BullMQ (Valkey/Redis)",
      "Docker",
      "AWS EC2",
    ],

    highlights: [
      "PDF upload and processing pipeline",
      "Text chunking and embedding generation",
      "Semantic search using vector database (Qdrant)",
      "Top-K retrieval for efficient context selection",
      "Background job processing with BullMQ",
      "Dockerized multi-service architecture",
      "Deployed on AWS EC2 with low-memory optimization (swap)",
    ],

    github: "https://github.com/RishavRoushan108/ASKMYPDF",
    liveFrontend: "", // add if deployed
    liveBackend: "", // add if deployed

    featured: true,
  },
  {
    id: 5,
    title: "CI/CD Deployment with GitHub Actions",
    category: "DevOps",
    image: "/deploy.png",

    shortDescription:
      "Automated deployment pipeline using GitHub Actions, Docker, and AWS EC2 to eliminate manual server updates.",

    description:
      "Implemented a complete CI/CD workflow to automate application deployment. Built a simple Express.js app, containerized it using Docker, and managed services with Docker Compose. Deployed the application on AWS EC2 and integrated GitHub Actions to automatically pull and run updated code on every push. This setup eliminates repetitive manual deployment steps, reduces errors, and ensures faster and reliable delivery.",

    techStack: [
      "Node.js",
      "Express",
      "Docker",
      "Docker Compose",
      "AWS EC2",
      "GitHub Actions",
      "Linux (Ubuntu)",
    ],

    highlights: [
      "Automated deployment using GitHub Actions (CI/CD pipeline)",
      "Containerized application using Docker",
      "Managed services with Docker Compose",
      "Deployed backend on AWS EC2 instance",
      "Used GitHub Secrets for secure configuration",
      "Reduced manual deployment effort and errors",
    ],

    github:
      "https://github.com/RishavRoushan108/ci-cd-with-github-actions/tree/main", // update this
    liveFrontend: "http://51.21.25.109:3000/",
    liveBackend: "http://51.21.25.109:3000/",

    featured: true,
  },
];

export default projects;
