import { RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ToggleSwitch from "@/components/ToggleSwitch";

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      
      <Card className="bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Account Settings */}
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Email Notifications</h3>
                <p className="text-gray-600 text-sm">Receive email updates about your heart health</p>
              </div>
              <ToggleSwitch id="email-toggle" defaultChecked={true} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">SMS Alerts</h3>
                <p className="text-gray-600 text-sm">Receive text messages for high-risk alerts</p>
              </div>
              <ToggleSwitch id="sms-toggle" defaultChecked={true} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Daily Health Summary</h3>
                <p className="text-gray-600 text-sm">Receive a daily report of your health metrics</p>
              </div>
              <ToggleSwitch id="summary-toggle" defaultChecked={false} />
            </div>
          </div>
        </div>
        
        {/* Device Settings */}
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Device Settings</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Smartwatch Connection</h3>
                <p className="text-gray-600 text-sm">Currently connected to Apple Watch Series 7</p>
              </div>
              <ToggleSwitch id="watch-toggle" defaultChecked={true} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Data Sync Frequency</h3>
                <p className="text-gray-600 text-sm">How often data is synced from your device</p>
              </div>
              <Select defaultValue="15">
                <SelectTrigger className="w-full md:w-auto">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">Every 15 minutes</SelectItem>
                  <SelectItem value="30">Every 30 minutes</SelectItem>
                  <SelectItem value="60">Every hour</SelectItem>
                  <SelectItem value="manual">Manual only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Battery Optimization</h3>
                <p className="text-gray-600 text-sm">Extend device battery life (reduces data accuracy)</p>
              </div>
              <ToggleSwitch id="battery-toggle" defaultChecked={false} />
            </div>
          </div>
          
          <Button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium">
            <RefreshCw className="mr-2 h-4 w-4" />
            Sync Now
          </Button>
        </div>
        
        {/* Emergency Settings */}
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Emergency Settings</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Automatic Emergency Calls</h3>
                <p className="text-gray-600 text-sm">Automatically call emergency services for critical alerts</p>
              </div>
              <ToggleSwitch id="emergency-toggle" defaultChecked={false} />
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Emergency Contacts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-gray-100 rounded-full p-2 mr-3">
                      <User className="text-gray-500 h-5 w-5" />
                    </div>
                    <div>
                      <div>Jane Doe (Spouse)</div>
                      <div className="text-sm text-gray-600">+1 (555) 987-6543</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-gray-100 rounded-full p-2 mr-3">
                      <Stethoscope className="text-gray-500 h-5 w-5" />
                    </div>
                    <div>
                      <div>Dr. Smith (Cardiologist)</div>
                      <div className="text-sm text-gray-600">+1 (555) 456-7890</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <Button variant="outline" className="mt-4 text-sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Contact
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

import { User, Plus, PencilIcon, Stethoscope } from "lucide-react";
export default Settings;
