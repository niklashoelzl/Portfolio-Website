"use client";

import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";

type OS = "windows" | "macos" | "linux" | "unknown";
type Variant = "blue" | "violet" | "cyan";

const BASE = "https://github.com/niklashoelzl/Wikibooks-Browser/releases/latest/download";

const downloads: Record<Exclude<OS, "unknown">, string> = {
  windows: `${BASE}/Wikibooks.Browser-1.0.exe`,
  macos: `${BASE}/Wikibooks.Browser-1.0.dmg`,
  linux: `${BASE}/wikibooks-browser_1.0_amd64.deb`,
};

const labels: Record<OS, string> = {
  windows: "Download for Windows",
  macos: "Download for macOS",
  linux: "Download for Linux",
  unknown: "Download",
};

const variantStyles: Record<Variant, string> = {
  blue: "text-blue-400 hover:text-blue-300",
  violet: "text-violet-400 hover:text-violet-300",
  cyan: "text-cyan-400 hover:text-cyan-300",
};

function detectOS(): OS {
  const ua = navigator.userAgent;
  if (ua.includes("Win")) return "windows";
  if (ua.includes("Mac")) return "macos";
  if (ua.includes("Linux")) return "linux";
  return "unknown";
}

export default function DownloadButton({ variant = "blue" }: { variant?: Variant }) {
  const [os, setOS] = useState<OS>("unknown");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOS(detectOS());
  }, []);

  const primaryUrl = os !== "unknown" ? downloads[os] : downloads.windows;
  const colorClass = variantStyles[variant];

  return (
    <div className="flex flex-col gap-1">
      <a
        href={primaryUrl}
        className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 ${colorClass}`}
      >
        <FiDownload size={14} />
        {labels[os]}
      </a>
      <button
        onClick={() => setShowAll(!showAll)}
        className="pl-5 text-left text-xs text-gray-500 underline hover:text-gray-300"
      >
        Other platforms
      </button>
      {showAll && (
        <div className="flex flex-col gap-1 pl-5">
          {(Object.keys(downloads) as Exclude<OS, "unknown">[])
            .filter((p) => p !== os)
            .map((platform) => (
              <a
                key={platform}
                href={downloads[platform]}
                className="text-xs text-gray-400 transition-colors hover:text-white"
              >
                ⬇ {labels[platform]}
              </a>
            ))}
        </div>
      )}
    </div>
  );
}
