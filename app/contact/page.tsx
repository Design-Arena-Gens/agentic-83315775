"use client";

import { Button } from '@/components/ui/Button';
import { TextAreaField, TextField } from '@/components/ui/FormField';
import { useState } from 'react';

export default function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess(null);
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
    };

    const nextErrors: Record<string, string> = {};
    if (!payload.name.trim()) nextErrors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) nextErrors.email = 'Valid email is required';
    if (payload.message.trim().length < 10) nextErrors.message = 'Message must be at least 10 characters';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      setSuccess('Thanks! We will get back to you soon.');
      form.reset();
    } catch (err: any) {
      setSuccess(null);
      setErrors((e) => ({ ...e, form: err.message }));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-gray-700">Tell us about your setup and goals.</p>

      <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-6" noValidate>
        <TextField id="name" name="name" label="Name" required error={errors.name} autoComplete="name" />
        <TextField id="email" name="email" label="Email" required error={errors.email} autoComplete="email" inputMode="email" />
        <TextAreaField id="message" name="message" label="Message" required error={errors.message} />
        {errors.form && <p className="text-sm text-red-600" role="alert">{errors.form}</p>}
        {success && <p className="text-sm text-green-700" role="status">{success}</p>}
        <Button type="submit" disabled={submitting} aria-busy={submitting} aria-live="polite">
          {submitting ? 'Sending…' : 'Send message'}
        </Button>
      </form>
    </div>
  );
}
