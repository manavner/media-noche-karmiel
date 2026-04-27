// TODO(PRD3): Replace static fallback metadata with Sanity CMS weeklyStep query
import { getLatestVideoFromFolder } from '@/lib/google-drive';
import { SectionHeader } from '@/components/ui/SectionHeader';

const LESSONS_FOLDER_ID = '1SR0QLD-u6U2PkKe5DoMucnP_j3MxvVmt';

function extractTitleFromFilename(name: string): string {
  return name.replace(/\.(mp4|mov|avi|mkv|webm)$/i, '').trim();
}

export async function WeeklyStepWidget() {
  const video = await getLatestVideoFromFolder(LESSONS_FOLDER_ID);

  return (
    <section className="section-dark py-16">
      <div className="container-rtl">
        <SectionHeader
          title="צעד השבוע"
          subtitle="תרגל בבית — למד טכניקה חדשה כל שבוע"
          light
        />

        <div className="max-w-2xl mx-auto bg-dark-card rounded-2xl overflow-hidden border border-dark-border">
          <div className="relative aspect-video bg-dark flex items-center justify-center">
            {video ? (
              <iframe
                src={`https://drive.google.com/file/d/${video.id}/preview`}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
                title={extractTitleFromFilename(video.name)}
              />
            ) : (
              <div className="text-center text-white/40">
                <div className="text-5xl mb-3">▶</div>
                <p className="text-sm">וידאו יתווסף בקרוב</p>
              </div>
            )}
          </div>

          <div className="p-6">
            <h3 className="font-display text-xl font-bold text-white mb-2">
              {video ? extractTitleFromFilename(video.name) : 'צעד השבוע'}
            </h3>
            {video && (
              <p className="text-white/40 text-xs">
                עודכן לאחרונה:{' '}
                {new Date(video.modifiedTime).toLocaleDateString('he-IL', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
