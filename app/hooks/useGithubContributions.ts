"use client";

import { useState, useEffect, useMemo, useCallback } from "react";

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface ApiContributionResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

export interface MonthLabel {
  label: string;
  weekIndex: number;
}

export interface Telemetry {
  total: number;
  activeDays: number;
  longestStreak: number;
  peakDay: number;
  consistency: string;
}

export interface UseGithubContributionsReturn {
  contributionData: ApiContributionResponse | null;
  selectedYear: string | null;
  setSelectedYear: React.Dispatch<React.SetStateAction<string | null>>;
  publicRepos: number | null;
  isLoading: boolean;
  error: string | null;
  hoveredDay: ContributionDay | null;
  setHoveredDay: React.Dispatch<React.SetStateAction<ContributionDay | null>>;
  availableYears: string[];
  selectedYearDays: ContributionDay[];
  weeks: (ContributionDay | null)[][];
  monthLabels: MonthLabel[];
  telemetry: Telemetry;
  fetchContributions: () => Promise<void>;
}

export const GITHUB_PROFILE_URL = "https://github.com/ltmervin123";
export const GITHUB_USERNAME = "ltmervin123";

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const DAY_NAMES = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
];

export function buildYearWeeks(yearDays: ContributionDay[]): (ContributionDay | null)[][] {
  if (yearDays.length === 0) return [];
  const weeks: (ContributionDay | null)[][] = [];
  let currentWeek: (ContributionDay | null)[] = [];

  const firstDate = new Date(`${yearDays[0].date}T00:00:00Z`);
  const firstDayOfWeek = firstDate.getUTCDay();

  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push(null);
  }

  for (const day of yearDays) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  return weeks;
}

export function getMonthLabels(weeks: (ContributionDay | null)[][]): MonthLabel[] {
  const labels: MonthLabel[] = [];
  let prevMonth = -1;

  weeks.forEach((week, wIdx) => {
    const validDay = week.find((d) => d !== null);
    if (!validDay) return;
    const month = parseInt(validDay.date.split("-")[1], 10) - 1;
    if (month !== prevMonth) {
      labels.push({
        label: MONTH_NAMES[month] || "",
        weekIndex: wIdx,
      });
      prevMonth = month;
    }
  });

  return labels;
}

export function formatInspectionDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dateObj = new Date(Date.UTC(y, m - 1, d));
  const dayName = DAY_NAMES[dateObj.getUTCDay()];
  const monthName = MONTH_NAMES[dateObj.getUTCMonth()];
  return `${dayName}, ${monthName} ${d}, ${y}`;
}

export function formatCompactNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
}

export function useGithubContributions(
  username: string = GITHUB_USERNAME
): UseGithubContributionsReturn {
  const [contributionData, setContributionData] = useState<ApiContributionResponse | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [publicRepos, setPublicRepos] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  const fetchContributions = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const [contribRes, userRes] = await Promise.allSettled([
        fetch(`https://github-contributions-api.jogruber.de/v4/${username}`),
        fetch(`https://api.github.com/users/${username}`, {
          headers: { Accept: "application/vnd.github.v3+json" },
        }),
      ]);

      if (contribRes.status === "fulfilled" && contribRes.value.ok) {
        const data: ApiContributionResponse = await contribRes.value.json();
        setContributionData(data);

        const availableYears = Object.keys(data.total || {}).sort(
          (a, b) => Number(b) - Number(a)
        );
        if (availableYears.length > 0) {
          setSelectedYear((prev) =>
            prev && availableYears.includes(prev) ? prev : availableYears[0]
          );
        }
      } else {
        throw new Error("Unable to fetch contribution telemetry from GitHub API");
      }

      if (userRes.status === "fulfilled" && userRes.value.ok) {
        const userData = await userRes.value.json();
        if (typeof userData.public_repos === "number") {
          setPublicRepos(userData.public_repos);
        }
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to load telemetry data";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchContributions();
  }, [fetchContributions]);

  const availableYears = useMemo(() => {
    if (!contributionData?.total) return [];
    return Object.keys(contributionData.total).sort((a, b) => Number(b) - Number(a));
  }, [contributionData]);

  const selectedYearDays = useMemo(() => {
    if (!contributionData || !selectedYear) return [];
    return contributionData.contributions.filter((d) =>
      d.date.startsWith(selectedYear)
    );
  }, [contributionData, selectedYear]);

  const weeks = useMemo(() => {
    return buildYearWeeks(selectedYearDays);
  }, [selectedYearDays]);

  const monthLabels = useMemo(() => {
    return getMonthLabels(weeks);
  }, [weeks]);

  const telemetry = useMemo<Telemetry>(() => {
    if (!selectedYear || selectedYearDays.length === 0) {
      return {
        total: 0,
        activeDays: 0,
        longestStreak: 0,
        peakDay: 0,
        consistency: "0.0",
      };
    }

    const total =
      contributionData?.total[selectedYear] ??
      selectedYearDays.reduce((sum, d) => sum + d.count, 0);
    const activeDays = selectedYearDays.filter((d) => d.count > 0).length;
    const consistency =
      selectedYearDays.length > 0
        ? ((activeDays / selectedYearDays.length) * 100).toFixed(1)
        : "0.0";
    const peakDay = Math.max(0, ...selectedYearDays.map((d) => d.count));

    let maxStreak = 0;
    let tempStreak = 0;
    for (let i = 0; i < selectedYearDays.length; i++) {
      if (selectedYearDays[i].count > 0) {
        tempStreak++;
        if (tempStreak > maxStreak) maxStreak = tempStreak;
      } else {
        tempStreak = 0;
      }
    }

    return {
      total,
      activeDays,
      longestStreak: maxStreak,
      peakDay,
      consistency,
    };
  }, [contributionData, selectedYear, selectedYearDays]);

  return {
    contributionData,
    selectedYear,
    setSelectedYear,
    publicRepos,
    isLoading,
    error,
    hoveredDay,
    setHoveredDay,
    availableYears,
    selectedYearDays,
    weeks,
    monthLabels,
    telemetry,
    fetchContributions,
  };
}
