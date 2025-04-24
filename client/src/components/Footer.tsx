import { HeartPulse } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <HeartPulse className="text-[#ef4444] h-5 w-5" />
              <span className="font-semibold">HeartGuard</span>
            </div>
            <p className="text-gray-600 text-sm mt-1">Monitoring heart health, one beat at a time.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-[#ef4444]">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-[#ef4444]">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-[#ef4444]">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
