import { CourseSection } from "@/components/course/course-section";
import { MarketSection } from "@/components/market/market-section";
import { ReportSection } from "@/components/report/report-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto space-y-12 px-4 pt-20 pb-10">
        <MarketSection />
        <CourseSection />
        <ReportSection />
      </div>
    </div>
  );
}
