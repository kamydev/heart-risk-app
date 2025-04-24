import { useState } from "react";
import { CheckCircle, X, Plus, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock user profile data
const userProfile = {
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

const Profile = () => {
  const [conditions, setConditions] = useState(userProfile.medicalConditions);
  const [medications, setMedications] = useState(userProfile.medications);

  const handleRemoveCondition = (index: number) => {
    setConditions(conditions.filter((_, i) => i !== index));
  };

  const handleAddCondition = () => {
    // In a real app, this would open a modal or prompt for adding a new condition
    const newCondition = "New Condition";
    setConditions([...conditions, newCondition]);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Your Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* User Information */}
        <Card className="bg-white rounded-2xl shadow-md md:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <User className="text-gray-400 h-12 w-12" />
              </div>
              <h2 className="text-xl font-semibold">{userProfile.name}</h2>
              <p className="text-gray-600">Member since {userProfile.memberSince}</p>
              
              <Button variant="outline" className="mt-4 text-sm">
                Change profile picture
              </Button>
            </div>
            
            <div className="mt-6 space-y-4">
              <div>
                <span className="text-gray-600 text-sm">Email</span>
                <p>{userProfile.email}</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Phone</span>
                <p>{userProfile.phone}</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Emergency Contact</span>
                <p>{userProfile.emergencyContact}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Medical Information */}
        <Card className="bg-white rounded-2xl shadow-md md:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Medical Information</h2>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-600 text-sm mb-2">Age</label>
                  <Input
                    type="number"
                    defaultValue={userProfile.age}
                    className="w-full focus:ring-2 focus:ring-red-300 focus:border-red-300"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-600 text-sm mb-2">Gender</label>
                  <Select defaultValue={userProfile.gender}>
                    <SelectTrigger className="w-full focus:ring-2 focus:ring-red-300 focus:border-red-300">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                      <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-gray-600 text-sm mb-2">Height</label>
                  <Input
                    type="text"
                    defaultValue={userProfile.height}
                    className="w-full focus:ring-2 focus:ring-red-300 focus:border-red-300"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-600 text-sm mb-2">Weight</label>
                  <Input
                    type="text"
                    defaultValue={userProfile.weight}
                    className="w-full focus:ring-2 focus:ring-red-300 focus:border-red-300"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-600 text-sm mb-2">Medical Conditions</label>
                  <div className="flex flex-wrap gap-2">
                    {conditions.map((condition, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm flex items-center">
                        {condition}
                        <button
                          type="button"
                          className="ml-2 text-gray-500 hover:text-gray-700"
                          onClick={() => handleRemoveCondition(index)}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      className="rounded-full px-3 py-1 text-sm h-auto"
                      onClick={handleAddCondition}
                    >
                      <Plus className="h-3 w-3 mr-1" /> Add condition
                    </Button>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-600 text-sm mb-2">Current Medications</label>
                  <Textarea
                    className="w-full focus:ring-2 focus:ring-red-300 focus:border-red-300"
                    rows={3}
                    value={medications}
                    onChange={(e) => setMedications(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button type="submit" className="bg-[#ef4444] hover:bg-red-500 text-white font-medium">
                  Save Changes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        {/* Risk Factors */}
        <Card className="bg-white rounded-2xl shadow-md md:col-span-3">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Heart Attack Risk Factors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-medium mb-2">Controllable Factors</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="text-[#4ade80] mr-2 h-4 w-4" />
                    Regular exercise
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#4ade80] mr-2 h-4 w-4" />
                    Healthy diet
                  </li>
                  <li className="flex items-center">
                    <X className="text-[#ef4444] mr-2 h-4 w-4" />
                    High blood pressure
                  </li>
                  <li className="flex items-center">
                    <X className="text-[#ef4444] mr-2 h-4 w-4" />
                    Smoking
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-medium mb-2">Non-Controllable Factors</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <AlertTriangle className="text-[#facc15] mr-2 h-4 w-4" />
                    Age (50+)
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="text-[#facc15] mr-2 h-4 w-4" />
                    Family history
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#4ade80] mr-2 h-4 w-4" />
                    Gender-specific risk
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-medium mb-2">Recommendations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Footprints className="text-blue-500 mr-2 h-4 w-4" />
                    Increase daily step count
                  </li>
                  <li className="flex items-center">
                    <Apple className="text-green-500 mr-2 h-4 w-4" />
                    Reduce sodium intake
                  </li>
                  <li className="flex items-center">
                    <Bed className="text-purple-500 mr-2 h-4 w-4" />
                    Improve sleep quality
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

import { AlertTriangle, Footprints, Apple, Bed } from "lucide-react";
export default Profile;
