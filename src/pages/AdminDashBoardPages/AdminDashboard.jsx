import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { CircularProgress } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import {
  HiMail,
  HiCalendar,
  HiTrendingUp,
  HiArrowNarrowUp,
  HiArrowNarrowDown,
} from "react-icons/hi";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const MasterClassDashboard = () => {
  const backendURL =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_BACKEND_URL
      : "http://localhost:3001";

  const [stats, setStats] = useState({
    totalRegistrations: 0,
    weekly: 0,
    monthly: 0,
    weeklyBreakdown: [],
    monthlyBreakdown: [],
    growthRate: { monthly: 0 },
  });
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState("week");

  const fetchData = useCallback(
    async (endpoint) => {
      try {
        const res = await fetch(`${backendURL}/api/${endpoint}`);
        return res.ok ? await res.json() : null;
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return null;
      }
    },
    [backendURL]
  );

  const fetchMasterClassStats = useCallback(async () => {
    const data = await fetchData("getMasterClassRegistrations");
    if (data) {
      setStats({
        totalRegistrations: data.total || 0,
        weekly: data.weekly || 0,
        monthly: data.monthly || 0,
        weeklyBreakdown: data.weeklyBreakdown || [],
        monthlyBreakdown: data.monthlyBreakdown || [],
        growthRate: data.growthRate || { monthly: 0 },
      });
    }
  }, [fetchData]);

  useEffect(() => {
    setLoading(true);
    fetchMasterClassStats().finally(() => setLoading(false));
  }, [fetchMasterClassStats]);

  const LoadingSpinner = useMemo(
    () => (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
        <CircularProgress size={40} />
      </div>
    ),
    []
  );

  const SubscriberStats = () => {
    const growthRate = stats.growthRate.monthly;
    const isGrowthPositive = growthRate > 0;
    const growthDisplay =
      growthRate === "Infinity"
        ? "∞"
        : `${Math.abs(parseFloat(growthRate)).toFixed(1)}%`;

    return (
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1">
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">
              Master Class Registrations
            </h3>
            <p className="text-3xl font-semibold mt-2">
              {stats.totalRegistrations}
            </p>
          </div>
          <div className="bg-blue-600 p-4 rounded-full shadow-lg">
            <HiMail className="text-white text-xl" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <HiCalendar className="text-blue-500" />
                <span className="text-sm text-gray-600">This Week</span>
              </div>
              <p className="text-lg font-semibold">{stats.weekly}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <HiTrendingUp className="text-blue-500" />
                <span className="text-sm text-gray-600">This Month</span>
              </div>
              <p className="text-lg font-semibold">{stats.monthly}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm bg-gray-50 p-3 rounded-lg">
            <span
              className={`flex items-center gap-1 ${
                isGrowthPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {isGrowthPositive ? <HiArrowNarrowUp /> : <HiArrowNarrowDown />}
              {growthDisplay}
            </span>
            <span className="text-gray-500">Monthly Growth</span>
          </div>
        </div>
      </div>
    );
  };

  const SubscriberChart = useMemo(() => {
    const breakdownData =
      (timeRange === "week" ? stats.weeklyBreakdown : stats.monthlyBreakdown) ||
      [];

    if (!breakdownData.length) {
      return (
        <div className="flex-1 min-w-[280px] p-6 bg-white shadow-lg border border-gray-200 rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-gray-500 text-md uppercase">
              Registration Growth
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => setTimeRange("week")}
                className={`px-3 py-1 rounded-md text-sm ${
                  timeRange === "week"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setTimeRange("month")}
                className={`px-3 py-1 rounded-md text-sm ${
                  timeRange === "month"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Month
              </button>
            </div>
          </div>
          <div className="h-[300px] flex items-center justify-center text-gray-500">
            No data available for this period
          </div>
        </div>
      );
    }

    const data = {
      labels: breakdownData.map((item) => {
        const date = new Date(item._id);
        return timeRange === "week"
          ? date.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })
          : date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });
      }),
      datasets: [
        {
          label: "New Registrations",
          data: breakdownData.map((item) => item.count),
          fill: true,
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderColor: "rgb(59, 130, 246)",
          tension: 0.4,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          mode: "index",
          intersect: false,
          callbacks: {
            title: (tooltipItems) => {
              const date = new Date(
                breakdownData[tooltipItems[0].dataIndex]._id
              );
              return date.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              });
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { precision: 0 },
        },
      },
    };

    return (
      <div className="flex-1 min-w-[280px] p-6 bg-white shadow-lg border border-gray-200 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-gray-500 text-md uppercase">
            Registration Growth
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => setTimeRange("week")}
              className={`px-3 py-1 rounded-md text-sm ${
                timeRange === "week"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setTimeRange("month")}
              className={`px-3 py-1 rounded-md text-sm ${
                timeRange === "month"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Month
            </button>
          </div>
        </div>
        <div className="h-[300px]">
          <Line data={data} options={options} />
        </div>
      </div>
    );
  }, [stats.weeklyBreakdown, stats.monthlyBreakdown, timeRange]);

  if (loading) return LoadingSpinner;

  return (
    <div className="p-4 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <SubscriberStats />
        <div className="lg:col-span-2">{SubscriberChart}</div>
      </div>
    </div>
  );
};

export default MasterClassDashboard;
