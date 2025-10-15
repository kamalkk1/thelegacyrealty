// components/LeadForm.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { X, CheckCircle, Phone, Mail, User, Send } from "lucide-react";

interface LeadFormProps {
  source: string;
  project?: string;
  ctaText?: string;
  onClose?: () => void;
  className?: string;
}

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  budget?: string;
  purpose?: string;
}

const LeadForm = ({
  source,
  project = "Mohali High Street - Sector 114 Landran Road",
  ctaText = "Submit",
  onClose,
  className = "",
}: LeadFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
      {
        from_name: data.fullName,
        phone_number: data.phone,
        reply_to: data.email,
        project_name: project,
        source,
        budget: data.budget || "Not specified",
        purpose: data.purpose || "Not specified",
        timestamp: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          dateStyle: "full",
          timeStyle: "medium",
        }),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
    );

    // ✅ Trigger brochure download
    const brochureLink = document.createElement("a");
    brochureLink.href = "/MHD.pdf"; // path from public folder
    brochureLink.download = "Mohali-High-Street-Brochure.pdf";
    brochureLink.click();

    // ✅ Continue normal flow
    setIsSubmitted(true);
    reset();
    setTimeout(() => onClose && onClose(), 2500);
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("There was an error sending your message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 text-center">
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center">
            <CheckCircle className="h-7 w-7 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Thank you for your interest!
          </h3>
          <p className="text-gray-600 text-sm">
            We’ve received your inquiry for <strong>{project}</strong>.
            Our team will reach out shortly.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            For urgent assistance, call{" "}
            <a href="tel:+919695798957" className="text-primary font-semibold">
              +91-9695798957
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative bg-white rounded-2xl shadow-lg p-6 border border-gray-100 ${className}`}>
      {onClose && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </Button>
      )}

      <h2 className="font-poiret text-2xl font-bold text-gray-900 mb-4">
        Get in Touch
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Your Full Name*"
            {...register("fullName", { required: "Name is required" })}
            className="pl-10"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="tel"
            placeholder="Phone Number (10 digits)*"
            maxLength={10}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter a valid 10-digit mobile number",
              },
            })}
            className="pl-10"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="email"
            placeholder="Email Address (Optional)"
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter a valid email address",
              },
            })}
            className="pl-10"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Budget */}
        <div>
          <Select {...register("budget")}>
            <SelectTrigger>
              <SelectValue placeholder="Select Budget Range (Optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3-4cr">₹3-4 Crores</SelectItem>
              <SelectItem value="4-5cr">₹4-5 Crores</SelectItem>
              <SelectItem value="5-7cr">₹5-7 Crores</SelectItem>
              <SelectItem value="7cr+">Above ₹7 Crores</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Purpose */}
        <div>
          <Select {...register("purpose")}>
            <SelectTrigger>
              <SelectValue placeholder="Investment Purpose (Optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="own-business">Own Business</SelectItem>
              <SelectItem value="rental">Rental Investment</SelectItem>
              <SelectItem value="buy-hold">Buy & Hold</SelectItem>
              <SelectItem value="resale">Buy & Resale</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary hover:bg-secondary/90 text-white py-3"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="animate-spin h-4 w-4 border-b-2 border-white rounded-full"></div>
              Sending...
            </div>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              {ctaText}
            </>
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          By submitting, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
