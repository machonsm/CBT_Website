import React from 'react';

export const LogoMark: React.FC<{ className?: string }> = ({ className = "w-12 h-9" }) => (
  <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="35" cy="45" r="30" fill="#1b3644" />
    <circle cx="65" cy="45" r="30" fill="#FF5938" />
    <circle cx="95" cy="45" r="30" fill="#FDBF2E" />
  </svg>
);

export const PetalOrange: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 50C10 22.3858 32.3858 0 60 0C87.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 10 77.6142 10 50Z" fill="#FF5938" />
  </svg>
);

export const PetalGreen: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 100C0 44.7715 44.7715 0 100 0V100H0Z" fill="#2FA875" />
  </svg>
);

export const PetalPink: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 100 0 50C0 22.3858 22.3858 0 50 0Z" fill="#F39AC5" />
  </svg>
);

export const BlueHeroShape: React.FC<{ className?: string }> = ({ className = "w-24 h-16" }) => (
  <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 70C0 31.3401 31.3401 0 70 0C108.66 0 120 31.3401 120 70H0Z" fill="#2D75C8" />
  </svg>
);

export const CompositionTherapy: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Base grid background */}
    <rect width="600" height="500" fill="#2FA875" />
    {/* Large dark green pill shape */}
    <rect x="100" y="120" width="260" height="340" rx="130" fill="#1b3644" />
    {/* Pink circle background */}
    <circle cx="460" cy="160" r="130" fill="#F39AC5" />
    {/* Blue Arch */}
    <path d="M180 320 C180 200, 380 200, 380 320 Z" fill="#2D75C8" />
    {/* Orange semi-circle top right */}
    <path d="M300 0 A150 150 0 0 1 600 0 Z" fill="#FF5938" />
    {/* Cream Circle */}
    <circle cx="430" cy="330" r="110" fill="#FCF5F0" />
    {/* Dark green arch */}
    <path d="M210 320 A110 110 0 0 1 430 320 Z" fill="#1b3644" opacity="0.9" />
  </svg>
);

export const CompositionAbout: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="500" height="400" fill="#2FA875" />
    <circle cx="80" cy="200" r="180" fill="#F39AC5" opacity="0.85" />
    {/* Stacked yellow half ovals */}
    <path d="M340 100 C340 70, 480 70, 480 100 Z" fill="#FDBF2E" />
    <path d="M340 160 C340 130, 480 130, 480 160 Z" fill="#FDBF2E" />
    <path d="M340 220 C340 190, 480 190, 480 220 Z" fill="#FDBF2E" />
    <circle cx="450" cy="200" r="45" fill="#FCF5F0" />
  </svg>
);

export const CompositionCTA: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="340" cy="200" r="160" fill="#1b3644" />
    <path d="M220 250 C220 120, 360 120, 360 250 Z" fill="#2FA875" />
    <circle cx="350" cy="200" r="60" fill="#FCF5F0" />
  </svg>
);

export const BlogShape1: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="200" height="220" fill="#2FA875" />
    <rect x="20" y="30" width="120" height="160" rx="60" fill="#1b3644" />
    <circle cx="150" cy="80" r="50" fill="#F39AC5" />
  </svg>
);

export const BlogShape2: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="200" height="220" fill="#2D75C8" />
    <path d="M20 110 A70 70 0 0 1 160 110 Z" fill="#FF5938" />
    <circle cx="100" cy="130" r="45" fill="#FCF5F0" />
  </svg>
);

export const BlogShape3: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="200" height="220" fill="#FDBF2E" />
    <path d="M40 50 C40 20, 160 20, 160 50 C160 120, 40 120, 40 50 Z" fill="#2FA875" />
    <circle cx="120" cy="110" r="70" fill="#F39AC5" opacity="0.9" />
  </svg>
);
