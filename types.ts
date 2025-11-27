import React from 'react';

// [추가됨] 페이지 네비게이션을 위한 타입 정의
export type PageType = 
  | 'home' 
  | 'recruit' 
  | 'branches' 
  | 'one-stop' 
  | 'track-record' 
  | 'technology'
  | 'method-step1' // [추가]
  | 'method-step2' // [추가]
  | 'method-step3'; // [추가]

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
  icon: React.ElementType;
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
  representative?: string; // 대표자 추가
  contact?: string;       // 연락처 추가
  items?: string;         // 취급 품목 추가
}

export interface BranchRegion {
  region: string;
  count: number;
  items: BranchItem[];
  colorTheme: string; // Tailwind class for header bg
}
