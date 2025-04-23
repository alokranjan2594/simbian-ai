"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AlertCard from "@/components/alert-card";
import { BiBarChart, BiCheckCircle } from "react-icons/bi";
import { FiAlertCircle, FiAlertTriangle, FiZap } from "react-icons/fi";
import { CgLock } from "react-icons/cg";

interface WithSimbianProps {
  onSwitchSection: () => void;
}

export default function WithSimbian({ onSwitchSection }: WithSimbianProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAllSteps, setShowAllSteps] = useState(false);

  const steps = [
    {
      icon: <BiCheckCircle className="h-6 w-6 text-green-400" />,
      title: "Triaged & Reported",
      description: "The SOC Agent handled investigation and reporting.",
    },
    {
      icon: <FiZap className="h-6 w-6 text-green-400" />,
      title: "Less noise",
      description: "90% of alerts resolved automatically, 24/7",
    },
    {
      icon: <BiBarChart className="h-6 w-6 text-green-400" />,
      title: "Holistic insight",
      description: "Correlate alerts and your environment into the big picture",
    },
    {
      icon: <CgLock className="h-6 w-6 text-green-400" />,
      title: "Adapts automatically",
      description:
        "No SOAR needed. Investigate every alert, including new ones, with best of Simbian's knowledge and yours.",
    },
  ];

  // Progress through steps
  useEffect(() => {
    if (currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      // Show all steps after going through them
      const timer = setTimeout(() => {
        setShowAllSteps(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div
      style={{ backgroundImage: "url(/images/banner/banner.jpg)" }}
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-center opacity-80"></div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between mt-12">
          {/* Left side - Alert Cards */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <div className="flex flex-col items-start mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                With Simbian
              </h1>
              <p className="text-white text-lg">
                Relax. Our AI Agents will take it from here.
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <AlertCard
                id="ignored-alerts-zero"
                title="Ignored Alerts"
                count={0}
                icon={<FiAlertTriangle className="h-6 w-6" />}
                color="blue"
                zeroState
              />

              <AlertCard
                id="wrongly-closed-zero"
                title="Wrongly Closed"
                count={0}
                icon={<FiAlertCircle className="h-6 w-6" />}
                color="blue"
                zeroState
              />

              <AlertCard
                id="active-threats-zero"
                title="Active Threats"
                count={0}
                icon={<FiAlertTriangle className="h-6 w-6" />}
                color="blue"
                zeroState
              />
            </div>
          </div>

          {/* Right side - Steps */}
          <div className="w-full md:w-1/2">
            <div className="flex justify-end mb-8">
              <button
                onClick={onSwitchSection}
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-6"
              >
                Book a Demo 🛡️
              </button>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-green-400/50"></div>

              {showAllSteps ? (
                // Show all steps at once
                <div className="flex flex-col space-y-12">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="relative">
                        <div className="h-8 w-8 rounded-full bg-green-400 flex items-center justify-center z-10 relative">
                          {step.icon}
                        </div>
                        {/* Horizontal line */}
                        <div className="absolute top-4 left-8 h-0.5 w-12 bg-green-400/50"></div>
                      </div>
                      <div className="ml-16 bg-blue-700/60 rounded-lg p-4">
                        <h3 className="text-white font-medium">{step.title}</h3>
                        <p className="text-blue-100">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Show steps one by one
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="relative">
                      <div className="h-8 w-8 rounded-full bg-green-400 flex items-center justify-center z-10 relative">
                        {steps[currentStep].icon}
                      </div>
                      {/* Horizontal line */}
                      <div className="absolute top-4 left-8 h-0.5 w-12 bg-green-400/50"></div>
                    </div>
                    <div className="ml-16 bg-blue-700/60 rounded-lg p-4">
                      <h3 className="text-white font-medium">
                        {steps[currentStep].title}
                      </h3>
                      <p className="text-blue-100">
                        {steps[currentStep].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Vertical arrow indicator */}
      <motion.div
        className="absolute right-8 bottom-12 hidden md:flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <div className="h-32 w-0.5 bg-green-400/50"></div>
        <div className="w-3 h-3 border-b-2 border-r-2 border-green-400 transform rotate-45 mt-2"></div>
      </motion.div>
    </div>
  );
}
