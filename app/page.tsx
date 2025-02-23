import { MorphingText } from "@/components/ui/morphing-text";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BlurFade } from "@/components/ui/blur-fade";

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
    </AuroraBackground>
  );
}
