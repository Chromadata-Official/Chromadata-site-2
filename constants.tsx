import React from 'react';
import { NavItem, ServiceItem, StatItem } from './types';
import { Database, Music, Share2, Box, BarChart3, Globe } from 'lucide-react';

// ==========================================
// LOGO CONFIGURATION
// ==========================================
// To use a GitHub image:
// 1. Go to the file on GitHub.
// 2. Click "Raw" to get the direct link (starts with raw.githubusercontent.com).
// 3. Paste it below.
export const LOGO_URL = "https://raw.githubusercontent.com/Chromadata-Official/chromadata-site/refs/heads/main/logo.svg"; 

export const NAV_ITEMS: NavItem[] = [
  { label: 'Capabilities', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Partners', href: '#platform' },
  { label: 'Insights', href: '#insights' },
  { label: 'About Us', href: '#about' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Data Intelligence',
    description: 'From VINs to ISRC codes, we standardize complex datasets into actionable business intelligence for global enterprises.',
    icon: <Database className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Media & Metadata',
    description: 'Powering the entertainment industry with precise metadata management, ensuring rights and royalties flow accurately across the digital ecosystem.',
    icon: <Music className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1514525253440-b39345208668?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Material Handling',
    description: 'Optimizing supply chains with advanced configuration logic and inventory syndication for industrial equipment and logistics.',
    icon: <Box className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Strategic Analytics',
    description: 'As partners with Tableau and Google, we deliver visualization layers that turn raw data into board-level strategic insights.',
    icon: <BarChart3 className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  }
];

export const STATS: StatItem[] = [
  { value: '30+', label: 'Years of Innovation' },
  { value: 'Global', label: 'Strategic Partners' },
  { value: '250M+', label: 'Daily Transactions' },
  { value: 'Multi', label: 'Vertical Expertise' },
];

export const INDUSTRIES = [
  { title: "Automotive", desc: "The gold standard for VIN decoding and configuration data." },
  { title: "Music & Entertainment", desc: "Metadata precision for Sony and global media giants." },
  { title: "Material Handling", desc: "Logistics intelligence for the industrial supply chain." },
  { title: "Technology Partners", desc: "Deep integrations with Tableau, Google, and Microsoft." },
];