import { AlertTriangle, HeartPulse, Droplet, RotateCw, CheckCircle, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Alerts data
const alerts = [
  {
    id: 1,
    type: "warning",
    title: "Elevated Heart Rate Detected",
    description: "Heart rate reached 115 BPM during resting period.",
    timestamp: "Yesterday, 8:45 PM",
    icon: <HeartPulse className="text-[#facc15]" />,
    bgColor: "bg-[#facc15] bg-opacity-20",
  },
  {
    id: 2,
    type: "info",
    title: "Blood Pressure Fluctuation",
    description: "Your blood pressure showed significant variation over the last 24 hours.",
    timestamp: "Yesterday, 3:20 PM",
    icon: <Droplet className="text-blue-500" />,
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    type: "neutral",
    title: "Watch Disconnected",
    description: "Your smartwatch was disconnected for more than 2 hours.",
    timestamp: "February 4, 9:15 AM",
    icon: <RotateCw className="text-gray-500" />,
    bgColor: "bg-gray-100",
  },
  {
    id: 4,
    type: "success",
    title: "Risk Score Improved",
    description: "Your heart risk score decreased from 58% to 42% over the past week.",
    timestamp: "February 3, 4:30 PM",
    icon: <CheckCircle className="text-[#4ade80]" />,
    bgColor: "bg-[#4ade80] bg-opacity-20",
  }
];

// Critical high risk alert
const highRiskAlert = {
  id: 0,
  type: "danger",
  title: "High Risk Alert",
  description: "Sustained elevated heart rate and blood pressure detected.",
  timestamp: "Today, 10:33 AM",
  icon: <AlertTriangle className="text-[#ef4444] text-xl" />,
  bgColor: "bg-[#ef4444] bg-opacity-20",
};

const Alerts = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Health Alerts</h1>
        <div>
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>
      
      {/* High Risk Alert */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between">
          <div className="flex space-x-4">
            <div className={highRiskAlert.bgColor + " rounded-full p-3"}>
              {highRiskAlert.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#ef4444]">{highRiskAlert.title}</h3>
              <p className="text-gray-700 mt-1">{highRiskAlert.description}</p>
              <p className="text-sm text-gray-600 mt-2">{highRiskAlert.timestamp}</p>
            </div>
          </div>
          <Button className="bg-[#ef4444] hover:bg-red-500 text-white font-medium mt-4 md:mt-0">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Call Emergency
          </Button>
        </div>
      </div>
      
      {/* Alert List */}
      <Card className="bg-white rounded-2xl shadow-md">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold">Recent Alerts</h2>
        </div>
        
        <CardContent className="p-0">
          <div className="divide-y divide-gray-100">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`${alert.bgColor} rounded-full p-3`}>
                    {alert.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{alert.title}</h3>
                    <p className="text-gray-600 mt-1">{alert.description}</p>
                    <p className="text-sm text-gray-500 mt-2">{alert.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alerts;
