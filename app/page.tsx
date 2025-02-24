import { MorphingText } from "@/components/ui/morphing-text";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BlurFade } from "@/components/ui/blur-fade";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";

export default function Page() {
  return (
    <AuroraBackground>
      <BlurFade delay={0.05}>
        <h3 className="font-medium text-6 popin">Hey there! I am</h3>
      </BlurFade>
      <BlurFade delay={0.25}>
        <h1 className="font-bold text-[38pt] md:text-[56px] lg:text-[6rem] text-center popin">Felipe Benini</h1>
      </BlurFade>
      <MorphingText texts={["fullstack", "backend", "frontend", "devops"]} className="text-[64px] popin text-center mx-auto" />
      <BlurFade delay={0.5} className="mt-20 flex flex-wrap justify-center items-center w-full">
        <Link href="/contact" className="mx-[calc(11px+2.5%)] mb-10">
          <RainbowButton className="text-nowrap">
            Get in Contact
          </RainbowButton>
        </Link>
        <Link href="https://github.com/FelBenini" target="_blank" className="mx-[calc(12px+2.5%)] mb-10">
          <ShimmerButton className="text-[white] px-[3.4rem]">
            <p className="text-[white]">Check out my GitHub!</p>
          </ShimmerButton>
        </Link>
      </BlurFade>
    </AuroraBackground>
  );
}
