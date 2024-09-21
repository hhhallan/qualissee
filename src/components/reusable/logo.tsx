import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type LogoProps = {
  size?: "s" | "m" | "l";
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ size = "m", className }) => {
  const sizeClasses = {
    s: 64,
    m: 128,
    l: 192,
  };

  return (
    <Link href={"/"}>
      <Image
        src="logo.svg"
        alt="Logo"
        width={sizeClasses[size]}
        height={sizeClasses[size] / 2}
        className={clsx("cursor-pointer object-contain", className)}
      />
    </Link>
  );
};
