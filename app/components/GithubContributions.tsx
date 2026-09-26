"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Calendar,
  Flame,
  Activity,
  GitCommit,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import {
  useGithubContributions,
  formatInspectionDate,
  formatCompactNumber,
  GITHUB_PROFILE_URL,
  GITHUB_USERNAME,
} from "@/app/hooks/useGithubContributions";

export interface GithubContributionsProps {
  isInView?: boolean;
  shouldReduceMotion?: boolean | null;
  username?: string;
}

export default function GithubContributions({
  isInView = true,
  shouldReduceMotion = false,
  username = GITHUB_USERNAME,
}: GithubContributionsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const {
    contributionData,
    selectedYear,
    setSelectedYear,
    publicRepos,
    isLoading,
    error,
    hoveredDay,
    setHoveredDay,
    availableYears,
    weeks,
    monthLabels,
    telemetry,
    fetchContributions,
  } = useGithubContributions(username);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.scrollWidth;
    }
  }, [selectedYear, contributionData]);

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-[var(--line)]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="space-y-1.5 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.65rem] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[var(--sun)]">
            <span>[ PROFILE 02 // REPOSITORY CADENCE ]</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--sun)] shrink-0" />
            <span className="text-[var(--ash)]">YEARLY ACTIVITY MATRIX</span>
          </div>
          <div className="flex items-start sm:items-center gap-3">
            <div className="hanko-seal px-2.5 py-1 text-sm bg-[var(--paper)] shrink-0 mt-1 sm:mt-0">
              <span>研</span>
              <span>鑽</span>
            </div>
            <div className="min-w-0">
              {isLoading ? (
                <div className="space-y-2">
                  <div className="h-8 sm:h-9 w-64 sm:w-80 bg-[var(--paper-deep)]/80 animate-pulse" />
                  <div className="h-4 w-44 bg-[var(--paper-deep)]/50 animate-pulse" />
                </div>
              ) : (
                <>
                  <h3 className="font-display font-light text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[var(--ink)] break-words">
                    {telemetry.total.toLocaleString()} CONTRIBUTIONS IN{" "}
                    {selectedYear}
                  </h3>
                  <p className="font-mono text-xs text-[var(--ash)] tracking-wider mt-0.5">
                    SOURCE {"//"} GITHUB.COM/{username.toUpperCase()}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ticket-pill min-h-[38px] cursor-pointer"
            aria-label={`Open GitHub profile ${username} in new tab`}
          >
            <span>
              GITHUB {"//"} {username.toUpperCase()}
            </span>
            <span className="ticket-pill-icon" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>

      {isLoading && (
        <div className="bg-[var(--paper)] border border-[var(--line)] shadow-xs relative">
          <div className="p-3.5 sm:px-6 sm:py-3 border-b border-[var(--line)] flex flex-wrap items-center justify-between gap-3 bg-[var(--paper-soft)]/40">
            <div className="h-3 w-48 sm:w-56 bg-[var(--paper-deep)]/80 animate-pulse" />
            <div className="h-3 w-24 sm:w-28 bg-[var(--paper-deep)]/60 animate-pulse" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[var(--line)]">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`p-3.5 sm:p-5 space-y-2.5 border-[var(--line)] ${
                  i === 0
                    ? "border-r border-b md:border-b-0"
                    : i === 1
                      ? "border-b md:border-b-0 md:border-r"
                      : i === 2
                        ? "border-r"
                        : ""
                }`}
              >
                <div className="h-3 w-20 sm:w-24 bg-[var(--paper-deep)]/70 animate-pulse" />
                <div className="h-7 sm:h-9 w-24 sm:w-28 bg-[var(--paper-deep)]/90 animate-pulse" />
                <div className="h-3 w-28 sm:w-36 bg-[var(--paper-deep)]/50 animate-pulse" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--line)]">
            <div className="lg:col-span-10 p-3.5 sm:p-6 bg-[var(--paper)]">
              <div className="overflow-x-auto pb-3 pt-1 scrollbar-thin">
                <div className="min-w-fit flex flex-col gap-1.5 select-none">
                  <div className="flex gap-4 pl-7 mb-2">
                    {Array.from({ length: 12 }).map((_, mIdx) => (
                      <div
                        key={mIdx}
                        className="h-3 w-6 bg-[var(--paper-deep)]/70 animate-pulse"
                      />
                    ))}
                  </div>

                  <div className="flex items-start">
                    <div className="w-7 shrink-0 flex flex-col justify-between h-[104px] sm:h-[120px] font-mono text-[0.58rem] sm:text-[0.62rem] text-[var(--ash)] pr-2 py-0.5">
                      <div className="h-2 w-4 bg-[var(--paper-deep)]/60 animate-pulse" />
                      <div className="h-2 w-4 bg-[var(--paper-deep)]/60 animate-pulse" />
                      <div className="h-2 w-4 bg-[var(--paper-deep)]/60 animate-pulse" />
                    </div>
                    <div className="flex gap-1 sm:gap-1.5">
                      {Array.from({ length: 53 }).map((_, wIdx) => (
                        <div
                          key={wIdx}
                          className="flex flex-col gap-1 sm:gap-1.5"
                        >
                          {Array.from({ length: 7 }).map((_, dIdx) => (
                            <div
                              key={dIdx}
                              className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-[2px] bg-[var(--paper-deep)]/60 animate-pulse"
                              style={{
                                animationDelay: `${((wIdx * 7 + dIdx) % 15) * 50}ms`,
                              }}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3.5 border-t border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="h-3.5 w-48 sm:w-64 bg-[var(--paper-deep)]/70 animate-pulse" />
                <div className="h-3 w-28 bg-[var(--paper-deep)]/60 animate-pulse" />
              </div>
            </div>

            <div className="lg:col-span-2 p-3.5 sm:p-5 bg-[var(--paper-soft)]/30">
              <div className="h-3 w-20 bg-[var(--paper-deep)]/70 animate-pulse mb-3" />
              <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 scrollbar-none">
                {Array.from({ length: 6 }).map((_, yIdx) => (
                  <div
                    key={yIdx}
                    className="h-9 w-24 lg:w-full shrink-0 bg-[var(--paper-deep)]/60 animate-pulse rounded-xs"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:px-6 sm:py-3 border-t border-[var(--line)] bg-[var(--paper-deep)]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="h-3 w-44 bg-[var(--paper-deep)]/70 animate-pulse" />
            <div className="h-3 w-36 bg-[var(--paper-deep)]/60 animate-pulse" />
          </div>
        </div>
      )}

      {!isLoading && error && !contributionData && (
        <div className="bg-[var(--paper)] border border-[var(--line)] p-5 sm:p-8 md:p-12 text-center shadow-xs space-y-4">
          <div className="inline-flex p-3 rounded-full bg-[var(--sun)]/10 text-[var(--sun)] mb-2">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h4 className="font-display text-xl uppercase tracking-wide text-[var(--ink)]">
            TELEMETRY SYNCHRONIZATION TEMPORARILY INTERRUPTED
          </h4>
          <p className="font-serif text-sm text-[var(--ink-soft)] max-w-md mx-auto leading-relaxed">
            Could not establish a real-time connection to the GitHub
            contribution API. You can retry the connection or view the live
            profile directly on GitHub.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={fetchContributions}
              className="ticket-pill cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>RETRY CONNECTION</span>
            </button>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ticket-pill-secondary cursor-pointer"
            >
              <span>OPEN GITHUB DIRECTLY</span>
              <span className="ticket-pill-icon">↗</span>
            </a>
          </div>
        </div>
      )}

      {!isLoading && contributionData && selectedYear && (
        <div className="bg-[var(--paper)] border border-[var(--line)] shadow-xs relative">
          <div className="p-3.5 sm:px-6 sm:py-3 border-b border-[var(--line)] flex flex-wrap items-center justify-between gap-2.5 font-mono text-[0.65rem] sm:text-[0.68rem] text-[var(--ash)] uppercase bg-[var(--paper-soft)]/40">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-[var(--sun)] font-bold">SYS.LOG</span>
              <span>{"//"}</span>
              <span>ANNUAL CADENCE MATRIX</span>
              <span>{"//"}</span>
              <span className="text-[var(--ink)] font-semibold">
                {selectedYear} CYCLE
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[var(--line)]">
            <div className="p-3.5 sm:p-5 border-r border-b md:border-b-0 border-[var(--line)]">
              <div className="flex items-center justify-between font-mono text-[0.58rem] sm:text-[0.62rem] text-[var(--ash)] uppercase tracking-wider mb-1 gap-1">
                <span className="truncate">
                  CAD.01 {"//"} TOTAL IN {selectedYear}
                </span>
                <GitCommit className="w-3.5 h-3.5 text-[var(--sun)] shrink-0" />
              </div>
              <div className="font-mono text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--ink)]">
                {telemetry.total.toLocaleString()}
              </div>
              <div className="font-serif text-[0.7rem] sm:text-[0.75rem] text-[var(--ash)] mt-1">
                Public commits, PRs &amp; code reviews
              </div>
            </div>

            <div className="p-3.5 sm:p-5 border-b md:border-b-0 md:border-r border-[var(--line)]">
              <div className="flex items-center justify-between font-mono text-[0.58rem] sm:text-[0.62rem] text-[var(--ash)] uppercase tracking-wider mb-1 gap-1">
                <span className="truncate">CAD.02 {"//"} LONGEST STREAK</span>
                <Flame className="w-3.5 h-3.5 text-[var(--gold)] shrink-0" />
              </div>
              <div className="font-mono text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--ink)]">
                {telemetry.longestStreak}{" "}
                <span className="text-xs sm:text-sm font-normal text-[var(--ash)]">
                  DAYS
                </span>
              </div>
              <div className="font-serif text-[0.7rem] sm:text-[0.75rem] text-[var(--ash)] mt-1">
                Peak continuous shipping run in {selectedYear}
              </div>
            </div>

            <div className="p-3.5 sm:p-5 border-r border-[var(--line)]">
              <div className="flex items-center justify-between font-mono text-[0.58rem] sm:text-[0.62rem] text-[var(--ash)] uppercase tracking-wider mb-1 gap-1">
                <span className="truncate">CAD.03 {"//"} ACTIVE DAYS</span>
                <Activity className="w-3.5 h-3.5 text-[var(--sun-deep)] shrink-0" />
              </div>
              <div className="font-mono text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--sun)]">
                {telemetry.activeDays}{" "}
                <span className="text-xs sm:text-sm font-normal text-[var(--ash)]">
                  DAYS
                </span>
              </div>
              <div className="font-serif text-[0.7rem] sm:text-[0.75rem] text-[var(--ash)] mt-1">
                {telemetry.consistency}% yearly shipping consistency
              </div>
            </div>

            <div className="p-3.5 sm:p-5">
              <div className="flex items-center justify-between font-mono text-[0.58rem] sm:text-[0.62rem] text-[var(--ash)] uppercase tracking-wider mb-1 gap-1">
                <span className="truncate">CAD.04 {"//"} PEAK DAY</span>
                <Calendar className="w-3.5 h-3.5 text-[var(--ink-soft)] shrink-0" />
              </div>
              <div className="font-mono text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--ink)]">
                {telemetry.peakDay}{" "}
                <span className="text-xs sm:text-sm font-normal text-[var(--ash)]">
                  COMMITS
                </span>
              </div>
              <div className="font-serif text-[0.7rem] sm:text-[0.75rem] text-[var(--ash)] mt-1">
                Single-day highest production output
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--line)]">
            <div className="lg:col-span-10 p-3.5 sm:p-6 bg-[var(--paper)]">
              <div className="flex items-center justify-between mb-1.5 lg:hidden">
                <span className="font-mono text-[0.6rem] text-[var(--ash)] uppercase tracking-wider">
                  ← SWIPE TIMELINE →
                </span>
              </div>

              <div
                ref={scrollContainerRef}
                className="overflow-x-auto pb-3 pt-1 scrollbar-thin overscroll-x-contain"
              >
                <div className="min-w-fit flex flex-col gap-1.5 select-none">
                  <div className="flex font-mono text-[0.62rem] text-[var(--ash)] uppercase tracking-wider mb-1 pl-7">
                    {weeks.map((week, wIdx) => {
                      const match = monthLabels.find(
                        (m) => m.weekIndex === wIdx,
                      );
                      return (
                        <div
                          key={`month-col-${wIdx}`}
                          className="w-3 sm:w-3.5 mr-1 sm:mr-1.5 flex-shrink-0 text-left"
                        >
                          {match ? (
                            <span className="text-[var(--ink)] font-semibold block -ml-1">
                              {match.label}
                            </span>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-start">
                    <div className="w-7 shrink-0 flex flex-col justify-between h-[104px] sm:h-[120px] font-mono text-[0.58rem] sm:text-[0.62rem] text-[var(--ash)] pr-2 py-0.5">
                      <span className="leading-none">Mon</span>
                      <span className="leading-none">Wed</span>
                      <span className="leading-none">Fri</span>
                    </div>

                    <div className="flex gap-1 sm:gap-1.5">
                      {weeks.map((week, weekIdx) => (
                        <div
                          key={`week-${weekIdx}`}
                          className="flex flex-col gap-1 sm:gap-1.5"
                        >
                          {week.map((day, dayIdx) => {
                            if (!day) {
                              return (
                                <div
                                  key={`empty-${weekIdx}-${dayIdx}`}
                                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-0 pointer-events-none"
                                />
                              );
                            }

                            const isSelected = hoveredDay?.date === day.date;
                            return (
                              <button
                                key={day.date}
                                type="button"
                                tabIndex={0}
                                aria-label={`${day.count} contributions on ${day.date}`}
                                onClick={() =>
                                  setHoveredDay((prev) =>
                                    prev?.date === day.date ? null : day,
                                  )
                                }
                                onMouseEnter={() => setHoveredDay(day)}
                                onMouseLeave={() => setHoveredDay(null)}
                                onFocus={() => setHoveredDay(day)}
                                onBlur={() => setHoveredDay(null)}
                                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-[2px] cursor-pointer transition-all duration-150 relative ${
                                  day.level === 0
                                    ? "bg-[var(--paper-deep)]/70 border border-[var(--line)]/50 hover:border-[var(--ink)]"
                                    : day.level === 1
                                      ? "bg-[#ecd39b] border border-[#ddc07e] hover:border-[var(--sun)] hover:scale-125 hover:z-10"
                                      : day.level === 2
                                        ? "bg-[var(--gold)] border border-[var(--gold)] hover:border-[var(--sun)] hover:scale-125 hover:z-10"
                                        : day.level === 3
                                          ? "bg-[var(--sun)] border border-[var(--sun)] hover:scale-125 hover:z-10 shadow-xs"
                                          : "bg-[var(--sun-deep)] border border-[var(--sun-deep)] ring-1 ring-[var(--sun)] hover:scale-125 hover:z-10 shadow-sm"
                                } ${
                                  isSelected
                                    ? "ring-2 ring-[var(--ink)] scale-125 z-20"
                                    : ""
                                }`}
                              />
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3.5 border-t border-[var(--line)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-xs">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[var(--ink)] text-[0.72rem] sm:text-xs min-h-[1.5rem]">
                  <span className="text-[var(--sun)] font-bold shrink-0">
                    [INSPECTION]
                  </span>
                  {hoveredDay ? (
                    <span className="break-words">
                      <strong className="text-[var(--ink)] font-semibold">
                        {hoveredDay.count}{" "}
                        {hoveredDay.count === 1
                          ? "contribution"
                          : "contributions"}
                      </strong>{" "}
                      on {formatInspectionDate(hoveredDay.date)}{" "}
                      <span className="text-[var(--ash)]">
                        {hoveredDay.count === 0
                          ? "(Rest / Planning)"
                          : hoveredDay.count <= 3
                            ? "(Moderate Cadence)"
                            : hoveredDay.count <= 7
                              ? "(Active Cadence)"
                              : hoveredDay.count <= 14
                                ? "(Elevated Cadence)"
                                : "(High-Velocity Shipping)"}
                      </span>
                    </span>
                  ) : (
                    <span className="text-[var(--ash)]">
                      Tap or hover any node to inspect daily commit cadence
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-[0.62rem] sm:text-[0.65rem] text-[var(--ash)] uppercase font-mono shrink-0 self-start md:self-auto">
                  <span>Less</span>
                  <span
                    className="w-2.5 h-2.5 rounded-[2px] bg-[var(--paper-deep)]/70 border border-[var(--line)]/50"
                    title="0 contributions"
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-[2px] bg-[#ecd39b] border border-[#ddc07e]"
                    title="1-3 contributions"
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-[2px] bg-[var(--gold)] border border-[var(--gold)]"
                    title="4-7 contributions"
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-[2px] bg-[var(--sun)] border border-[var(--sun)]"
                    title="8-14 contributions"
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-[2px] bg-[var(--sun-deep)] border border-[var(--sun-deep)]"
                    title="15+ contributions"
                  />
                  <span>More</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 p-3.5 sm:p-5 bg-[var(--paper-soft)]/20">
              <div className="font-mono text-[0.62rem] text-[var(--ash)] uppercase tracking-wider mb-2.5">
                CHRONOLOGY
              </div>
              <div
                role="tablist"
                aria-label="Filter contributions by year"
                className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 scrollbar-none"
              >
                {availableYears.map((year) => {
                  const isYearActive = selectedYear === year;
                  const yearCount = contributionData.total[year] || 0;
                  return (
                    <button
                      key={year}
                      type="button"
                      role="tab"
                      aria-selected={isYearActive}
                      onClick={() => setSelectedYear(year)}
                      className={`shrink-0 w-auto lg:w-full text-left px-3 py-2 rounded-xs font-mono text-xs flex items-center justify-between gap-2.5 transition-all cursor-pointer ${
                        isYearActive
                          ? "bg-[var(--ink)] text-[var(--rice)] font-semibold shadow-xs"
                          : "bg-[var(--paper)] border border-[var(--line)] text-[var(--ink-soft)] hover:border-[var(--sun)] hover:text-[var(--ink)]"
                      }`}
                    >
                      <span className="tracking-wide">{year}</span>
                      <span
                        className={`text-[0.62rem] font-mono px-1.5 py-0.5 rounded-[2px] ${
                          isYearActive
                            ? "bg-[var(--sun)] text-[var(--rice)]"
                            : "bg-[var(--paper-deep)] text-[var(--ash)]"
                        }`}
                      >
                        {formatCompactNumber(yearCount)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:px-6 sm:py-3 border-t border-[var(--line)] bg-[var(--paper-deep)]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[0.65rem] sm:text-[0.68rem] text-[var(--ash)]">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <Github className="w-3.5 h-3.5 text-[var(--ink)] shrink-0" />
              <span className="text-[var(--ink)] font-semibold">
                {publicRepos !== null
                  ? `PUBLIC REPOSITORIES: ${publicRepos}`
                  : "PUBLIC REPOSITORIES"}
              </span>
              <span>{"//"}</span>
              <span>OPEN SOURCE CONTRIBUTOR</span>
            </div>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[var(--ink)] hover:text-[var(--sun)] transition-colors font-semibold max-w-full break-all sm:break-normal"
            >
              <span className="truncate">VISIT {GITHUB_PROFILE_URL.replace("https://", "")}</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
}
