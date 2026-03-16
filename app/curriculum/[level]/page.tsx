// TODO(PRD3): Replace mockCurriculum with Supabase + Sanity curriculum
import { mockCurriculum } from '@/lib/mock-data/curriculum';
import { notFound }       from 'next/navigation';
import Link               from 'next/link';
import type { Metadata }  from 'next';

export async function generateMetadata(
  { params }: { params: { level: string } }
): Promise<Metadata> {
  const level = mockCurriculum.find(l => l.id === params.level);
  return { title: `סילבוס — ${level?.nameHe ?? params.level}` };
}

export default function LevelPage({ params }: { params: { level: string } }) {
  const level = mockCurriculum.find(l => l.id === params.level);
  if (!level) notFound();

  return (
    <main className="section-light min-h-screen">
      <div className="container-rtl py-16">
        <div className="mb-6">
          <Link
            href="/curriculum"
            className="text-sm text-primary hover:underline font-body"
          >
            ← חזרה לסילבוס
          </Link>
        </div>

        <h1 className="font-display text-4xl font-bold text-primary mb-2">{level.nameHe}</h1>
        {level.prerequisites.length > 0 && (
          <p className="text-gray-500 font-body mb-10 text-sm">
            דרישות קדם: {level.prerequisites.join(' | ')}
          </p>
        )}

        <div className="space-y-8">
          {level.categories.map(cat => (
            <div key={cat.id} className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="font-display text-xl font-bold mb-4 text-primary border-b pb-2">
                {cat.nameHe}
              </h2>
              <ul className="space-y-3">
                {cat.steps.map(step => (
                  <li
                    key={step.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-light transition-colors"
                  >
                    <div>
                      <span className="font-body font-medium">{step.nameHe}</span>
                      <span className="text-gray-400 text-sm font-body mr-2">— {step.nameEn}</span>
                    </div>
                    <a
                      href={step.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1 rounded-full transition-colors font-body"
                    >
                      ▶ YouTube
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
