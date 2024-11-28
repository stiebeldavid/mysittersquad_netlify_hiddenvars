import { UserPlus, Calendar, Clock, Check, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HowItWorksProps {
  onGetStarted: () => void;
}

export const HowItWorks = ({ onGetStarted }: HowItWorksProps) => {
  return (
    <div className="bg-white/95 py-16 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How MySitterSquad Works</h2>
          <p className="text-lg text-gray-600">Four simple steps to coordinate your childcare needs</p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 z-0" />
          
          {/* Arrow Markers */}
          <div className="hidden lg:flex justify-between absolute top-1/2 left-[25%] right-[25%] -translate-y-1/2 z-10">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center transform rotate-[-30deg]">
                <div className="w-4 h-4 border-t-2 border-r-2 border-primary transform rotate-45" />
              </div>
            ))}
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative z-20">
            {/* Step 1 */}
            <div className="space-y-4 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <UserPlus className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Add Your Trusted Sitters</h3>
              <p className="text-gray-600">
                Enter contact details for your existing babysitters - their phone for texts, WhatsApp, or email address.
              </p>
              <p className="text-sm text-gray-500 italic">
                Each sitter's information is private and only visible to you.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-4 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Schedule a Request</h3>
              <p className="text-gray-600">
                Select your date and time needed. That's it - we handle reaching out to all your sitters at once.
              </p>
              <p className="text-sm text-gray-500 italic">
                No need to message each sitter individually anymore.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-4 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Get Quick Responses</h3>
              <p className="text-gray-600">
                Sitters receive your request through their preferred channel and respond with their availability.
              </p>
              <p className="text-sm text-gray-500 italic">
                All responses are organized in one place in your dashboard.
              </p>
            </div>

            {/* Step 4 */}
            <div className="space-y-4 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Confirm Your Sitter</h3>
              <p className="text-gray-600">
                Review available sitters and confirm the one you want.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6 bg-primary/5 py-12 px-4 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800">
              Ready to simplify your babysitter coordination?
            </h3>
            <Button
              onClick={onGetStarted}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 h-auto"
            >
              <ArrowUp className="h-5 w-5 mr-2" />
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};