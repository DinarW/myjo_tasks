import { ICard } from "../types/models";

export function addCard(args: Omit<ICard, 'card_id' | 'photo_required' | 'schedule'>) {}
