import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: {
      icon: "w-5 h-5",
      text: "text-lg",
    },
    md: {
      icon: "w-6 h-6",
      text: "text-xl",
    },
    lg: {
      icon: "w-8 h-8",
      text: "text-2xl",
    },
  };

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 group transition-colors",
        className
      )}
    >
      <div className="relative">
        <Image
          src="/favicon.ico"
          alt="Rizz by Chase"
          width={32}
          height={32}
          className={cn(
            sizes[size].icon,
            "group-hover:scale-110 transition-transform"
          )}
        />
      </div>
      {showText && (
        <span
          className={cn(
            sizes[size].text,
            "font-bold text-cream group-hover:text-amber transition-colors"
          )}
        >
          Rizz by Chase
        </span>
      )}
    </Link>
  );
}
