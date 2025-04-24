"use client";

import AlertCard from "@/components/alert-card";
import { AppAssets } from "@/constant/Assets";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiLoader } from "react-icons/bi";
import { CgLock } from "react-icons/cg";
import { CiMonitor } from "react-icons/ci";
import { FiAlertCircle, FiAlertTriangle, FiZap } from "react-icons/fi";

interface WithoutSimbianProps {
  onSwitchSection: () => void;
}

export default function WithoutSimbian({
  onSwitchSection,
}: WithoutSimbianProps) {
  const [ignoredAlerts, setIgnoredAlerts] = useState(193);
  const [wronglyClosed, setWronglyClosed] = useState(23);
  const [activeThreats, setActiveThreats] = useState(3);

  const [currentIssue, setCurrentIssue] = useState(0);
  const issues = [
    {
      icon: <CgLock className="h-6 w-6 text-gray-300" />,
      title: "Waiting for Analyst",
      description: "Analyst is dealing with other problems, hold on...",
    },
    {
      icon: <FiAlertCircle className="h-6 w-6 text-red-500" />,
      title: "Wasting valuable analyst time on false positives",
      description: "",
    },
    {
      icon: <CiMonitor className="h-6 w-6 text-red-500" />,
      title: "Processing one alert at a time, missing the big picture",
      description: "",
    },
    {
      icon: <CgLock className="h-6 w-6 text-red-500" />,
      title: "More time fixing SOAR automation, less time on real threats",
      description: "",
    },
  ];

  // Cycle through issues
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIssue((prev) => (prev + 1) % issues.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Periodically increase alert counts
  useEffect(() => {
    const interval = setInterval(() => {
      // Increase ignored alerts
      setIgnoredAlerts((prev) => prev + 1);

      // Sometimes increase wrongly closed
      if (Math.random() > 0.7) {
        setWronglyClosed((prev) => prev + 1);
      }

      // Rarely increase active threats
      if (Math.random() > 0.9) {
        setActiveThreats((prev) => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (wronglyClosed > 0) {
        setWronglyClosed((prev) => prev - 1);

        setTimeout(() => {
          setActiveThreats((prev) => prev + 1);
        }, 1000);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [wronglyClosed]);

  const iconsArray = [
    { id: 1, icon: <FiAlertTriangle className="h-6 w-6" /> },
    { id: 2, icon: <FiAlertCircle className="h-6 w-6" /> },
    { id: 3, icon: <FiZap className="h-6 w-6" /> },
    { id: 4, icon: <BiLoader className="h-6 w-6" /> },
  ];

  return (
    <div
      style={{ backgroundImage: "url(/images/banner/banner.jpg)" }}
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-cover bg-gradient-to-r from-blue-800  to-blue-900 bg-center opacity-95"></div>
      {/* Background image with overlay */}

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between mt-12">
          {/* Left side - Issues */}
          <div className="w-full md:w-[40%] pr-0 md:pr-8 mb-8 md:mb-0">
            <div className="flex flex-col space-y-6">
              <div className="flex ">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIssue}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-navy-700 opacity-95 rounded-lg p-4 flex items-start space-x-4"
                  >
                    <div className="p-2 bg-navy-700 rounded-full">
                      {issues[currentIssue].icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium">
                        {issues[currentIssue].title}
                      </h3>
                      {issues[currentIssue].description && (
                        <p className="text-gray-300 text-sm">
                          {issues[currentIssue].description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.div
                    className=" top-1/2 -translate-y-1/2 hidden md:flex flex-row items-center"
                    animate={{ x: [0, 10, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                    }}
                  >
                    <div className="w-10 h-0.5 bg-green-400/50"></div>
                    <div className="w-3 h-3 border-r-2 border-t-2 border-green-400 transform rotate-45 -ml-1"></div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="bg-navy-800/80 rounded-lg p-4 flex items-start space-x-4">
                <div className="p-2 bg-navy-700 rounded-full">
                  <FiAlertCircle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium">
                    Wasting valuable analyst time on false positives
                  </h3>
                </div>
              </div>

              <div className="bg-navy-800/80 rounded-lg p-4 flex items-start space-x-4">
                <div className="p-2 bg-navy-700 rounded-full">
                  <CiMonitor className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium">
                    Processing one alert at a time, missing the big picture
                  </h3>
                </div>
              </div>

              <div className="bg-navy-800/80 rounded-lg p-4 flex items-start space-x-4">
                <div className="p-2 bg-navy-700 rounded-full">
                  <CgLock className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium">
                    More time fixing SOAR automation, less time on real threats
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-center gap-5">
            <div className="flex flex-col justify-start items-center gap-5 relative">
              {iconsArray?.map((item: any, index: number) => (
                <div
                  key={index}
                  className={` p-2 bg-white rounded flex items-center justify-center`}
                >
                  {item.icon}
                </div>
              ))}
            </div>

            <motion.div
              className=" hidden md:flex flex-col items-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <div className="h-32 w-0.5 bg-green-400/50"></div>
              <div className="w-3 h-3 border-b-2 border-r-2 border-green-400 transform rotate-45 mt-2"></div>
            </motion.div>
          </div>

          {/* Right side - Title and Alert Cards */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col items-end mb-8 gap-y-5">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                Without Simbian
              </h1>
              <p className="text-white text-lg">
                If this sounds all too familiar, you might want to...
              </p>
              <button
                onClick={onSwitchSection}
                className=" bg-white flex justify-center items-center gap-2 text-blue-600 hover:bg-gray-100 rounded-full p-4 px-6"
              >
                Book a Demo{" "}
                <Image
                  src={AppAssets.logo}
                  alt="simbian-logo"
                  className="w-5 h-5"
                />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              <AlertCard
                id="ignored-alerts"
                title="Ignored Alerts"
                count={ignoredAlerts}
                icon={<FiAlertTriangle className="h-6 w-6" />}
                color="blue"
              />

              <AlertCard
                id="wrongly-closed"
                title="Wrongly Closed"
                count={wronglyClosed}
                icon={<FiAlertCircle className="h-6 w-6" />}
                color="blue"
              />

              <AlertCard
                id="active-threats"
                title="Active Threats"
                count={activeThreats}
                icon={<FiAlertTriangle className="h-6 w-6" />}
                color="red"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
