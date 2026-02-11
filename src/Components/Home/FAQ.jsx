import React from 'react';
import { useForm } from 'react-hook-form';
import RevealAnimation from '../animation/RevealAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Shield } from 'lucide-react';

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
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: '',
      designation: '',
      contactNumber: '',
      workEmail: '',
      projectDescription: '',
      captcha: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Here you can send the data to your backend
    alert('Thank you! We will get back to you soon.');
    reset();
  };

  return (
    <section className="pb-[150px] bg-black dark:bg-black relative">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="main-container relative z-10">
        {/* Header */}
        <RevealAnimation delay={0.1}>
          <div className="mx-18 text-start space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              FAQ
            </h2>
            <p className="mx-0 max-w-[600px] text-base md:text-lg text-gray-400">
              Find answers to common questions about our AI and technology solutions.
            </p>
          </div>
        </RevealAnimation>

        {/* Two Column Layout - FAQ Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* FAQ Accordion - Left Side */}
          <div className="mx-18 max-w-[800px]">
            <RevealAnimation delay={0.2}>
              <Accordion type="single" collapsible className="space-y-3">
                {faqData.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border border-white/20 rounded-4xl px-6 py-4 transition-colors duration-300 data-[state=open]:border-white/40"
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

          {/* Contact Form - Right Side */}
          <div className="mx-18 absolute top-0 right-0 w-[46rem]">
            <RevealAnimation delay={0.3}>
              <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/50 to-slate-900/50 p-6 md:p-8 backdrop-blur-xl sticky top-24">
                {/* Form Header */}
                <RevealAnimation delay={0.4}>
                  <div className="mb-6 space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Didn't Find What You Were Looking For?
                    </h3>
                    <p className="text-sm md:text-base text-gray-300">
                      We've got more answers waiting for you! If your question didn't make the list, don't hesitate to reach out.
                    </p>
                  </div>
                </RevealAnimation>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name and Designation Row */}
                  <RevealAnimation delay={0.5}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-white mb-2">
                          Name
                        </label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          type="text"
                          placeholder="Full Name"
                          className="w-full bg-transparent border-b-2 border-blue-400/50 px-0 py-2 text-white text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Designation */}
                      <div>
                        <label className="block text-xs font-semibold text-white mb-2">
                          Designation
                        </label>
                        <input
                          {...register('designation', { required: 'Designation is required' })}
                          type="text"
                          placeholder="Your Designation"
                          className="w-full bg-transparent border-b-2 border-blue-400/50 px-0 py-2 text-white text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                        />
                        {errors.designation && (
                          <p className="text-red-400 text-xs mt-1">{errors.designation.message}</p>
                        )}
                      </div>
                    </div>
                  </RevealAnimation>

                  {/* Contact and Email Row */}
                  <RevealAnimation delay={0.6}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Contact Number */}
                      <div>
                        <label className="block text-xs font-semibold text-white mb-2">
                          Contact Number
                        </label>
                        <input
                          {...register('contactNumber', {
                            required: 'Contact number is required',
                            pattern: {
                              value: /^[0-9\-\+\(\)\s]*$/,
                              message: 'Invalid phone number',
                            },
                          })}
                          type="tel"
                          placeholder="Your Number*"
                          className="w-full bg-transparent border-b-2 border-blue-400/50 px-0 py-2 text-white text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                        />
                        {errors.contactNumber && (
                          <p className="text-red-400 text-xs mt-1">{errors.contactNumber.message}</p>
                        )}
                      </div>

                      {/* Work Email */}
                      <div>
                        <label className="block text-xs font-semibold text-white mb-2">
                          Work Email
                        </label>
                        <input
                          {...register('workEmail', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Invalid email address',
                            },
                          })}
                          type="email"
                          placeholder="Email Address*"
                          className="w-full bg-transparent border-b-2 border-blue-400/50 px-0 py-2 text-white text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                        />
                        {errors.workEmail && (
                          <p className="text-red-400 text-xs mt-1">{errors.workEmail.message}</p>
                        )}
                      </div>
                    </div>
                  </RevealAnimation>

                  {/* Project Description */}
                  <RevealAnimation delay={0.7}>
                    <div>
                      <label className="block text-xs font-semibold text-white mb-2">
                        Describe Your Project
                      </label>
                      <textarea
                        {...register('projectDescription', {
                          required: 'Please describe your project',
                          minLength: {
                            value: 10,
                            message: 'Description must be at least 10 characters',
                          },
                        })}
                        placeholder="Tell us about your project..."
                        rows="3"
                        className="w-full bg-transparent border-2 border-blue-400/50 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                      />
                      {errors.projectDescription && (
                        <p className="text-red-400 text-xs mt-1">{errors.projectDescription.message}</p>
                      )}
                    </div>
                  </RevealAnimation>

                  {/* NDA Protection */}
                  <RevealAnimation delay={0.8}>
                    <div className="flex items-center gap-2 rounded-lg bg-amber-500/20 border border-amber-500/40 px-3 py-2">
                      <Shield className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span className="text-xs font-medium text-amber-100">
                        Fast 2-minute response, fully <span className="font-bold">NDA-protected</span>.
                      </span>
                    </div>
                  </RevealAnimation>

                  {/* Captcha */}
                  <RevealAnimation delay={0.9}>
                    <div className="flex items-center gap-3 py-3 border-b border-blue-400/30">
                      <span className="text-white text-sm font-semibold">6 + 6 =</span>
                      <input
                        {...register('captcha', {
                          required: 'Please verify',
                          validate: (value) => value === '12' || 'Incorrect answer',
                        })}
                        type="text"
                        placeholder=" "
                        className="w-16 bg-transparent border-2 border-blue-400/50 rounded-lg px-3 py-4 text-white text-sm text-center focus:border-blue-400 focus:outline-none transition-colors"
                      />
                      {errors.captcha && (
                        <p className="text-red-400 text-xs">{errors.captcha.message}</p>
                      )}
                    </div>
                  </RevealAnimation>

                  {/* Submit Button */}
                  <RevealAnimation delay={1.0}>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 text-lg uppercase bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                      Submit
                    </button>
                  </RevealAnimation>
                </form>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;