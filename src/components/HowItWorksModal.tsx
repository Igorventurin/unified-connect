import type { LucideIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { VideoPlayer } from "./ui/video-player";

export type FeatureBlock = {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  desc: string;
  bullets: string[];
};

type HowItWorksModalProps = {
  feature: FeatureBlock | null;
  videoSrc: string;
  poster: string;
  onClose: () => void;
};

// Vídeo de demonstração é um placeholder compartilhado entre todos os blocos —
// pendente de GIFs/vídeos curtos reais por funcionalidade (ver Ajuste 7 no
// PLANEJAMENTO_AJUSTES.md).
const HowItWorksModal = ({ feature, videoSrc, poster, onClose }: HowItWorksModalProps) => {
  return (
    <Dialog open={!!feature} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-xl">
        {feature && (
          <>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="w-5 h-5 text-primary" />
              </span>
              <DialogTitle className="text-xl leading-tight">{feature.title}</DialogTitle>
            </div>
            <DialogDescription className="text-[15px] leading-relaxed">
              {feature.subtitle}
            </DialogDescription>
            <VideoPlayer src={videoSrc} poster={poster} className="mt-1" />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default HowItWorksModal;
