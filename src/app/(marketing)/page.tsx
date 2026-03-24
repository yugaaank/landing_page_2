import {
  AnimationContainer,
  MaxWidthWrapper,
} from "@/components";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { Button } from "@/components/ui/button";
import { SERVICES, PROCESS, COMPANIES, REVIEWS, SITE_CONFIG } from "@/lib/data";
import { ArrowRightIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      {/* Hero Section */}
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
          <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(225,29,46,0.8)_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-secondary transition-colors duration-200 group-hover:bg-secondary/80" />
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-brand-red/20"></span>
              <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                ✨ Your Growth Starts Here
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </span>
            </button>
            <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
              {SITE_CONFIG.title.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="text-transparent mx-2 bg-gradient-to-r from-brand-red to-brand-red-dark bg-clip-text inline-bloc">
                {SITE_CONFIG.title.split(" ").slice(2, 4).join(" ")}
              </span>
              {" "}
              {SITE_CONFIG.title.split(" ").slice(4).join(" ")}
            </h1>
            <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
              {SITE_CONFIG.description}
              <br className="hidden md:block" />
              <span className="hidden md:block">
                Automate the work that slows your growth.
              </span>
            </p>
            <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
              <Button asChild>
                <Link href={"/contact"} className="flex items-center">
                  Book a Strategy Call
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimationContainer>

          <AnimationContainer
            delay={0.2}
            className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full"
          >
            <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
            <MagicCard className="-m-2 lg:-m-4 overflow-visible p-2 md:p-4">
              <BorderBeam size={250} duration={12} delay={9} />
              <div className="w-full h-[400px] flex items-center justify-center bg-gradient-to-b from-card/80 via-card/60 to-card/30">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="text-4xl md:text-6xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground uppercase">Automations Made</p>
                  </div>
                  <div>
                    <p className="text-4xl md:text-6xl font-bold text-foreground">10k+</p>
                    <p className="text-sm text-muted-foreground uppercase">Hours Saved</p>
                  </div>
                  <div>
                    <p className="text-4xl md:text-6xl font-bold text-foreground">1M+</p>
                    <p className="text-sm text-muted-foreground uppercase">Views Generated</p>
                  </div>
                </div>
              </div>
            </MagicCard>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>

      {/* Companies Section */}
      <MaxWidthWrapper>
        <AnimationContainer delay={0.4}>
          <div className="py-14">
            <div className="mx-auto px-4 md:px-8">
              <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
                Our Advanced Tech Stack
              </h2>
              <div className="mt-8">
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
                  {COMPANIES.map((company) => (
                    <li key={company.name} className="flex flex-col items-center">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={80}
                        height={80}
                        quality={100}
                        className="w-28 h-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                      />
                      <span className="mt-2 text-xs font-medium text-neutral-500">{company.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Services Section */}
      <MaxWidthWrapper className="pt-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
            <MagicBadge title="Services" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Marketing Infrastructure & AI Automation
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              We build internal systems for scale, replacing manual tasks with high-performance AI agents.
            </p>
          </div>
        </AnimationContainer>
        <AnimationContainer delay={0.2}>
          <BentoGrid className="py-8">
            {SERVICES.map((feature, idx) => (
              <BentoCard key={idx} {...feature} background={<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />} />
            ))}
          </BentoGrid>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Process Section */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Our Method" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              System Architecture in 3 Steps
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              A bespoke approach to building internal systems that scale without increasing headcount.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
          {PROCESS.map((process, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <MagicCard className="group md:py-8">
                <div className="flex flex-col items-start justify-center w-full">
                  <process.icon
                    strokeWidth={1.5}
                    className="w-10 h-10 text-foreground"
                  />
                  <div className="flex flex-col relative items-start">
                    <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                      {id + 1}
                    </span>
                    <h3 className="text-base mt-6 font-medium text-foreground">
                      {process.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {process.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Reviews Section */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Success Stories" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Measurable results for our clients
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Hear how Katalyst is transforming businesses through intelligent automation.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-4 md:gap-8 py-10">
          {REVIEWS.map((review, index) => (
            <AnimationContainer delay={0.2 * index} key={index}>
              <MagicCard key={index} className="md:p-0">
                <Card className="flex flex-col w-full border-none h-min">
                  <CardHeader className="space-y-0">
                    <CardTitle className="text-lg font-medium text-muted-foreground">
                      {review.name}
                    </CardTitle>
                    <CardDescription>{review.username}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pb-4">
                    <p className="text-muted-foreground">{review.review}</p>
                  </CardContent>
                  <CardFooter className="w-full space-x-1 mt-auto">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <StarIcon
                        key={i}
                        className="w-4 h-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </CardFooter>
                </Card>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* CTA Section */}
      <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
        <AnimationContainer delay={0.1}>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                Automate the work that slows your Growth
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                Ready to scale your business with AI? Let&apos;s map out your automation roadmap today.
              </p>
              <div className="mt-6">
                <Button asChild>
                    <Link href="/contact">
                        Book a Strategy Call
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
              </div>
            </div>
          </LampContainer>
        </AnimationContainer>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePage;
