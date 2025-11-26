import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROCESS_STEPS, FAQS } from '../constants';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;
const MotionDiv = motion.div as any;

const ProcessSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-nst-dark mb-4"
          >
            시공 절차
          </MotionH2>
          <MotionP 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-600 text-lg"
          >
            건강한 집을 만드는 NST만의 체계적인 프로세스
          </MotionP>
        </div>

        {/* Steps Diagram */}
        <div className="relative mb-24">
          {/* Dotted Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dotted border-gray-300 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center bg-white"
              >
                <div className="w-24 h-24 rounded-full border-2 border-green-500 bg-white flex items-center justify-center mb-6 shadow-sm">
                  <step.icon className="w-10 h-10 text-green-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-nst-dark mb-2">
                  {step.step}. {step.title}
                </h3>
                <p className="text-gray-500 font-medium">
                  {step.desc}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="text-green-500 w-8 h-8" />
              <h3 className="text-2xl font-bold text-nst-dark">자주 묻는 질문</h3>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-nst-dark">Q: {faq.q}</span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="text-gray-400" />
                    ) : (
                      <ChevronDown className="text-gray-400" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <MotionDiv
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 pb-4 pl-4 border-l-2 border-green-500 ml-1">
                          {faq.a}
                        </p>
                      </MotionDiv>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </MotionDiv>

      </div>
    </section>
  );
};

export default ProcessSection;