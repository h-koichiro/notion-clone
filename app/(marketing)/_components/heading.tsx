"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        某Notionの<span className="underline">海賊版</span>。
      </h1>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        はいって、どうぞ。
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        時代を変えるソリューションがここに。ご利用はご計画的に。
      </h3>
      <Button>
        Hasshiraとして続行
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
