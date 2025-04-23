// List of possible alert types
const alertTypes = [
  "Suspicious Login",
  "Phishing Email",
  "Malware Detected",
  "Unusual Network Activity",
  "Unauthorized Access Attempt",
  "Data Exfiltration",
  "Ransomware Activity",
  "Brute Force Attack",
  "SQL Injection Attempt",
  "DDoS Attack",
];

// List of possible locations
const locations = [
  "US-East",
  "EU-West",
  "Asia-Pacific",
  "South America",
  "Australia",
  "Canada",
  "UK",
  "Germany",
  "Japan",
  "India",
];

// List of possible devices
const devices = [
  "Windows Workstation",
  "MacBook Pro",
  "Linux Server",
  "iPhone",
  "Android Device",
  "IoT Device",
  "Network Switch",
  "Cloud Instance",
  "Database Server",
  "Web Server",
];

// Generate a random alert
export function generateRandomAlert(): string {
  const alertType = alertTypes[Math.floor(Math.random() * alertTypes.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  const device = devices[Math.floor(Math.random() * devices.length)];

  return `${alertType} - ${location} - ${device}`;
}
