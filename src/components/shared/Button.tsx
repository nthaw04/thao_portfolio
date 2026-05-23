"use client";

import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Button as UiButton } from "../ui/button";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", ...props }: ButtonProps) {
  return <UiButton variant={variant} {...props} />;
}
