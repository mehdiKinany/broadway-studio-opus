import type { ElementType, ReactNode, TransitionEvent } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

const delayClass = (index: number) => `reveal-delay-${Math.min(index, 6)}`;

export function Reveal({ children, className, index = 0, as: Tag = "div" }: { children: ReactNode; className?: string; index?: number; as?: ElementType }) {
  const { ref, visible, active } = useReveal<HTMLElement>();
  return <Tag ref={ref} onTransitionEnd={(event: TransitionEvent<HTMLElement>) => { if (event.currentTarget === event.target) event.currentTarget.style.willChange = "auto"; }} className={cn("reveal-block", active && "is-reveal-ready", delayClass(index), visible && "is-visible", className)}>{children}</Tag>;
}

export function RevealTitle({ lines, className }: { lines: readonly string[]; className?: string }) {
  const { ref, visible, active } = useReveal<HTMLHeadingElement>();
  return <h2 ref={ref} className={cn("masked-title editorial-title", active && "is-reveal-ready", visible && "is-visible", className)}>{lines.map((line, index) => <span key={line} onTransitionEnd={(event) => { event.currentTarget.style.willChange = "auto"; }} className={delayClass(index)}>{line}</span>)}</h2>;
}

export function RevealImage({ src, alt, className, imageClassName }: { src: string; alt: string; className?: string; imageClassName?: string }) {
  const { ref, visible, active } = useReveal<HTMLDivElement>();
  return <div ref={ref} onTransitionEnd={(event) => { if (event.currentTarget === event.target) event.currentTarget.style.willChange = "auto"; }} className={cn("image-reveal overflow-hidden", active && "is-reveal-ready", visible && "is-visible", className)}><img src={src} alt={alt} onTransitionEnd={(event) => { event.currentTarget.style.willChange = "auto"; }} className={cn("size-full object-cover", imageClassName)} /></div>;
}