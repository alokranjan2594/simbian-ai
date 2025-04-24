"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WithoutSimbian from "@/components/without-simbian";
import Navbar from "@/components/navbar";
import WithSimbian from "@/components/with-simbian";

export default function Home() {
  const [activeSection, setActiveSection] = useState<"without" | "with">(
    "without"
  );
  const [showWithSection, setShowWithSection] = useState(false);

  // Auto switch to "With Simbian" section after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSection("with");
      setShowWithSection(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {activeSection === "without" && (
        <WithoutSimbian onSwitchSection={() => setActiveSection("with")} />
      )}

      {showWithSection && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: activeSection === "with" ? 1 : 0,
            display: activeSection === "with" ? "block" : "none",
          }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <WithSimbian onSwitchSection={() => setActiveSection("without")} />
        </motion.div>
      )}
    </main>
  );
}
