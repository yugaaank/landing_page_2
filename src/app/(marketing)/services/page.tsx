import {
  AnimationContainer,
  MaxWidthWrapper,
} from "@/components";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import MagicBadge from "@/components/ui/magic-badge";
import { SERVICES } from "@/lib/data";

const ServicesPage = () => {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full pt-20">
      <MaxWidthWrapper className="py-20">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
            <MagicBadge title="Our Services" />
            <h1 className="text-center lg:text-center text-4xl md:text-6xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Empowering Businesses with <br /> AI & Automation
            </h1>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-2xl">
              We provide the technical infrastructure and intelligent systems needed to scale your operations without increasing your overhead.
            </p>
          </div>
        </AnimationContainer>

        <AnimationContainer delay={0.2}>
          <BentoGrid className="py-12">
            {SERVICES.map((feature, idx) => (
              <BentoCard 
                key={idx} 
                {...feature} 
                background={<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />} 
              />
            ))}
          </BentoGrid>
        </AnimationContainer>

        <AnimationContainer delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
                <div>
                    <h2 className="text-3xl font-bold font-heading">AI Call Bots</h2>
                    <p className="mt-4 text-muted-foreground">
                        Our AI-powered voice agents handle inbound and outbound calls with human-like natural conversation. They can qualify leads, book appointments directly into your calendar, and answer complex customer queries 24/7.
                    </p>
                    <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">✨ 24/7 Availability</li>
                        <li className="flex items-center gap-2">✨ Multi-language Support</li>
                        <li className="flex items-center gap-2">✨ CRM Integration</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-bold font-heading">Workflow Automation</h2>
                    <p className="mt-4 text-muted-foreground">
                        We map out your manual processes and replace them with autonomous workflows using tools like Zapier and Make. From lead routing to document generation, we ensure your team focuses on high-value tasks.
                    </p>
                    <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">✨ Zero-error execution</li>
                        <li className="flex items-center gap-2">✨ Thousands of app integrations</li>
                        <li className="flex items-center gap-2">✨ Real-time data syncing</li>
                    </ul>
                </div>
            </div>
        </AnimationContainer>
      </MaxWidthWrapper>
    </div>
  );
};

export default ServicesPage;
