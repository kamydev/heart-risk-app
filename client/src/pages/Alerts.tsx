import React from "react";
import { AlertTriangle, HeartPulse, Droplet, RotateCw, CheckCircle, Filter, Watch, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { alerts as alertsData, emergencyContacts, highRiskAlert as highRiskAlertData } from "@/lib/mockData";

// Mock alerts with JSX icons
const alertsWithIcons = alertsData.map(alert => {
  let icon;
  
  switch(alert.type) {
    case "warning":
      icon = <HeartPulse className="text-[#facc15]" />;
      break;
    case "info":
      icon = <Droplet className="text-blue-500" />;
      break;
    case "neutral":
      icon = <RotateCw className="text-gray-500" />;
      break;
    case "success":
      icon = <CheckCircle className="text-[#22c55e]" />;
      break;
    default:
      icon = <AlertTriangle className="text-[#ef4444]" />;
  }
  
  return {
    ...alert,
    icon
  };
});

// Critical high risk alert with JSX
const highRiskAlert = {
  ...highRiskAlertData,
  icon: <AlertTriangle className="text-[#ef4444] text-xl" />
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
      
      {/* Emergency Contacts */}
      <Card className="bg-white rounded-2xl shadow-md">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold">Emergency Contacts</h2>
        </div>
        
        <CardContent className="p-0">
          <div className="divide-y divide-gray-100">
            {emergencyContacts.map((contact) => (
              <div key={contact.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 rounded-full p-3">
                      <User className="text-gray-500 h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{contact.name}</h3>
                      <p className="text-gray-600 text-sm">{contact.relationship}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-[#22c55e]" />
                    <span className="hidden md:inline">Call</span>
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-2 ml-14">{contact.phone}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Alert List */}
      <Card className="bg-white rounded-2xl shadow-md">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold">Recent Alerts</h2>
        </div>
        
        <CardContent className="p-0">
          <div className="divide-y divide-gray-100">
            {alertsWithIcons.map((alert) => (
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
      
      {/* Latest Smartwatch Information */}
      <div className="bg-[#22c55e] bg-opacity-10 border border-[#22c55e] border-opacity-20 rounded-lg p-4 text-center">
        <p className="text-sm text-gray-800 flex items-center justify-center">
          <Watch className="mr-2 h-4 w-4 text-[#22c55e]" />
          Data synced from connected smartwatch device. Last sync: 24-Apr-2025
        </p>
      </div>
    </div>
  );
};

export default Alerts;