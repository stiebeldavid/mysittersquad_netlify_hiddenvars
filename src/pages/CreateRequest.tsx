import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { BabysitterSelector } from "@/components/create-request/BabysitterSelector";
import { AddressInput } from "@/components/create-request/AddressInput";
import { createRequest } from "@/lib/airtable";
import { useAuthStore } from "@/store/authStore";

const CreateRequest = () => {
  const [date, setDate] = useState<Date>();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedBabysitters, setSelectedBabysitters] = useState<string[]>([]);
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const user = useAuthStore((state) => state.user);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!date || !startTime || !endTime || selectedBabysitters.length === 0 || !user) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select at least one babysitter.",
        variant: "destructive",
      });
      return;
    }

    try {
      await createRequest(
        date,
        startTime,
        endTime,
        selectedBabysitters[0],
        user.mobile
      );

      toast({
        title: "Request Created",
        description: "Your babysitting request has been created successfully.",
      });
      navigate("/requests");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="page-container">
      <Card>
        <CardHeader>
          <CardTitle>Create Babysitting Request</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Date</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="startTime">Start Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                      id="startTime"
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endTime">End Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                      id="endTime"
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <AddressInput address={address} onAddressChange={setAddress} />
            
            <BabysitterSelector
              selectedBabysitters={selectedBabysitters}
              onBabysittersChange={setSelectedBabysitters}
            />

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special instructions or requirements..."
                className="min-h-[100px]"
              />
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full">
                Create Request
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateRequest;