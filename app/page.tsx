"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        onClick={() => {
          toast({
            className: "bg-green-300",
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM"
          });
        }}
      >
        Show Toast
      </Button>
    </main>
  );
}
