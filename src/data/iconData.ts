
export interface Icon {
  id: string;
  name: string;
  category: string[];
  tags: string[];
  svgPath: string;
}

export const categories = [
  "All",
  "User Interface",
  "Business",
  "Technology",
  "Communication",
  "Social Media",
  "Weather",
  "Transportation",
  "Food & Drinks",
  "Sports & Health"
];

export const iconData: Icon[] = [
  // User Interface Icons
  {
    id: "home",
    name: "Home",
    category: ["User Interface"],
    tags: ["house", "main", "homepage", "residence", "dashboard"],
    svgPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  },
  {
    id: "search",
    name: "Search",
    category: ["User Interface"],
    tags: ["find", "magnify", "lookup", "explore"],
    svgPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  },
  {
    id: "settings",
    name: "Settings",
    category: ["User Interface"],
    tags: ["preferences", "options", "configuration", "gear"],
    svgPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  },
  {
    id: "bell",
    name: "Bell",
    category: ["User Interface"],
    tags: ["notification", "alert", "reminder", "alarm"],
    svgPath: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
  },
  {
    id: "user",
    name: "User",
    category: ["User Interface"],
    tags: ["profile", "person", "account", "avatar"],
    svgPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
  },
  
  // Business Icons
  {
    id: "briefcase",
    name: "Briefcase",
    category: ["Business"],
    tags: ["work", "job", "career", "portfolio", "business"],
    svgPath: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    id: "chart",
    name: "Chart",
    category: ["Business"],
    tags: ["statistics", "graph", "analytics", "data"],
    svgPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  
  // Technology Icons
  {
    id: "desktop",
    name: "Desktop",
    category: ["Technology"],
    tags: ["computer", "monitor", "screen", "display", "pc"],
    svgPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    id: "mobile",
    name: "Mobile",
    category: ["Technology"],
    tags: ["phone", "smartphone", "device", "cellular"],
    svgPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
  },
  {
    id: "code",
    name: "Code",
    category: ["Technology"],
    tags: ["programming", "development", "coding", "developer"],
    svgPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  },
  {
    id: "server",
    name: "Server",
    category: ["Technology"],
    tags: ["database", "storage", "cloud", "hosting"],
    svgPath: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
  },
  
  // Communication Icons
  {
    id: "mail",
    name: "Mail",
    category: ["Communication"],
    tags: ["email", "message", "envelope", "contact"],
    svgPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    id: "chat",
    name: "Chat",
    category: ["Communication"],
    tags: ["message", "conversation", "talk", "comment"],
    svgPath: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  },
  
  // Social Media Icons
  {
    id: "heart",
    name: "Heart",
    category: ["Social Media"],
    tags: ["like", "love", "favorite", "bookmark"],
    svgPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  },
  {
    id: "share",
    name: "Share",
    category: ["Social Media"],
    tags: ["upload", "send", "social", "distribute"],
    svgPath: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
  },
  
  // Weather Icons
  {
    id: "sun",
    name: "Sun",
    category: ["Weather"],
    tags: ["sunny", "weather", "clear", "day", "light"],
    svgPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  },
  {
    id: "cloud",
    name: "Cloud",
    category: ["Weather"],
    tags: ["storage", "weather", "sky", "computing"],
    svgPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
  },
  
  // Transportation Icons
  {
    id: "car",
    name: "Car",
    category: ["Transportation"],
    tags: ["vehicle", "automobile", "transport", "travel"],
    svgPath: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
  },
  {
    id: "airplane",
    name: "Airplane",
    category: ["Transportation"],
    tags: ["flight", "travel", "trip", "journey", "vacation"],
    svgPath: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
  },
  
  // Food & Drinks Icons
  {
    id: "coffee",
    name: "Coffee",
    category: ["Food & Drinks"],
    tags: ["drink", "caffeine", "beverage", "cup", "mug"],
    svgPath: "M8 11h12m-12 3h12m-12 3h12M4 7h16m0 0v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0V5a2 2 0 00-2-2H6a2 2 0 00-2 2v2h16z"
  },
  {
    id: "pizza",
    name: "Pizza",
    category: ["Food & Drinks"],
    tags: ["food", "italian", "slice", "fast-food"],
    svgPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  
  // Sports & Health Icons
  {
    id: "running",
    name: "Running",
    category: ["Sports & Health"],
    tags: ["exercise", "fitness", "sport", "workout", "activity"],
    svgPath: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    id: "heart-pulse",
    name: "Heart Pulse",
    category: ["Sports & Health"],
    tags: ["health", "heartbeat", "medical", "cardio", "pulse"],
    svgPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  }
];
