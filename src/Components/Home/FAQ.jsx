import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    id: '1',
    question: 'What is Nexmoves AI solutions about?',
    answer: 'Nexmoves provides cutting-edge AI solutions that help enterprises apply intelligence in ways that improve decisions, reduce manual effort, and support operations at scale. Our services span from AI implementation to cloud modernization and cybersecurity.',
  },
  {
    id: '2',
    question: 'How does your AI expertise benefit enterprises?',
    answer: 'We deliver enterprise-grade solutions across AI, cloud, security, and emerging technologies. Our approach ensures that AI creates measurable business value by fitting seamlessly into how organizations actually work.',
  },
  {
    id: '3',
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in AI, Generative AI, Machine Learning, Computer Vision, Cloud platforms, Data Science, Cybersecurity, IoT, AR/VR, Blockchain, and Agentic AI systems.',
  },
  {
    id: '4',
    question: 'How do you ensure security and compliance?',
    answer: 'Security is treated as a design constraint, not a checklist item. Our systems account for governance, compliance, and risk from the earliest architectural decisions.',
  },
  {
    id: '5',
    question: 'Can you help with cloud modernization?',
    answer: 'Yes, cloud modernization is not a lift-and-shift exercise. We help enterprises rethink how applications and infrastructure are structured so systems remain secure, resilient, and ready to scale over time.',
  },
];

function FAQ() {
  return (
    <section className=" pb-[150px] bg-black dark:bg-black relative">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="main-container relative z-10">
        {/* Header */}
        <RevealAnimation delay={0.1}>
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              FAQ
            </h2>
            <p className="mx-auto max-w-[600px] text-base md:text-lg text-gray-400">
              Find answers to common questions about our AI and technology solutions.
            </p>
          </div>
        </RevealAnimation>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-[800px]">
          <RevealAnimation delay={0.2}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-white/20 rounded-4xl px-6 py-4  transition-colors duration-300 data-[state=open]:border-white/40"
                >
                  <AccordionTrigger className="hover:no-underline group">
                    <span className="text-left text-lg font-semibold text-white transition-colors">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    {/* Fading line */}
                    <div className="mb-4 h-px bg-gradient-to-r from-white/30 via-white/20 to-transparent" />
                    <p className="text-gray-400 text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}

export default FAQ;