"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { submitLead, type SubmitResult } from "@/lib/submitLead";

type Field = { name: string; label: string; type: "text" | "email" | "tel"; required?: boolean };
type FieldGroup = { legend: string; fields: Field[] };

const contactGroups: FieldGroup[] = [
  { legend: "Name", fields: [{ name: "fname", label: "First Name", type: "text", required: true }, { name: "lname", label: "Last Name", type: "text", required: true }] },
  { legend: "Email Address", fields: [{ name: "email", label: "Email Address", type: "email", required: true }] },
  { legend: "Subject", fields: [{ name: "subject", label: "Subject", type: "text", required: true }] },
  { legend: "Message", fields: [{ name: "message", label: "Message", type: "text", required: true }] },
];

const warrantyGroups: FieldGroup[] = [
  { legend: "Name", fields: [{ name: "fname", label: "First Name", type: "text", required: true }, { name: "lname", label: "Last Name", type: "text", required: true }] },
  { legend: "Email Address", fields: [{ name: "email", label: "Email Address", type: "email", required: true }] },
  { legend: "Phone Number", fields: [{ name: "phone", label: "Phone Number", type: "tel", required: true }] },
  { legend: "Address", fields: [{ name: "address", label: "Address", type: "text", required: true }] },
  { legend: "Project Manager's Name", fields: [{ name: "pm", label: "Project Manager's Name", type: "text" }] },
  { legend: "List of Warranty Items", fields: [{ name: "items", label: "List of Warranty Items", type: "text", required: true }] },
];

export function LeadForm({ form, successText }: { form: "contact" | "warranty"; successText: string }) {
  const groups = form === "contact" ? contactGroups : warrantyGroups;
  const rootRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const busyRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    if (!rootRef.current) return;
    gsap.fromTo(
      rootRef.current.querySelectorAll("[data-field]"),
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" },
    );
  }, { scope: rootRef });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = `${fd.get("fname") ?? ""} ${fd.get("lname") ?? ""}`.trim();
    const messageField = form === "warranty" ? "items" : "message";
    const subjectField = form === "warranty" ? "address" : "subject";
    const payload = {
      form,
      name,
      email: String(fd.get("email") ?? ""),
      phone: form === "warranty" ? String(fd.get("phone") ?? "") : undefined,
      subject: String(fd.get(subjectField) ?? ""),
      message: String(fd.get(messageField) ?? ""),
    };

    if (busyRef.current) busyRef.current.disabled = true;
    let result: SubmitResult;
    try {
      result = await submitLead(payload);
    } finally {
      if (busyRef.current) busyRef.current.disabled = false;
    }

    const el = statusRef.current;
    if (!el) return;
    if (result.ok) {
      el.textContent = successText;
      el.className = "mt-5 text-[15px] text-[#231f1c]";
      e.currentTarget.reset();
      gsap.fromTo(el, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
    } else {
      el.textContent = result.error || "Submission failed — please call us.";
      el.className = "mt-5 text-[15px] text-red-700";
    }
  }

  return (
    <form ref={rootRef} onSubmit={onSubmit} noValidate={false} className="space-y-6">
      {groups.map((g) => (
        <fieldset key={g.legend} data-field className="rounded-none">
          <legend className="mb-2 font-display text-[12px] uppercase tracking-[0.2em] text-[#3e3e3e]">
            {g.legend} {g.fields.every((f) => f.required !== false) && <span className="text-[#999492]">(required)</span>}
          </legend>
          <div className={`grid gap-4 ${g.fields.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
            {g.fields.map((f) =>
              f.label === "Message" || f.label === "List of Warranty Items" ? (
                <textarea
                  key={f.name}
                  name={f.name}
                  aria-label={f.label}
                  required={f.required}
                  rows={6}
                  className="w-full border border-[#999492]/50 bg-white px-4 py-3 text-[16px] text-[#231f1c] outline-none transition-colors placeholder:text-[#999492] focus:border-[#231f1c]"
                />
              ) : (
                <input
                  key={f.name}
                  name={f.name}
                  type={f.type}
                  aria-label={f.label}
                  required={f.required}
                  className="h-12 w-full border border-[#999492]/50 bg-white px-4 text-[16px] text-[#231f1c] outline-none transition-colors placeholder:text-[#999492] focus:border-[#231f1c]"
                />
              ),
            )}
          </div>
        </fieldset>
      ))}
      <button
        ref={busyRef}
        type="submit"
        data-field
        className="inline-block bg-[#231f1c] px-10 py-4 font-display text-[13px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#3a3430] disabled:opacity-60"
      >
        Submit
      </button>
      <p ref={statusRef} aria-live="polite" className="text-[15px]" />
    </form>
  );
}
