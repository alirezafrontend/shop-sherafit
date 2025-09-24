"use client";

import { useMutation } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { createUserQuestion } from "@/services/api";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "../ui/sonner";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    text: "",
  });

  const mutation = useMutation({
    mutationFn: (formData: typeof form) => createUserQuestion(formData),
    onSuccess: () => {
      toast("پیام شما با موفقیت ارسال شد", {
        description: "با تشکر از ارسال سوال شما!",
        action: {
          label: "بستن",
          onClick: () => console.log("Undo clicked"),
        },
        className:
          "relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[var(--color-footer-link)] after:w-full after:animate-toastProgress",
      });

      setForm({ name: "", email: "", text: "" });
    },
    onError: () => {
      toast.error("ارسال پیام با خطا مواجه شد ❌", {
        description: "لطفا دوباره تلاش کنید",
        action: {
          label: "بستن",
          onClick: () => console.log("Undo clicked"),
        },
        className:
          "relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-red-500 after:w-full after:animate-toastProgress",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-[1020px] mx-auto border-t-[1px] border-[var(--color-alt-content-border)] pt-[50px]">
      <div className="mb-[40px]">
        <h2 className="text-center text-[17px] font-medium">
          سوالی دارید با افتخار در خدمتتون هستیم
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="grid grid-col-1 md:grid-cols-2 gap-[20px] mb-[20px]">
            <div className="col-span-1 flex flex-col gap-y-[12px]">
              <label className="text-[#00000079]" htmlFor="name">
                نام و نام خانوادگی
              </label>
              <input
                onChange={handleChange}
                className="px-[12px] h-[38px] border-[1px] border-[var(--inputs-border-color)] focus:border-[var(--inputs-focus-border-color)] rounded-[var(--inputs-border-radius)] outline-none"
                type="text"
                id="name"
                placeholder="نام و نام خانوادگی خود را وارد کنید..."
                value={form.name}
                name="name"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-y-[12px]">
              <label className="text-[#00000079]" htmlFor="email">
                ایمیل
              </label>
              <input
                onChange={handleChange}
                className="px-[12px] h-[38px] border-[1px] border-[var(--inputs-border-color)] focus:border-[var(--inputs-focus-border-color)] rounded-[var(--inputs-border-radius)] outline-none"
                type="email"
                id="email"
                placeholder="ایمیل خود را وارد کنید..."
                value={form.email}
                name="email"
              />
            </div>
          </div>
          <div className="mb-[20px]">
            <div className="col-span-1 flex flex-col gap-y-[12px]">
              <label className="text-[#00000079]" htmlFor="text">
                متن پیام
              </label>
              <textarea
                onChange={handleChange}
                className="px-[12px] py-[8px] min-h-[103px] border-[1px] border-[var(--inputs-border-color)] focus:border-[var(--inputs-focus-border-color)] rounded-[var(--inputs-border-radius)] outline-none"
                id="text"
                placeholder="پیام خود را وارد کنید..."
                value={form.text}
                name="text"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="bg-[var(--color-footer-link)] hover:bg-[#000] hover:text-[#fff] cursor-pointer"
            >
              ارسال
            </Button>
          </div>
        </div>
      </form>
      <div>
        <Toaster
          closeButton
          dir="rtl"
          position="top-right"
          duration={4000}
          toastOptions={{
            className: "!text-[16px]",
          }}
        />
      </div>
    </div>
  );
}
