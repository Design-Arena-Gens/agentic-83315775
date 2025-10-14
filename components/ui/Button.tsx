import { cn } from '@/lib/cn';
import Link from 'next/link';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  asChild?: boolean;
};

export function Button({ className, variant = 'primary', asChild, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-ring disabled:opacity-50 disabled:cursor-not-allowed';
  const variants: Record<string, string> = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90',
    secondary: 'bg-accent text-white hover:opacity-90',
    ghost: 'bg-transparent hover:bg-muted border border-border',
  };
  if (asChild) {
    return (
      <Link className={cn(base, variants[variant], className)} {...(props as any)} />
    );
  }
  return <button className={cn(base, variants[variant], className)} {...props} />;
}
