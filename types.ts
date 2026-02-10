
export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
}

export interface CapacityMetrics {
  concurrencyLimit: number;
  avgExecTime: number;
  maxRps: number;
  safeRps: number;
  bottleneck: string;
}

export interface ErrorMetric {
  name: string;
  value: number;
  color: string;
}

export interface MetaData {
  environment: string;
  trafficType: string;
  dataSource: string;
  updatedAt: string;
}

export interface ProjectContext {
  title: string;
  problem: string;
  solution: string[];
}
