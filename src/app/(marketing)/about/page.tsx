import {
  AnimationContainer,
  MaxWidthWrapper,
} from "@/components";
import MagicBadge from "@/components/ui/magic-badge";
import { SITE_CONFIG } from "@/lib/data";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full pt-20">
      <MaxWidthWrapper className="py-20">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
            <MagicBadge title="About Katalyst" />
            <h1 className="text-center lg:text-center text-4xl md:text-6xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Scaling Businesses with <br /> Marketing Infrastructure
            </h1>
          </div>
        </AnimationContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
            <AnimationContainer delay={0.2}>
                <h2 className="text-2xl font-bold font-heading">Our Mission</h2>
                <p className="mt-4 text-muted-foreground">
                    At {SITE_CONFIG.name}, we believe that business growth should not be gated by manual labor. Our mission is to empower companies with the technical systems and AI-driven automation needed to scale efficiently.
                </p>
                <p className="mt-4 text-muted-foreground">
                    We specialize in operational efficiency and marketing infrastructure, ensuring that your lead capture, nurturing, and fulfillment processes run like clockwork.
                </p>
            </AnimationContainer>
            <AnimationContainer delay={0.3}>
                <h2 className="text-2xl font-bold font-heading">Our Approach</h2>
                <p className="mt-4 text-muted-foreground">
                    We don&apos;t just &quot;install&quot; tools. We map out your entire system architecture. Through our three-step process—Audit, Automate, and Scale—we identify bottlenecks and build bespoke solutions that integrate seamlessly with your existing stack.
                </p>
                <p className="mt-4 text-muted-foreground">
                    Whether it&apos;s deploying AI Call Bots or building complex cross-platform workflows, our solutions are designed for measurable results.
                </p>
            </AnimationContainer>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutPage;
