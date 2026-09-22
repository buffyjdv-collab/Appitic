"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const schema = z.object({
  name: z.string().min(2, "Name is required").max(80),
  email: z.string().email("Enter a valid email"),
  company: z.string().max(120).optional().or(z.literal("")),
  phone: z.string().max(30).optional().or(z.literal("")),
  product: z.string().optional().or(z.literal("")),
  message: z.string().min(5, "Please tell us a bit more").max(2000),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      product: "",
      message: "",
    },
  });

  const productValue = watch("product");

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Request failed");
      }
      setDone(true);
      reset();
      toast({
        title: "Message sent",
        description: "Thanks! Our team will reach out within one business day.",
      });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description:
          err instanceof Error ? err.message : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy + contact details */}
          <Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get started"
              title="Let's get your business on Apitec 🎉"
              description="Tell us which products you're interested in and a bit about your business. We'll set up a personalized demo and a free trial."
            />

            <div className="mt-8 space-y-4">
              <ContactRow icon={Mail} label="Email" value="apitec.sales@gmail.com" />
              <ContactRow icon={Phone} label="Phone" value="+91 8247589613" />
              <ContactRow icon={MapPin} label="Office" value="Venkata Sai Nilayam, Near DMart, Kompally, Hyderabad" />
            </div>

            <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/5 p-5">
              <p className="text-sm font-bold text-primary">14-day free trial</p>
              <p className="mt-1 text-sm text-muted-foreground">
                No credit card needed. Full access to every feature. Cancel anytime.
              </p>
            </div>
          </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            {done ? (
              <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[oklch(0.83_0.17_165)]/20 text-[oklch(0.5_0.18_165)]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl font-extrabold">Thank you!</h3>
                <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                  Your request has been received. Our team will reach out within
                  one business day to schedule your demo.
                </p>
                <Button variant="outline" className="mt-5" onClick={() => setDone(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" error={errors.name?.message} required>
                    <Input placeholder="Jane Doe" autoComplete="name" {...register("name")} />
                  </Field>
                  <Field label="Work email" error={errors.email?.message} required>
                    <Input type="email" placeholder="jane@company.com" autoComplete="email" {...register("email")} />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Company" error={errors.company?.message}>
                    <Input placeholder="Acme Inc." autoComplete="organization" {...register("company")} />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message}>
                    <Input type="tel" placeholder="+91 8247589613" autoComplete="tel" {...register("phone")} />
                  </Field>
                </div>

                <Field label="Product of interest" error={errors.product?.message}>
                  <Select value={productValue} onValueChange={(v) => setValue("product", v)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a product (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((p) => (
                        <SelectItem key={p.id} value={p.name}>
                          {p.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="Multiple products">Multiple products</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                <Field label="How can we help?" error={errors.message?.message} required>
                  <Textarea
                    placeholder="Tell us about your business and what you're looking for…"
                    rows={4}
                    {...register("message")}
                  />
                </Field>

                <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send message
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to our terms and privacy policy.
                </p>
              </form>
            )}
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-semibold">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-bold">{value}</p>
      </div>
    </div>
  );
}
