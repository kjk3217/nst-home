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
  colorOverlay: string; // Tailwind gradient classes
}