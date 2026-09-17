import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

const delayClass = (index: number) => `reveal-delay-${Math.min(index, 6)}`;

export function Reveal({ children, className, index = 0, as: Tag = "div" }: { children: ReactNode; className?: string; index?: number; as?: ElementType }) {
  const { ref, visible } = useReveal<HTMLElement>();
  return <Tag ref={ref} className={cn("reveal-block", delayClass(index), visible && "is-visible", className)}>{children}</Tag>;
}

export function RevealTitle({ lines, className }: { lines: readonly string[]; className?: string }) {
  const { ref, visible } = useReveal<HTMLHeadingElement>();
  return <h2 ref={ref} className={cn("masked-title editorial-title", visible && "is-visible", className)}>{lines.map((line, index) => <span key={line} className={delayClass(index)}>{line}</span>)}</h2>;
}

export function RevealImage({ src, alt, className, imageClassName }: { src: string; alt: string; className?: string; imageClassName?: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return <div ref={ref} className={cn("image-reveal overflow-hidden", visible && "is-visible", className)}><img src={src} alt={alt} className={cn("size-full object-cover", imageClassName)} /></div>;
}