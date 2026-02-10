
import { PerformanceMetric, CapacityMetrics, ErrorMetric, MetaData, ProjectContext } from './types';

export const DASHBOARD_META: MetaData = {
  environment: "pre-release",
  trafficType: "Internal Testing",
  dataSource: "AWS CloudWatch",
  updatedAt: "2026-02-09"
};

export const PERFORMANCE_DATA: PerformanceMetric[] = [
  { name: 'Avg Latency', value: 43, unit: 'ms' },
  { name: 'P95 Latency', value: 99, unit: 'ms' },
  { name: 'P99 Latency', value: 102, unit: 'ms' },
  { name: 'Integration', value: 36.8, unit: 'ms' }
];

export const CAPACITY_DATA: CapacityMetrics = {
  concurrencyLimit: 400,
  avgExecTime: 36.8,
  maxRps: 10869,
  safeRps: 2500,
  bottleneck: "DynamoDB (Hot Partition Risk)"
};

export const ERROR_DATA: ErrorMetric[] = [
  { name: 'Success (2xx)', value: 100, color: '#10b981' },
  { name: '4xx Errors', value: 0, color: '#f59e0b' },
  { name: '5xx Errors', value: 0, color: '#ef4444' }
];

export const PROJECT_CONTEXT: ProjectContext = {
  title: "Next-Gen Emotion/Diary Service",
  problem: "Existing diary services are friction-heavy, provide slow rewards, and lack social engagement.",
  solution: [
    "Input reduction (3-number choice)",
    "Instant character reward system",
    "Social 'My Home' sharing & comments",
    "Zero-barrier web-based Google auth"
  ]
};
