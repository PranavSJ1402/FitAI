"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import HowItWorks from "@/components/Howitworks";
import DailyTip from "@/components/Tips";
import BenefitsSection from "@/components/Features";
import PricingSection from "@/components/Pricing";
import FAQSection from "@/components/FAQ";
import RevealOnScroll from "@/components/RevealonScroll";

const HomePage = () => {
  return (
    <RevealOnScroll>
      <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
        <section className="relative z-10 py-12 flex-grow">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
              <div className="absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2" />

              <div className="lg:col-span-7 space-y-8 relative">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <div>
                    <span className="stardos-stencil text-foreground">
                      Transform
                    </span>
                  </div>
                  <div>
                    <span className="text-primary">Your Body</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-foreground">With Advanced</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-foreground">AI</span>
                    <span className="text-primary"> Technology</span>
                  </div>
                </h1>

                <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>

                <p className="text-xl text-muted-foreground w-2/3">
                  Talk to our AI assistant and get personalized diet plans and
                  workout routines designed just for you
                </p>

                {/* STATS */}
                <div className="flex items-center gap-10 py-6 font-mono">
                  <div className="flex flex-col">
                    <div className="text-xl text-primary">Workout + Diet</div>
                    <div className="text-x uppercase tracking-wider text-muted-foreground">
                      PLANS
                    </div>
                  </div>
                  <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                  <div className="flex flex-col">
                    <div className="text-xl text-primary">Voice-Based</div>
                    <div className="text-x uppercase tracking-wider text-muted-foreground">
                      AI INTERACTION
                    </div>
                  </div>
                  <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                  <div className="flex flex-col">
                    <div className="text-xl text-primary">Personalized</div>
                    <div className="text-x uppercase tracking-wider text-muted-foreground">
                      GENERATED PLANS
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    size="lg"
                    asChild
                    className="overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium"
                  >
                    <Link
                      href={"/generate-program"}
                      className="flex items-center font-mono"
                    >
                      Build Your Program
                      <ArrowRightIcon className="ml-2 size-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-4 pointer-events-none">
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border" />
                </div>

                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="relative overflow-hidden rounded-lg bg-cyber-black">
                    <img
                      src="/hero-ai3.png"
                      alt="AI Fitness Coach"
                      className="size-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-scanline pointer-events-none" />

                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/40 rounded-full" />

                      <div className="absolute top-1/2 left-0 w-1/4 h-px bg-primary/50" />
                      <div className="absolute top-1/2 right-0 w-1/4 h-px bg-primary/50" />
                      <div className="absolute top-0 left-1/2 h-1/4 w-px bg-primary/50" />
                      <div className="absolute bottom-0 left-1/2 h-1/4 w-px bg-primary/50" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Tip - Floating bottom right */}
          <RevealOnScroll>
            <div className="fixed bottom-6 right-6 z-50 max-w-sm">
              <DailyTip />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <BenefitsSection />
          </RevealOnScroll>
          <RevealOnScroll>
            <HowItWorks />
          </RevealOnScroll>
          <RevealOnScroll>
            <PricingSection />
          </RevealOnScroll>
          <RevealOnScroll>
            <FAQSection />
          </RevealOnScroll>
        </section>
      </div>
    </RevealOnScroll>
  );
};

export default HomePage;
