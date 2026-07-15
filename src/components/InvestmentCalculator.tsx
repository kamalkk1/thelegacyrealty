// components/sections/InvestmentCalculator.tsx
import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Input } from '../components/ui/input';

const InvestmentCalculator = () => {
  const propertyOptions = [
    { value: '33000000', label: '16.6 × 66 - Ground + Basement - ₹3.30 Cr' },
    { value: '16500000', label: '16.6 × 66 - First Floor - ₹1.65 Cr' },
    { value: '14000000', label: '16.6 × 66 - Second Floor - ₹1.40 Cr' },
    { value: '11500000', label: '16.6 × 66 - Third Floor - ₹1.15 Cr' },
    { value: '20000000', label: '16.6 × 50 - Ground + Basement - ₹2.00 Cr' },
    { value: '12000000', label: '16.6 × 50 - First Floor - ₹1.20 Cr' },
    { value: '9500000', label: '16.6 × 50 - Second Floor - ₹0.95 Cr' },
    { value: '8500000', label: '16.6 × 50 - Third Floor - ₹0.85 Cr' },
    { value: '25000000', label: '14 × 40 - Basement + Ground + First - ₹2.50 Cr' },
  ];
  const [selectedProperty, setSelectedProperty] = useState('');
  const [monthlyRent, setMonthlyRent] = useState('');
  const [roiResult, setRoiResult] = useState<{
    monthlyROI: number;
    yearlyROI: number;
    percentage: number;
  } | null>(null);

  const calculateROI = () => {
    if (!selectedProperty || !monthlyRent) return;
    
    const propertyValue = parseFloat(selectedProperty);
    const monthly = parseFloat(monthlyRent);
    const yearly = monthly * 12;
    const percentage = (yearly / propertyValue) * 100;
    
    setRoiResult({
      monthlyROI: monthly,
      yearlyROI: yearly,
      percentage: percentage
    });
  };

  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-center mb-12"
          >
            Commercial Investment Calculator
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Expected Returns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-secondary" />
                Popular Price Points
              </h3>
              <div className="space-y-4 relative before:absolute before:inset-0 before:bg-white before:-z-[1]">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-2">Entry Price</h4>
                    <p className="text-gray-600 mb-1">16.6 × 50 ft - Third Floor</p>
                    <p className="text-secondary font-semibold text-lg">₹0.85 Cr</p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-lg border-2 border-secondary relative before:absolute before:inset-0 before:bg-white before:-z-[1]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-lg">Premium Frontage</h4>
                      <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs">16.6 × 66</span>
                    </div>
                    <p className="text-gray-600 mb-1">Ground + Basement configuration</p>
                    <p className="text-secondary font-semibold text-lg">₹3.30 Cr</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-2">Full Stack Option</h4>
                    <p className="text-gray-600 mb-1">14 × 40 ft - Basement + Ground + First</p>
                    <p className="text-secondary font-semibold text-lg">₹2.50 Cr</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
            
            {/* ROI Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-lg relative before:absolute before:inset-0 before:bg-white before:-z-[1]">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Quick ROI Calculator</h3>
                  <div className="space-y-4">
                    <Select value={selectedProperty} onValueChange={setSelectedProperty}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Unit / Floor" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Input
                      type="number"
                      placeholder="Expected Monthly Rent"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(e.target.value)}
                    />
                    
                    <Button 
                      onClick={calculateROI}
                      disabled={!selectedProperty || !monthlyRent}
                      className="w-full bg-secondary hover:bg-secondary/90"
                    >
                      Calculate ROI
                    </Button>
                  </div>
                  
                  {roiResult && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6 p-4 bg-secondary/10 rounded-lg"
                    >
                      <h4 className="font-semibold mb-2">Your Investment Returns:</h4>
                      <div className="space-y-1">
                        <p>Monthly Income: <span className="font-semibold text-secondary">₹{roiResult.monthlyROI.toLocaleString()}</span></p>
                        <p>Annual Income: <span className="font-semibold text-secondary">₹{roiResult.yearlyROI.toLocaleString()}</span></p>
                        <p>Annual ROI: <span className="font-semibold text-secondary text-lg">{roiResult.percentage.toFixed(2)}%</span></p>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;
