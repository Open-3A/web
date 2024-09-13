import { NavigationBar } from "@/components/common/navigation-bar";
import { CourseSection } from "@/components/course/course-section";
import { MarketSection } from "@/components/market/market-section";
import { ReportSection } from "@/components/report/report-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationBar />

      <div className="container mx-auto space-y-12 px-4 pt-20">
        <MarketSection />
        <CourseSection />
        <ReportSection />
      </div>
    </div>
  );
}
