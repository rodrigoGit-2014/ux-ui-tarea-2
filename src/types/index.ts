export interface CoverData {
  title: string;
  subtitle: string;
}

export interface ObjectiveData {
  text: string;
  icon?: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface EcosystemActor {
  id: string;
  label: string;
  position: { x: number; y: number };
  connections: string[];
  isCenter?: boolean;
}

export interface Tension {
  id: string;
  title: string;
  side1: { label: string; description: string };
  side2: { label: string; description: string };
  question: string;
}

export interface Finding {
  id: string;
  text: string;
  emphasis?: string;
}

export interface BriefData {
  statement: string;
  subtitle: string;
  closing: string;
}

export interface StrategyCell {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ActorColumn {
  id: string;
  label: string;
  color: string;
}

export interface StrategyRow {
  id: string;
  label: string;
  color: string;
  cells: StrategyCell[];
}

export interface StrategicMapData {
  title: string;
  subtitle: string;
  columns: ActorColumn[];
  rows: StrategyRow[];
}
