import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
    src: string;
    className?: string;
    poster?: string;
}

export function VideoPlayer({ src, className, poster }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(false);

    const togglePlay = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(currentProgress || 0);
        }
    };

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            const newTime = (Number(e.target.value) / 100) * videoRef.current.duration;
            videoRef.current.currentTime = newTime;
            setProgress(Number(e.target.value));
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            const newMuted = !isMuted;
            videoRef.current.muted = newMuted;
            setIsMuted(newMuted);
        }
    };

    const handleFullscreen = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
        }
    };

    return (
        <div
            className={cn(
                "relative group overflow-hidden rounded-3xl border-[6px] border-primary/10 shadow-2xl bg-black aspect-video transition-all duration-500 hover:border-primary/30 hover:scale-[1.01]",
                className
            )}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/20 pointer-events-none z-10" />

            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className="w-full h-full object-cover cursor-pointer"
                onTimeUpdate={handleTimeUpdate}
                onClick={() => togglePlay()}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                playsInline
            />

            {/* Custom Controls Overlay */}
            <div
                className={cn(
                    "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 p-6",
                    showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
            >
                {/* Big Play Button Center */}
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <button
                            className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl shadow-primary/40 pointer-events-auto"
                            onClick={(e) => togglePlay(e)}
                        >
                            <Play className="w-8 h-8 fill-current ml-1" />
                        </button>
                    </div>
                )}

                <div className="relative z-20 space-y-4">
                    {/* Progress Bar */}
                    <div className="relative group/progress h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full bg-primary transition-all duration-100"
                            style={{ width: `${progress}%` }}
                        />
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={handleProgressChange}
                            onClick={(e) => e.stopPropagation()}
                            className="absolute inset-0 w-full opacity-0 cursor-pointer"
                        />
                    </div>

                    <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-6">
                            <button onClick={(e) => togglePlay(e)} className="hover:text-primary transition-colors">
                                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                            </button>
                            <button onClick={(e) => toggleMute(e)} className="hover:text-primary transition-colors">
                                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                            </button>
                        </div>

                        <button onClick={(e) => handleFullscreen(e)} className="hover:text-primary transition-colors">
                            <Maximize size={22} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Top glass reflection effect */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        </div>
    );
}
