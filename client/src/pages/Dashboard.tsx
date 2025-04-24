import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CircularProgress from "@/components/CircularProgress";
import RiskLevelIndicator from "@/components/RiskLevelIndicator";
import { CheckCircle, HeartPulse, Footprints, Bed, Pill } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Mock data for the weekly risk trend chart
const weeklyData = [
  { day: "Mon", value: 45 },
  { day: "Tue", value: 52 },
  { day: "Wed", value: 58 },
  { day: "Thu", value: 60 },
  { day: "Fri", value: 65 },
  { day: "Sat", value: 63 },
  { day: "Sun", value: 62 },
];

const Dashboard = () => {
  // Current risk score (this would come from API in a real app)
  const riskScore = 62;
  
  // Determine risk level based on score
  const getRiskLevel = (score: number) => {
    if (score < 40) return "low";
    if (score < 70) return "moderate";
    return "high";
  };
  
  const riskLevel = getRiskLevel(riskScore);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Heart Risk Dashboard</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Last updated: 15 minutes ago</span>
          <span className="flex items-center text-[#4ade80]">
            <CheckCircle className="mr-1 h-4 w-4" />
            <span>Watch synced</span>
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Risk Score Card */}
        <Card className="bg-white rounded-2xl shadow-md md:col-span-1">
          <CardContent className="p-6 flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4">Current Risk Score</h2>
            
            {/* Circular Progress Bar */}
            <CircularProgress
              percentage={riskScore}
              riskLevel={riskLevel}
            />
            
            {/* Risk Level Legend */}
            <div className="mt-6 w-full">
              <div className="flex items-center justify-between text-sm mb-2">
                <RiskLevelIndicator type="low" label="Low Risk (0-39%)" />
                <RiskLevelIndicator type="moderate" label="Moderate (40-69%)" />
              </div>
              <div className="flex items-center text-sm">
                <RiskLevelIndicator type="high" label="High Risk (70%+)" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Weekly Trend Chart */}
        <Card className="bg-white rounded-2xl shadow-md md:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">7-Day Risk Trend</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={weeklyData}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#ef4444"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                    name="Risk Score"
                    dot={{ strokeWidth: 2, r: 4 }}
                    fillOpacity={0.2}
                    fill="rgba(239, 68, 68, 0.1)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Health Metrics */}
        <Card className="bg-white rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Current Vitals</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Heart Rate</span>
                <span className="font-medium text-lg">72 BPM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Blood Pressure</span>
                <span className="font-medium text-lg">122/78 mmHg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Blood Glucose</span>
                <span className="font-medium text-lg">95 mg/dL</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Blood Oxygen</span>
                <span className="font-medium text-lg">98%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Recent Activities */}
        <Card className="bg-white rounded-2xl shadow-md md:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
            <div className="space-y-3">
              <div className="flex items-center py-3 border-b border-gray-100">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Footprints className="text-blue-500 h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Morning Walk</div>
                  <div className="text-sm text-gray-600">30 min • 2.3km • Today, 7:30 AM</div>
                </div>
              </div>
              
              <div className="flex items-center py-3 border-b border-gray-100">
                <div className="bg-purple-100 rounded-full p-2 mr-3">
                  <Bed className="text-purple-500 h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Sleep Tracking</div>
                  <div className="text-sm text-gray-600">7h 12min • Today, 5:45 AM</div>
                </div>
              </div>
              
              <div className="flex items-center py-3">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <Pill className="text-green-500 h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Medication Reminder</div>
                  <div className="text-sm text-gray-600">Blood pressure medication • Yesterday, 8:00 PM</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
