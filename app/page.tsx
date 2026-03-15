import { HeroSection }               from '@/components/home/HeroSection';
import { QuickStatsBar }             from '@/components/home/QuickStatsBar';
import { UpcomingClassesPreview }    from '@/components/home/UpcomingClassesPreview';
import { WeeklyStepWidget }          from '@/components/home/WeeklyStepWidget';
import { TestimonialsCarousel }      from '@/components/home/TestimonialsCarousel';
import { GalleryPreviewPlaceholder } from '@/components/home/GalleryPreviewPlaceholder';
import { mockClassesData }           from '@/lib/mock-data/classes';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickStatsBar />
      <UpcomingClassesPreview classes={mockClassesData.slice(0, 3)} />
      <WeeklyStepWidget />
      <TestimonialsCarousel />
      <GalleryPreviewPlaceholder />
    </>
  );
}
