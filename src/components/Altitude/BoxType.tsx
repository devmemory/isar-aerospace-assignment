export interface BoxAnnotationType {
  type: "box";
  yMin: number;
  yMax: number;
  backgroundColor: string;
}

export interface AnnotationType {
  [key: string]: BoxAnnotationType;
}
