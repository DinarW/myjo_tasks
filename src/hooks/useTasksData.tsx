import React, { useEffect, useState } from "react";
import axios from "axios";
import { ICard } from "../types/models";

const example = [
  {
    card_id: 123,
    reviewer_id: 2,
    name: 'Помыть посуду',
    reward: 1000,
    photo_required: true,
    video_required: false,
    schedule: [true, false, true, true, false, false, false],
    period_start: '2023-04-17 10:00:00',
    period_stop: null,
    type: 'ALL'
  }
];

function useTasksData(): ICard[] {
  const [data, setData] = useState<ICard[]>([]);

  async function fetchTasks() {
    try {
      const { status, data } = await axios.get('https://example.com/api/getCards');
      if (status) setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTasks();

    const interval = setInterval(() => {
      fetchTasks();
    }, 10000)

    return () => {
      clearInterval(interval);
    }
  }, []);

  return data;
}

export { useTasksData };
