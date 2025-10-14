import { cn } from '@/lib/cn';
import React from 'react';

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-xl bg-card shadow-card border border-border', className)} {...props} />;
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 pb-2', className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 pt-2', className)} {...props} />;
}
