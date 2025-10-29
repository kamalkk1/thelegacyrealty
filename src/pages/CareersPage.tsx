// pages/careers.tsx or pages/join-our-team.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase,Calendar, MapPin, Clock,  Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import CareerApplicationForm from '@/components/CareerApplicationForm';
import WhyJoinUs from '@/components/WhyJoinUs';
import LifeAtLegacy from '@/components/LifeAtLegacy';

// SEO Meta tags
export const metadata = {
  title: 'Careers at Legacy Realty - Join Our Team | Real Estate Jobs in Mohali, Chandigarh',
  description: 'Explore exciting career opportunities at Legacy Realty. Join our team of professionals in Mohali, Chandigarh & New Chandigarh. Apply now for real estate jobs.',
  keywords: 'legacy realty careers, real estate jobs mohali, property consultant jobs, sales jobs chandigarh, careers in real estate',
  openGraph: {
    title: 'Join Legacy Realty - Career Opportunities',
    description: 'Build your career with Legacy Realty, a leading real estate company in Tricity',
    url: 'https://thelegacyrealty.in/careers',
  }
};

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  experience: string;
  description: string;
  requirements: string[];
  posted: string;
}

const jobOpenings: JobOpening[] = [
  {
    id: '1',
    title: 'Senior Real Estate Consultant',
    department: 'Sales',
    location: 'Mohali',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Drive sales growth by building client relationships and closing premium property deals in Tricity.',
    requirements: [
      'Proven track record in real estate sales',
      'Excellent communication and negotiation skills',
      'Knowledge of Mohali/Chandigarh property market',
      'Strong client relationship management'
    ],
    posted: '2 days ago'
  },
  {
    id: '2',
    title: 'Property Advisor',
    department: 'Sales',
    location: 'Chandigarh',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'Guide clients through property buying journey, from initial consultation to final closure.',
    requirements: [
      'Understanding of real estate market dynamics',
      'Customer-focused approach',
      'Good interpersonal skills',
      'Willingness to travel'
    ],
    posted: '5 days ago'
  },
  {
    id: '3',
    title: 'Digital Marketing Executive',
    department: 'Marketing',
    location: 'Mohali',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Manage digital campaigns, social media, and lead generation for premium real estate projects.',
    requirements: [
      'Experience with Google Ads, Facebook Ads',
      'Content creation and social media management',
      'SEO/SEM knowledge',
      'Analytics and reporting skills'
    ],
    posted: '1 week ago'
  },
  {
    id: '4',
    title: 'Business Development Manager',
    department: 'Business Development',
    location: 'New Chandigarh',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'Identify new business opportunities, build partnerships, and expand our market presence.',
    requirements: [
      'Strong business acumen',
      'Excellent presentation skills',
      'Network in real estate industry',
      'Strategic thinking ability'
    ],
    posted: '3 days ago'
  },
  {
    id: '5',
    title: 'Customer Relationship Executive',
    department: 'Customer Success',
    location: 'Mohali',
    type: 'Full-time',
    experience: '1-2 years',
    description: 'Ensure exceptional customer experience throughout the property buying journey.',
    requirements: [
      'Excellent communication skills',
      'Problem-solving mindset',
      'CRM software knowledge',
      'Customer service orientation'
    ],
    posted: '4 days ago'
  }
];

const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const departments = ['all', ...Array.from(new Set(jobOpenings.map(job => job.department)))];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary via-foreground to-secondary/80 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Briefcase className="w-4 h-4" />
              We're Hiring!
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Build Your Career with <span className="text-primary">The Legacy Realty</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join a team of passionate professionals transforming the real estate landscape 
              in Mohali, Chandigarh & New Chandigarh. Grow with us!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-secondary px-8"
                onClick={() => document.getElementById('job-openings')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Search className="w-5 h-5 mr-2" />
                View Open Positions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-secondary hover:bg-white hover:text-foreground"
                onClick={() => setShowApplicationForm(true)}
              >
                Submit Your Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-sm text-gray-600">Years in Business</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-secondary mb-2">2K+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-sm text-gray-600">Premium Projects</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <WhyJoinUs />

      {/* Job Openings Section */}
      <section id="job-openings" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Job Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore exciting opportunities across various departments
            </p>
          </motion.div>

          {/* Search & Filter */}
          <div className="max-w-4xl mx-auto mb-8 relative before:absolute before:inset-0 before:bg-white before:-z-[1]">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search by job title or department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Tabs value={selectedDepartment} onValueChange={setSelectedDepartment} className="w-full md:w-auto">
                <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full">
                  {departments.map((dept) => (
                    <TabsTrigger key={dept} value={dept} className="capitalize">
                      {dept}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid gap-6 max-w-4xl mx-auto">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="bg-primary/10 p-2 rounded-lg">
                              <Briefcase className="w-5 h-5 text-foreground" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {job.title}
                              </h3>
                              <div className="flex flex-wrap gap-2 mb-3">
                                <Badge variant="outline">{job.department}</Badge>
                                <Badge variant="outline">{job.type}</Badge>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-4">{job.description}</p>

                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.experience}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {job.posted}
                            </div>
                          </div>
                        </div>

                        <Button
                          onClick={() => handleApplyClick(job)}
                          className="bg-foreground hover:bg-secondary text-white relative"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No jobs found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      {/* <EmployeeBenefits /> */}

      {/* Life at Legacy */}
      <LifeAtLegacy />

      {/* Application Form Modal */}
      {showApplicationForm && (
        <CareerApplicationForm
          selectedJob={selectedJob}
          onClose={() => {
            setShowApplicationForm(false);
            setSelectedJob(null);
          }}
        />
      )}
    </div>
  );
};

export default CareersPage;
