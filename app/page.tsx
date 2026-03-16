import { HeroSection }        from '@/components/home/HeroSection';
import { PhilosophySection }  from '@/components/home/PhilosophySection';
import { QuickStatsBar }      from '@/components/home/QuickStatsBar';
import { WeeklyStepWidget }   from '@/components/home/WeeklyStepWidget';
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <QuickStatsBar />
      <WeeklyStepWidget />
      <TestimonialsCarousel />
    </>
  );
}
