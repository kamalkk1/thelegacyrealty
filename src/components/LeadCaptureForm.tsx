// components/LeadCaptureForm.tsx
import { useState } from 'react';
import { Phone, Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import type { Project } from '../context/ProjectContext';

interface LeadCaptureFormProps {
  project: Project;
}

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

const LeadCaptureForm = ({ project }: LeadCaptureFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
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
          project_name: project.name,
          message: data.message || 'No additional message provided.',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );

      setIsSubmitted(true);
      reset(); // clear form after submit
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="font-poiret font-semibold text-xl text-gray-900 mb-2">
            Thank You!
          </h3>
          <p className="font-inter text-gray-600 mb-6">
            We've received your inquiry for <strong>{project.name}</strong>. 
            Our team will contact you within 24 hours.
          </p>
          <div className="bg-secondary/10 rounded-lg p-4">
            <p className="font-inter text-sm text-gray-700">
              For immediate assistance, call us at{' '}
              <a href="tel:+9198882 47787" className="text-primary font-semibold">
                +91-98882 47787
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative before:absolute before:inset-0 before:bg-white before:-z-[1] rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="mb-6">
        <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-2">
          Book a Free Consultation
        </h2>
        <p className="font-inter text-gray-600">
          Fill out the form and our team will contact you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block font-inter font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-inter font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="+91-9876543210"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-inter font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Project */}
        <div>
          <label className="block font-inter font-medium text-gray-700 mb-2">
            Interested Project
          </label>
          <input
            type="text"
            value={project.name}
            readOnly
            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-600"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-inter font-medium text-gray-700 mb-2">
            Message (Optional)
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <textarea
              {...register("message")}
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary resize-none"
              placeholder="Any specific requirements or questions..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary hover:bg-foreground disabled:bg-blue-300 text-white font-semibold py-4 px-6 rounded-lg transition-all flex items-center justify-center space-x-2 shadow-lg"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Submit Your Interest</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="font-inter text-sm text-gray-600 text-center">
          By submitting this form, you agree to be contacted by our team regarding your inquiry.
        </p>
      </div>
    </div>
  );
};

export default LeadCaptureForm;
