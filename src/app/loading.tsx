"use client";

import { Loader, RefreshCw } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export default function Loading() {
  const [showRefresh, setShowRefresh] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRefresh(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-6">
      <div className="relative flex flex-col items-center">
        {/* Pulsing background */}
        <div className="-z-10 pointer-events-none absolute inset-0">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-32 w-32 animate-pulse rounded-full bg-primary/10 blur-2xl" />
        </div>

        {/* Logo with animation */}
        <div className="relative">
          <Image
            alt="Lädt..."
            className="animate-pulse"
            height={80}
            src="/lion256.png"
            width={80}
          />
        </div>

        {/* Loading text */}
        <div className="mt-8 flex items-center gap-3">
          <span className="text-muted-foreground">Seite lädt</span>
          <Loader className="size-5 animate-spin" />
        </div>

        {/* Refresh button after 3 seconds */}
        {showRefresh ? (
          <div className="fade-in slide-in-from-bottom-2 mt-6 animate-in duration-300">
            <Button
              onClick={() => window.location.reload()}
              size="sm"
              variant="outline"
            >
              <RefreshCw className="mr-2 size-4" />
              Seite neu laden
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
