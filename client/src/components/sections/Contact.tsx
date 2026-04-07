import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const formSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t("contact.form.error.name")),
        email: z.string().email(t("contact.form.error.email")),
        phone: z.string().min(7, t("contact.form.error.phone")),
        subject: z.string().min(3, t("contact.form.error.subject")),
        message: z.string().min(10, t("contact.form.error.message")),
      }),
    [t],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const mailtoSubject = encodeURIComponent(`Globalvelo | ${values.subject}`);
      const mailtoBody = encodeURIComponent(
        [
          `${t("contact.form.name")}: ${values.name}`,
          `${t("contact.form.email")}: ${values.email}`,
          `${t("contact.form.phone")}: ${values.phone}`,
          "",
          `${t("contact.form.message")}:`,
          values.message,
        ].join("\n"),
      );

      toast({
        title: t("contact.form.success.title"),
        description: t("contact.form.success.desc"),
      });

      window.location.href = `mailto:info@globalvelo.com.tr?subject=${mailtoSubject}&body=${mailtoBody}`;
      reset();
    } catch {
      toast({
        variant: "destructive",
        title: t("contact.form.fail.title"),
        description: t("contact.form.fail.desc"),
      });
    }
  };

  const contactItems = [
    {
      icon: Mail,
      title: t("contact.email.title"),
      description: t("contact.email.desc"),
      content: (
        <a href="mailto:info@globalvelo.com.tr" className="font-medium text-primary hover:underline" data-testid="link-contact-email">
          info@globalvelo.com.tr
        </a>
      ),
    },
    {
      icon: Phone,
      title: t("contact.phone.title"),
      description: t("contact.phone.desc"),
      content: (
        <a href="tel:+902160000000" className="font-medium text-primary hover:underline" data-testid="link-contact-phone">
          +90 (216) 000 00 00
        </a>
      ),
    },
    {
      icon: MapPin,
      title: t("contact.address.title"),
      description: (
        <p className="text-slate-600 leading-relaxed" data-testid="text-contact-address">
          {t("contact.address.desc1")}
          <br />
          {t("contact.address.desc2")}
        </p>
      ),
      content: null,
    },
  ];

  return (
    <section id="contact" className="section-divider relative overflow-hidden bg-white">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-primary/5 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="section-shell relative z-10">
        <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-12">
          <div className="space-y-10 pt-2">
            <div className="section-heading">
              <span className="section-kicker text-secondary" data-testid="text-contact-badge">
                {t("contact.badge")}
              </span>
              <h2 className="section-title" data-testid="text-contact-title">
                {t("contact.title1")}
                <br />
                <span className="text-primary">{t("contact.title2")}</span>
              </h2>
              <p className="section-copy" data-testid="text-contact-description">
                {t("contact.desc")}
              </p>
            </div>

            <div className="grid gap-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="surface-panel rounded-[1.75rem] px-5 py-5 sm:px-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] border border-slate-200/80 bg-slate-50 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                        <div className="mt-1 text-sm leading-7 text-slate-600">{item.description}</div>
                        {item.content ? <div className="mt-2">{item.content}</div> : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <Card className="surface-panel relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white p-7 md:p-9">
              <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-primary" />
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-950" data-testid="text-contact-form-title">{t("contact.form.title")}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-500" data-testid="text-contact-form-helper">
                    {t("contact.form.helper")}
                  </p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">{t("contact.form.name")}</label>
                    <Input
                      id="name"
                      placeholder={t("contact.form.name.ph")}
                      className="h-12 rounded-xl border-slate-200 bg-slate-50 transition-colors focus:bg-white"
                      aria-invalid={Boolean(errors.name)}
                      data-testid="input-contact-name"
                      {...register("name")}
                    />
                    {errors.name && <p className="text-sm text-red-600" data-testid="status-contact-name">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">{t("contact.form.email")}</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      className="h-12 rounded-xl border-slate-200 bg-slate-50 transition-colors focus:bg-white"
                      aria-invalid={Boolean(errors.email)}
                      data-testid="input-contact-email"
                      {...register("email")}
                    />
                    {errors.email && <p className="text-sm text-red-600" data-testid="status-contact-email">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">{t("contact.form.phone")}</label>
                    <Input
                      id="phone"
                      placeholder="+90 (___) ___ __ __"
                      className="h-12 rounded-xl border-slate-200 bg-slate-50 transition-colors focus:bg-white"
                      aria-invalid={Boolean(errors.phone)}
                      data-testid="input-contact-phone"
                      {...register("phone")}
                    />
                    {errors.phone && <p className="text-sm text-red-600" data-testid="status-contact-phone">{errors.phone.message}</p>}
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-sm font-semibold text-slate-700">{t("contact.form.subject")}</label>
                    <Input
                      id="subject"
                      placeholder={t("contact.form.subject.ph")}
                      className="h-12 rounded-xl border-slate-200 bg-slate-50 transition-colors focus:bg-white"
                      aria-invalid={Boolean(errors.subject)}
                      data-testid="input-contact-subject"
                      {...register("subject")}
                    />
                    {errors.subject && <p className="text-sm text-red-600" data-testid="status-contact-subject">{errors.subject.message}</p>}
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">{t("contact.form.message")}</label>
                  <Textarea
                    id="message"
                    placeholder={t("contact.form.message.ph")}
                    className="min-h-[170px] resize-none rounded-2xl border-slate-200 bg-slate-50 transition-colors focus:bg-white"
                    aria-invalid={Boolean(errors.message)}
                    data-testid="input-contact-message"
                    {...register("message")}
                  />
                  {errors.message && <p className="text-sm text-red-600" data-testid="status-contact-message">{errors.message.message}</p>}
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-500" data-testid="text-contact-form-note">
                  {t("contact.form.note")}
                </div>

                <Button type="submit" size="lg" className="mt-4 h-14 w-full rounded-full text-base font-semibold shadow-[0_20px_60px_-28px_rgba(37,99,235,0.7)]" data-testid="button-contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
