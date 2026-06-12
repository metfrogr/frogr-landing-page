import { useState, useRef } from "react";
import { validateIndianMobile } from "../utils/validateIndianMobile";

const LOOPS_FORM_ID = "cmgrgqh7e7xbx030in9jo5vx9";
const LOOPS_API_URL = `https://app.loops.so/api/newsletter-form/${LOOPS_FORM_ID}`;
const SOURCE = "Landing page";
const COUNTDOWN_SECONDS = 5;

export type UserType = "Employer" | "Tasker" | "Broker";
export type FormState = "form" | "success" | "error";

const USER_GROUP_MAP: Record<UserType, string> = {
  Employer: "Employer",
  Tasker: "Tasker",
  Broker: "Broker",
};

export function useWaitlistForm() {
  const [userType, setUserType] = useState<UserType>("Employer");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formState, setFormState] = useState<FormState>("form");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function resetForm() {
    if (countdownRef.current) clearInterval(countdownRef.current);
    setFormState("form");
    setPhone("");
    setUserType("Employer");
    setPhoneError("");
    setErrorMessage("");
    setCountdown(COUNTDOWN_SECONDS);
  }

  function handlePhoneChange(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    setPhone(digits);
    if (phoneError) setPhoneError("");
  }

  function handlePhoneKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Home", "End"];
    if (allowed.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  }

  function handlePhonePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 10);
    setPhone(pasted);
    if (phoneError) setPhoneError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isLoading) return;

    const validation = validateIndianMobile(phone);
    if (!validation.valid) {
      setPhoneError(validation.message);
      return;
    }

    setIsLoading(true);
    setPhoneError("");

    const params = new URLSearchParams({
      userGroup: USER_GROUP_MAP[userType],
      mailingLists: "",
      source: SOURCE,
      email: `${phone}@phone.placeholder`,
      phoneNumber: phone,
    });

    try {
      const res = await fetch(LOOPS_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setFormState("success");
        setPhone("");
        setUserType("Employer");
        let remaining = COUNTDOWN_SECONDS;
        setCountdown(remaining);

        countdownRef.current = setInterval(() => {
          remaining--;
          setCountdown(remaining);
          if (remaining <= 0) {
            clearInterval(countdownRef.current!);
            resetForm();
          }
        }, 1000);
      } else {
        const msg = (json?.message || json?.error || "") as string;
        if (msg.toLowerCase().includes("already")) {
          setPhoneError("This mobile number is already registered");
          setFormState("form");
        } else {
          setErrorMessage(msg || "Something went wrong. Please try again.");
          setFormState("error");
        }
      }
    } catch {
      setErrorMessage("Network error, please check your connection");
      setFormState("error");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    userType,
    setUserType,
    phone,
    handlePhoneChange,
    handlePhoneKeyDown,
    handlePhonePaste,
    phoneError,
    formState,
    isLoading,
    errorMessage,
    countdown,
    handleSubmit,
    resetForm,
  };
}
