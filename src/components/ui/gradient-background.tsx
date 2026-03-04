import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type GradientBackgroundProps = React.ComponentProps<'div'> & {
    // Animation customization
    gradients?: string[];
    animationDuration?: number;
    animationDelay?: number;

    // Layout customization
    enableCenterContent?: boolean;

    // Visual customization
    overlay?: boolean;
    overlayOpacity?: number;
};

const Default_Gradients = [
    "linear-gradient(135deg, #e0eee5 0%, #e0eee5 100%)", // Base verde bem claro
    "linear-gradient(135deg, #e0eee5 0%, #84b896 100%)", // Transição para tom médio
    "linear-gradient(135deg, #84b896 0%, #e0eee5 100%)", // Tom médio voltando a verde claro
    "linear-gradient(135deg, #e0eee5 0%, #e0eee5 100%)", // Retorna à base
];

export function GradientBackground({
    children,
    className = '',
    gradients = Default_Gradients,
    animationDuration = 20, // Velocidade reduzida
    animationDelay = 0.5,
    overlay = false,
    overlayOpacity = 0.3,
}: GradientBackgroundProps) {
    return (
        <div className={cn('relative w-full overflow-hidden', className)}>
            {/* Animated gradient background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ background: gradients[0] }}
                animate={{ background: gradients }}
                transition={{
                    delay: animationDelay,
                    duration: animationDuration,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                }}
            />

            {/* Optional overlay */}
            {overlay && (
                <div
                    className="absolute inset-0 bg-black z-0 pointer-events-none"
                    style={{ opacity: overlayOpacity }}
                />
            )}

            {/* Content wrapper */}
            {children && (
                <div className={cn('relative z-10 w-full')}>
                    {children}
                </div>
            )}
        </div>
    );
}
