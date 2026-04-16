"use client"

import * as React from "react";
import { 
  ShoppingBag, 
  Zap, 
  Cpu, 
  Database, 
  Search,
  ImageIcon,
  Layout,
  Globe,
  CheckCircle2,
  Workflow
} from "lucide-react";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

interface ProjectPageProps {
  onBack: () => void;
}

function MarketplaceIllustration() {
  return (
    <div className="w-full aspect-video bg-[#0B0F14] relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-8">
          {/* Image Input */}
          <div className="w-20 h-20 rounded-2xl glass border border-white/10 flex items-center justify-center text-white/40 animate-pulse">
            <ImageIcon className="h-10 w-10" />
          </div>
          
          <div className="w-12 h-px bg-gradient-to-r from-white/10 to-accent-cyan/50" />

          {/* AI Engine */}
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-accent-violet to-fuchsia-600 flex items-center justify-center shadow-[0_0_40px_rgba(138,43,226,0.3)] relative">
            <Cpu className="h-12 w-12 text-white" />
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent-cyan flex items-center justify-center text-[10px] font-bold text-black shadow-[0_0_10px_rgba(0,245,255,0.5)]">AI</div>
          </div>

          <div className="w-12 h-px bg-gradient-to-r from-accent-violet/50 to-white/10" />

          {/* Marketplace Output */}
          <div className="w-20 h-20 rounded-2xl glass border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
            <ShoppingBag className="h-10 w-10" />
          </div>
        </div>
        
        {/* Floating Tags */}
        <div className="flex gap-4">
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/40 uppercase tracking-widest">SEO Optimized</div>
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/40 uppercase tracking-widest">Multi-Channel</div>
        </div>
      </div>
    </div>
  );
}

export function ProjectPageMarketplace({ onBack }: ProjectPageProps) {
  return (
    <ProjectCaseStudy
      onBack={onBack}
      title="AI Marketplace Listing Generator"
      description="Automating the creation of high-converting product titles, descriptions, and SEO tags for e-commerce platforms using multi-modal AI."
      domain="E-commerce & Retail"
      tags={["AI Automation Use Case", "Multi-modal AI", "SEO Optimization"]}
      heroIcon={ShoppingBag}
      heroBanner={<MarketplaceIllustration />}
      businessContext="E-commerce retailers managing thousands of SKUs across multiple platforms (Amazon, eBay, Shopify) often face bottlenecks in content creation, leading to delayed product launches and inconsistent brand representation."
      businessIcon={Globe}
      challenges={[
        "Manual drafting of thousands of product descriptions is slow and error-prone",
        "Inconsistent tone and quality across different sales channels",
        "Delayed time-to-market for seasonal collections due to content bottlenecks",
        "Suboptimal SEO performance due to lack of systematic keyword research"
      ]}
      aiOpportunity={{
        title: "Multi-modal Content Generation",
        description: "Leveraging vision-language models to transform raw product assets into optimized digital storefronts at scale.",
        features: [
          "Visual feature extraction from product images",
          "LLM-based generation of persuasive descriptions",
          "Automated keyword injection based on search trends",
          "Rule-based adjustment for marketplace requirements"
        ]
      }}
      solutionOverview="A multi-modal AI pipeline that analyzes product images and technical specifications to generate optimized, platform-specific listings that drive conversion and improve search visibility."
      workflowSteps={[
        { label: "Data Sources", icon: Database, sub: "Images & Specs", description: "Ingesting raw product images and technical specifications from the PIM system." },
        { label: "Processing", icon: Cpu, sub: "Vision Analysis", description: "Multi-modal AI extracts visual features, colors, and styles from product media." },
        { label: "AI Analysis", icon: Layout, sub: "Content Synthesis", description: "Generating SEO-optimized titles and descriptions tailored for each marketplace." },
        { label: "Output", icon: Globe, sub: "Multi-Channel", description: "Automated distribution of finalized listings to Amazon, eBay, and Shopify." }
      ]}
      architecture={[
        { 
          id: "vision", 
          title: "Multi-modal Engine", 
          description: "Gemini 1.5 Pro Vision analyzes product images to extract visual attributes.",
          icon: ImageIcon,
          position: { x: 20, y: 30 },
          connections: ["orchestrator"]
        },
        { 
          id: "orchestrator", 
          title: "Content Orchestrator", 
          description: "Custom logic to tailor generated content for specific marketplace constraints.",
          icon: Workflow,
          position: { x: 50, y: 30 },
          connections: ["seo"]
        },
        { 
          id: "seo", 
          title: "SEO Integration", 
          description: "Real-time connection to search trend APIs for keyword optimization.",
          icon: Search,
          position: { x: 80, y: 30 },
          connections: ["pim"]
        },
        { 
          id: "pim", 
          title: "PIM Connector", 
          description: "Automated sync with Product Information Management systems.",
          icon: Database,
          position: { x: 50, y: 70 }
        }
      ]}
      impact={[
        { label: "Listing Speed", value: "-80%", desc: "Reduction in time from SKU creation to live listing." },
        { label: "Productivity", value: "3x", desc: "Increase in catalog management capacity per team member." },
        { label: "SEO Impressions", value: "+25%", desc: "Increase in organic search visibility within 30 days." },
        { label: "Consistency", value: "100%", desc: "Compliance with brand and marketplace guidelines." }
      ]}
      transformationInsight="E-commerce transformation is driven by the ability to turn raw visual data into digital assets at scale, effectively removing human bottlenecks from the growth equation."
    />
  );
}
