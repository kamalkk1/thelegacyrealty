import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { BadgeCheck, Users, Briefcase, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const benefits = [
    {
      id: "item-1",
      title: "Transparent Pricing",
      icon: <DollarSign className="w-5 h-5 text-secondary" />,
      content:
        "We provide clear and upfront pricing so you know exactly what to expect — no hidden costs.",
    },
    {
      id: "item-2",
      title: "Experienced and Skilled Team",
      icon: <Briefcase className="w-5 h-5 text-secondary" />,
      content:
        "Our dedicated team of real estate professionals brings years of expertise to help you make the right decisions.",
    },
    {
      id: "item-3",
      title: "Reliable and Trustworthy",
      icon: <BadgeCheck className="w-5 h-5 text-secondary" />,
      content:
        "We value integrity and trust, ensuring all transactions and advice are in your best interest.",
    },
    {
      id: "item-4",
      title: "Customer-Focused Approach",
      icon: <Users className="w-5 h-5 text-secondary" />,
      content:
        "We put your needs first, offering personalized solutions tailored to your real estate goals.",
    },
  ];

  return (
    <section className="relative py-6 lg:py-4 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 inline-block bg-primary/10 px-4 py-1 rounded-full text-sm font-medium text-secondary">
            Benefits
          </div>

          <h2 className="text-3xl text-secondary sm:text-4xl lg:text-5xl font-bold mb-4 font-poiret">
            Why <span className="text-foreground italic">Choose</span> Us?
          </h2>

          <p className="text-gray-600 font-inter mb-8 max-w-xl">
            Ready to tackle your real estate journey? Whether you’re buying your
            first home, investing, or selling, The Legacy Realty is here to help
            every step of the way.
          </p>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {benefits.map((benefit) => (
              <AccordionItem
                key={benefit.id}
                value={benefit.id}
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="flex items-center gap-3 text-left text-lg font-medium text-secondary">
                  <span className="p-2 rounded-full bg-gray-100 shrink-0">
                    {benefit.icon}
                  </span>
                  <span className="flex-1 text-left">{benefit.title}</span>
                </AccordionTrigger>

                <AccordionContent className="text-gray-600 font-inter pl-12">
                  {benefit.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex flex-col gap-6"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://creatifyindia.com/thelegacyrealty/wp-content/uploads/2024/11/2-1024x1024.png"
              alt="Team at work"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md w-1/2 self-end">
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Worker"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Stat */}
          <div className="absolute -bottom-8 -right-8 bg-white shadow-lg rounded-full px-6 py-4 text-center">
            <div className="text-secondary text-3xl font-bold">10y+</div>
            <p className="text-gray-600 text-sm">Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
