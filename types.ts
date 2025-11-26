import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  subLabel: string;
}

export interface PortfolioItem {
  id: number;
  category: string;
  image: string;
  title: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  image: string;
  subTitle: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ProcessStep {
  step: number;
  title: string;
  desc: string;
  icon: React.ElementType;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface HistoryItem {
  year: string;
  title: string;
  desc: string;
}

export interface ReasonItem {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  activeImage?: string; // 클릭 시 보여줄 이미지 (선택적 속성)
  colorOverlay: string; // Tailwind gradient classes
}

export interface BranchItem {
  name: string;
  location: string;
}

export interface BranchRegion {
  region: string;
  count: number;
  items: BranchItem[];
  colorTheme: string; // Tailwind class for header bg
}
