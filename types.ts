import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}