import type { AppTheme } from "../styles";
import { EmojiStyle } from "emoji-picker-react";

/**
 * Represents a universally unique identifier.
 */
export type UUID = ReturnType<typeof crypto.randomUUID>;

export type DarkModeOptions = "system" | "auto" | "light" | "dark";

/**
 * Represents a user in the application.
 */
export interface User {
  name: string | null;
  createdAt: Date;
  profilePicture: string | null;
  emojisStyle: EmojiStyle;
  tasks: Task[];
  colorList: string[];
  settings: AppSettings[];
  theme: AppTheme;
  darkmode: DarkModeOptions;
}

/**
 * Represents a task in the application.
 */
export interface Task {
  ownerName: string
  ownerSurname: string
  startTime: string
  endTime: string
}

/**
 * Represents application settings for the user.
 */
export interface AppSettings {
  enableGlow: boolean;
}

/**
 * Represents the props for a component that requires user-related data.
 */
export interface UserProps {
  user: User; // User data
  setUser: React.Dispatch<React.SetStateAction<User>>; // Function to update user data
}
