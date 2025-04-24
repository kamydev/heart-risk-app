// This file would contain all mock data needed for the application
// It's separated here to make it easier to replace with real API calls later

// Risk score data
export const riskScore = {
  value: 62,
  lastUpdated: "15 minutes ago",
  watchSynced: true
};

// Weekly trend data
export const weeklyTrendData = [
  { day: "Mon", value: 45 },
  { day: "Tue", value: 52 },
  { day: "Wed", value: 58 },
  { day: "Thu", value: 60 },
  { day: "Fri", value: 65 },
  { day: "Sat", value: 63 },
  { day: "Sun", value: 62 },
];

// Current vitals
export const currentVitals = {
  heartRate: "72 BPM",
  bloodPressure: "122/78 mmHg",
  bloodGlucose: "95 mg/dL",
  bloodOxygen: "98%"
};

// Recent activities
export const recentActivities = [
  {
    id: 1,
    type: "walk",
    title: "Morning Walk",
    details: "30 min • 2.3km • Today, 7:30 AM",
    icon: "Walking"
  },
  {
    id: 2,
    type: "sleep",
    title: "Sleep Tracking",
    details: "7h 12min • Today, 5:45 AM",
    icon: "Bed"
  },
  {
    id: 3,
    type: "medication",
    title: "Medication Reminder",
    details: "Blood pressure medication • Yesterday, 8:00 PM",
    icon: "Pill"
  }
];

// Alerts data
export const alerts = [
  {
    id: 1,
    type: "warning",
    title: "Elevated Heart Rate Detected",
    description: "Heart rate reached 115 BPM during resting period.",
    timestamp: "Yesterday, 8:45 PM",
    icon: "HeartPulse",
    bgColor: "bg-[#facc15] bg-opacity-20",
  },
  {
    id: 2,
    type: "info",
    title: "Blood Pressure Fluctuation",
    description: "Your blood pressure showed significant variation over the last 24 hours.",
    timestamp: "Yesterday, 3:20 PM",
    icon: "Droplet",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    type: "neutral",
    title: "Watch Disconnected",
    description: "Your smartwatch was disconnected for more than 2 hours.",
    timestamp: "February 4, 9:15 AM",
    icon: "RotateCw",
    bgColor: "bg-gray-100",
  },
  {
    id: 4,
    type: "success",
    title: "Risk Score Improved",
    description: "Your heart risk score decreased from 58% to 42% over the past week.",
    timestamp: "February 3, 4:30 PM",
    icon: "CheckCircle",
    bgColor: "bg-[#4ade80] bg-opacity-20",
  }
];

// Critical high risk alert
export const highRiskAlert = {
  id: 0,
  type: "danger",
  title: "High Risk Alert",
  description: "Sustained elevated heart rate and blood pressure detected.",
  timestamp: "Today, 10:33 AM",
  icon: "AlertTriangle",
  bgColor: "bg-[#ef4444] bg-opacity-20",
};

// User profile data
export const userProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  emergencyContact: "Jane Doe • +1 (555) 987-6543",
  memberSince: "Jan 2023",
  age: 52,
  gender: "Male",
  height: "5'10\" (178 cm)",
  weight: "180 lbs (82 kg)",
  medicalConditions: ["Hypertension", "Type 2 Diabetes"],
  medications: "Lisinopril (10mg, daily)\nMetformin (500mg, twice daily)",
};

// Emergency contacts
export const emergencyContacts = [
  {
    id: 1,
    name: "Jane Doe",
    relationship: "Spouse",
    phone: "+1 (555) 987-6543",
    icon: "User"
  },
  {
    id: 2,
    name: "Dr. Smith",
    relationship: "Cardiologist",
    phone: "+1 (555) 456-7890",
    icon: "Stethoscope"
  }
];

// Settings defaults
export const defaultSettings = {
  emailNotifications: true,
  smsAlerts: true,
  dailySummary: false,
  smartwatchConnected: true,
  smartwatchModel: "Apple Watch Series 7",
  syncFrequency: "15", // in minutes
  batteryOptimization: false,
  autoEmergencyCalls: false
};
