"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GrAid } from "react-icons/gr";
import { FiAlertCircle, FiAlertTriangle, FiZap } from "react-icons/fi";
import { BsActivity } from "react-icons/bs";

interface AlertCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: "blue" | "red";
  zeroState?: boolean;
  id: string;
}

// Alert icon types
const alertIcons = [
  <GrAid key="grid" className="h-3 w-3" />,
  <FiZap key="zap" className="h-3 w-3" />,
  <BsActivity key="activity" className="h-3 w-3" />,
  <FiAlertCircle key="alert-circle" className="h-3 w-3" />,
  <FiAlertTriangle key="alert-triangle" className="h-3 w-3" />,
];

export default function AlertCard({
  title,
  count,
  icon,
  color,
  zeroState = false,
  id,
}: AlertCardProps) {
  const [displayCount, setDisplayCount] = useState(count);
  const [isShaking, setIsShaking] = useState(false);
  const [alertIconsArray, setAlertIconsArray] = useState<React.ReactNode[]>([]);
  const [showNewAlert, setShowNewAlert] = useState(false);
  const [newAlertPosition, setNewAlertPosition] = useState(0);

  // Generate random alert icons
  useEffect(() => {
    if (zeroState) {
      // For zero state, just show one grid icon
      setAlertIconsArray([<GrAid key="grid-zero" className="h-3 w-3" />]);
    } else {
      // Generate random number of icons between 5-10
      const numIcons = Math.floor(Math.random() * 6) + 5;
      const icons: React.ReactNode[] = [];

      for (let i = 0; i < numIcons; i++) {
        const randomIcon =
          alertIcons[Math.floor(Math.random() * alertIcons.length)];
        icons.push(
          <div
            key={`icon-${i}`}
            className="h-5 w-5 bg-gray-700 rounded flex items-center justify-center"
          >
            {randomIcon}
          </div>
        );
      }

      setAlertIconsArray(icons);
    }
  }, [zeroState]);

  // Animate count changes
  useEffect(() => {
    if (count !== displayCount) {
      const step = count > displayCount ? 1 : -1;
      const interval = setInterval(() => {
        setDisplayCount((prev) => {
          if (prev === count) {
            clearInterval(interval);
            return prev;
          }
          return prev + step;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [count, displayCount]);

  // Periodically show new alert animation
  useEffect(() => {
    if (zeroState) return;

    const interval = setInterval(() => {
      // Random position in the icon array
      const position = Math.floor(Math.random() * alertIconsArray.length);
      setNewAlertPosition(position);
      setShowNewAlert(true);

      // Shake the card
      setIsShaking(true);

      // Reset after animation
      setTimeout(() => {
        setShowNewAlert(false);
        setIsShaking(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [zeroState, alertIconsArray.length]);

  // Simulate alert moving from wrongly closed to active threats
  useEffect(() => {
    if (title === "Wrongly Closed" && !zeroState) {
      const interval = setInterval(() => {
        // Trigger animation to move an alert to active threats
        const alertToMove = document.getElementById(
          `${id}-alert-${Math.floor(Math.random() * alertIconsArray.length)}`
        );
        if (alertToMove) {
          alertToMove.classList.add("animate-move-to-active");

          // Remove the element after animation
          setTimeout(() => {
            alertToMove.style.opacity = "0";
          }, 800);
        }
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [id, title, zeroState, alertIconsArray.length]);

  const bgColor = color === "red" ? "bg-red-900/60" : "bg-blue-900/60";
  const textColor = color === "red" ? "text-red-400" : "text-blue-400";
  const countColor = zeroState
    ? "text-green-400"
    : color === "red"
    ? "text-red-400"
    : "text-blue-400";

  return (
    <motion.div
      className={`${bgColor} rounded-lg p-4 overflow-hidden relative`}
      animate={isShaking ? { x: [0, -3, 3, -3, 3, 0] } : {}}
      transition={{ duration: 0.5 }}
      id={id}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className={`mr-2 ${textColor}`}>{icon}</div>
          <h3 className="text-white font-medium">{title}</h3>
        </div>

        <motion.div
          className={`text-3xl font-bold ${countColor}`}
          key={displayCount}
          initial={zeroState ? {} : { scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {displayCount}
        </motion.div>
      </div>

      {/* Alert Icons Row */}
      <div className="flex flex-wrap gap-1 mt-2">
        {alertIconsArray.map((alertIcon, index) => (
          <motion.div
            key={`${id}-alert-${index}`}
            id={`${id}-alert-${index}`}
            className={`h-5 w-5 bg-gray-700 rounded flex items-center justify-center ${
              showNewAlert && index === newAlertPosition
                ? "ring-2 ring-blue-400"
                : ""
            }`}
            animate={
              showNewAlert && index === newAlertPosition
                ? { scale: [1, 1.2, 1] }
                : {}
            }
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-300">{alertIcon}</div>
          </motion.div>
        ))}
      </div>

      {/* CSS for the animation */}
      <style jsx global>{`
        @keyframes moveToActive {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(100px, 100px);
            opacity: 0;
          }
        }

        .animate-move-to-active {
          animation: moveToActive 1s forwards;
        }
      `}</style>
    </motion.div>
  );
}
