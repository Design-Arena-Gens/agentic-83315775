import React from 'react';
import { cn } from '@/lib/cn';

type FieldProps = {
  label: string;
  id: string;
  description?: string;
  error?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextField({ label, id, description, error, required, className, ...props }: FieldProps) {
  const describedBy = [description ? `${id}-desc` : null, error ? `${id}-err` : null]
    .filter(Boolean)
    .join(' ') || undefined;
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium">{label}{required ? ' *' : ''}</label>
      <input
        id={id}
        aria-describedby={describedBy}
        aria-invalid={!!error}
        required={required}
        className={cn('w-full rounded-md border border-border bg-white px-3 py-2 shadow-sm focus-ring', className)}
        {...props}
      />
      {description && <p id={`${id}-desc`} className="text-sm text-gray-600">{description}</p>}
      {error && <p id={`${id}-err`} className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

export function TextAreaField({ label, id, description, error, required, className, ...props }:
  FieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const describedBy = [description ? `${id}-desc` : null, error ? `${id}-err` : null]
    .filter(Boolean)
    .join(' ') || undefined;
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium">{label}{required ? ' *' : ''}</label>
      <textarea
        id={id}
        aria-describedby={describedBy}
        aria-invalid={!!error}
        required={required}
        className={cn('w-full rounded-md border border-border bg-white px-3 py-2 shadow-sm focus-ring min-h-[120px]', className)}
        {...props}
      />
      {description && <p id={`${id}-desc`} className="text-sm text-gray-600">{description}</p>}
      {error && <p id={`${id}-err`} className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
