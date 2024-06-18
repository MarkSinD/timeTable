import type { User } from "../types/user";
import { systemInfo } from "../utils";
import { EmojiStyle } from "emoji-picker-react";

/**
 * Represents a default user object.
 */
export const defaultUser: User = {
  name: "Lanit BPM",
  createdAt: new Date(),
  profilePicture: null,
  emojisStyle:
    systemInfo.os === "iOS" || systemInfo.os === "macOS" ? EmojiStyle.NATIVE : EmojiStyle.APPLE,
  tasks: [
    {
      "ownerName" : "Ivan",
      "ownerSurname": 'Ivanov',
      "startTime": "Tue Jun 18 2024 16:00:00 GMT+0300 (Москва, стандартное время)",
      "endTime": "Tue Jun 18 2024 18:00:00 GMT+0300 (Москва, стандартное время)"
    },
    {
      "ownerName" : "Ivan",
      "ownerSurname": 'Ivanov',
      "startTime": "Tue Jun 18 2024 16:50:00 GMT+0300 (Москва, стандартное время)",
      "endTime": "Tue Jun 18 2024 17:00:00 GMT+0300 (Москва, стандартное время)"
    },
    {
      "ownerName" : "Ivan",
      "ownerSurname": 'Ivanov',
      "startTime": "Tue Jun 18 2024 17:00:00 GMT+0300 (Москва, стандартное время)",
      "endTime": "Tue Jun 18 2024 18:00:00 GMT+0300 (Москва, стандартное время)"
    },{
      "ownerName" : "Ivan",
      "ownerSurname": 'Ivanov',
      "startTime": "Tue Jun 18 2024 19:00:00 GMT+0300 (Москва, стандартное время)",
      "endTime": "Tue Jun 18 2024 20:00:00 GMT+0300 (Москва, стандартное время)"
    }
    ,{
      "ownerName" : "Ivan",
      "ownerSurname": 'Ivanov',
      "startTime": "Tue Jun 18 2024 18:00:00 GMT+0300 (Москва, стандартное время)",
      "endTime": "Tue Jun 19 2024 20:00:00 GMT+0300 (Москва, стандартное время)"
    }
    ,{
      "ownerName" : "Ivan",
      "ownerSurname": 'Ivanov',
      "startTime": "Tue Jun 25 2024 16:00:00 GMT+0300 (Москва, стандартное время)",
      "endTime": "Tue Jun 30 2024 17:00:00 GMT+0300 (Москва, стандартное время)"
    },{
      "ownerName" : "Ivan",
      "ownerSurname": 'Ivanov',
      "startTime": "Tue Jun 28 2024 11:00:00 GMT+0300 (Москва, стандартное время)",
      "endTime": "Tue Jun 30 2024 17:00:00 GMT+0300 (Москва, стандартное время)"
    }
  ],
  theme: "system",
  darkmode: "auto",
  settings: [
    {
      enableGlow: true,
    },
  ],
  colorList: [
    "#FF69B4",
    "#FF22B4",
    "#C6A7FF",
    "#7ACCFA",
    "#4A9DFF",
    "#5061FF",
    "#3DFF7F",
    "#3AE836",
    "#FFEA28",
    "#F9BE26",
    "#FF9518",
    "#FF5018",
    "#FF2F2F",
  ],
};
