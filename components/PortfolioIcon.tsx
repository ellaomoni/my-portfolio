"use client";

import { Icon } from "@iconify/react";

type PortfolioIconProps = {
  icon: string;
  label?: string;
  className?: string;
  size?: number;
};

export function PortfolioIcon({ icon, label, className, size = 24 }: PortfolioIconProps) {
  return (
    <Icon
      icon={icon}
      width={size}
      height={size}
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
