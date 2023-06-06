export interface ICard {
  card_id: number;
  reviewer_id: number;
  name: string;
  description?: string | null;
  every_month?: number[] | null;
  reward: number;
  photo_required: boolean;
  video_required: boolean;
  schedule: boolean[];
  period_start: string | null;
  period_stop: string | null;
  type: 'ALL' | 'TASKS' | 'CORSES';
}