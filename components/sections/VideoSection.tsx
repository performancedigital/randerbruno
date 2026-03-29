import SectionWrapper from '@/components/ui/SectionWrapper';
import { VIDEO_URL } from '@/lib/constants';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <SectionWrapper dark>
      <div className="max-w-3xl mx-auto">
        {VIDEO_URL ? (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <iframe
              src={VIDEO_URL}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Apresentação Rander Bruno"
            />
          </div>
        ) : (
          <div className="w-full aspect-video rounded-xl border-2 border-dashed border-brand-gold/30 bg-brand-dark/50 flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center">
              <Play className="w-8 h-8 text-brand-gold" />
            </div>
            <p className="text-brand-gray text-sm">Vídeo em breve</p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
