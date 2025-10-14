// components/LeadForm.tsx
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { X } from 'lucide-react';

interface LeadFormProps {
  source: string;
  ctaText?: string;
  onClose?: () => void;
  className?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ 
  source, 
  ctaText = "Submit", 
  onClose,
  className = ""
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    purpose: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add your form submission logic here
    const leadData = {
      ...formData,
      source,
      project: 'Mohali High Street',
      timestamp: new Date().toISOString()
    };

    console.log('Lead Data:', leadData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! We will contact you shortly.');
      if (onClose) onClose();
    }, 1500);
  };

  return (
    <div className={`relative ${className}`}>
      {onClose && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute -top-2 -right-2"
        >
          <X className="w-4 h-4" />
        </Button>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          type="text" 
          placeholder="Your Name*" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required 
        />
        
        <Input 
          type="tel" 
          placeholder="Phone Number*" 
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          required 
        />
        
        <Input 
          type="email" 
          placeholder="Email Address" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        
        <Select 
          value={formData.budget} 
          onValueChange={(value) => setFormData({...formData, budget: value})}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Budget Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3-4cr">₹3-4 Crores</SelectItem>
            <SelectItem value="4-5cr">₹4-5 Crores</SelectItem>
            <SelectItem value="5-7cr">₹5-7 Crores</SelectItem>
            <SelectItem value="7cr+">Above ₹7 Crores</SelectItem>
          </SelectContent>
        </Select>
        
        <Select 
          value={formData.purpose} 
          onValueChange={(value) => setFormData({...formData, purpose: value})}
        >
          <SelectTrigger>
            <SelectValue placeholder="Investment Purpose" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="own-business">Own Business</SelectItem>
            <SelectItem value="rental">Rental Investment</SelectItem>
            <SelectItem value="buy-hold">Buy & Hold</SelectItem>
            <SelectItem value="resale">Buy & Resale</SelectItem>
          </SelectContent>
        </Select>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-secondary text-white hover:bg-secondary/90"
        >
          {isSubmitting ? 'Submitting...' : ctaText}
        </Button>
      </form>
    </div>
  );
};

export default LeadForm;
