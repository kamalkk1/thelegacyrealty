// components/CareerApplicationForm.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle, User, Mail, Phone, Briefcase, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface CareerApplicationFormProps {
  selectedJob?: { id: string; title: string; department: string } | null;
  onClose: () => void;
}

const CareerApplicationForm: React.FC<CareerApplicationFormProps> = ({ selectedJob, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: selectedJob?.title || '',
    experience: '',
    currentCompany: '',
    currentCtc: '',
    expectedCtc: '',
    noticePeriod: '',
    coverLetter: '',
    resume: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
          <p className="text-gray-600">
            Thank you for applying. Our HR team will review your application and get back to you soon.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl p-8 max-w-2xl w-full my-8 relative max-h-[90vh] overflow-y-auto"
        >
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4"
          >
            <X className="w-5 h-5" />
          </Button>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply for Position</h2>

          {selectedJob && (
            <div className="bg-primary/10 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-600">Applying for:</p>
              <p className="font-semibold text-gray-900">{selectedJob.title}</p>
              <p className="text-sm text-gray-600">{selectedJob.department}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name*</Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address*</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number*</Label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="experience">Total Experience*</Label>
                <Select
                  value={formData.experience}
                  onValueChange={(value) => setFormData({ ...formData, experience: value })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Professional Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="currentCompany">Current Company</Label>
                <Input
                  id="currentCompany"
                  type="text"
                  value={formData.currentCompany}
                  onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="noticePeriod">Notice Period</Label>
                <Select
                  value={formData.noticePeriod}
                  onValueChange={(value) => setFormData({ ...formData, noticePeriod: value })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select notice period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="15-days">15 days</SelectItem>
                    <SelectItem value="1-month">1 month</SelectItem>
                    <SelectItem value="2-months">2 months</SelectItem>
                    <SelectItem value="3-months">3 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="currentCtc">Current CTC (LPA)</Label>
                <Input
                  id="currentCtc"
                  type="text"
                  value={formData.currentCtc}
                  onChange={(e) => setFormData({ ...formData, currentCtc: e.target.value })}
                  placeholder="e.g., 5"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="expectedCtc">Expected CTC (LPA)*</Label>
                <Input
                  id="expectedCtc"
                  type="text"
                  required
                  value={formData.expectedCtc}
                  onChange={(e) => setFormData({ ...formData, expectedCtc: e.target.value })}
                  placeholder="e.g., 7"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <Label htmlFor="coverLetter">Cover Letter / Why should we hire you?</Label>
              <Textarea
                id="coverLetter"
                rows={4}
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                placeholder="Tell us about yourself and why you're a great fit..."
                className="mt-1"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <Label htmlFor="resume">Upload Resume* (PDF, DOC, DOCX - Max 5MB)</Label>
              <div className="mt-1 flex items-center gap-4">
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('resume')?.click()}
                  className="w-full"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {formData.resume ? formData.resume.name : 'Choose File'}
                </Button>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-foreground hover:bg-secondary text-white py-3"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Submitting...
                </div>
              ) : (
                'Submit Application'
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CareerApplicationForm;
