import {
  Tooltip
} from "@mui/material";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useCtrlS } from "../../hooks/useCtrlS";
import { ColorPalette } from "../../styles";
import type { Task } from "../../types/user";
import {
  calculateDateDifference,
  formatDate,
  showToast,
} from "../../utils";
import {
  NoTasks,
  RingAlarm,
  TaskContainer,
  TaskDate,
  TaskDescription,
  TaskHeader,
  TaskInfo,
  TaskName,
  TasksContainer,
} from "./tasks.styled";
import { isMeetingGoing } from "../../utils/isMeetingGoing.ts";

/**
 * Component to display a list of tasks.
 */

export const TasksList: React.FC = () => {
  const { user } = useContext(UserContext);

  useCtrlS();

  const listFormat = useMemo(
    () =>
      new Intl.ListFormat("en-US", {
        style: "long",
        type: "conjunction"
      }),
    []
  );

  const checkOverdueTasks = useCallback(
    (tasks: Task[]) => {
      if (location.pathname === "/share") {
        return;
      }

      const overdueTasks = tasks.filter((task) => {
        return task.startTime && new Date() > new Date(task.startTime);
      });

      if (overdueTasks.length > 0 ) {
        const taskNames = overdueTasks.map((task) => task.ownerName + " " + task.ownerSurname);

        showToast(
          <div translate="no" style={{ wordBreak: "break-word" }}>
            <b translate="yes">Начало встречи</b>
            {listFormat.format(taskNames)}
          </div>,
          {
            type: "error",
            disableVibrate: true,
            duration: 3400,
            icon: <RingAlarm animate sx={{ color: ColorPalette.red }} />,
            style: {
              borderColor: ColorPalette.red,
              boxShadow: user.settings[0].enableGlow ? `0 0 18px -8px ${ColorPalette.red}` : "none"
            }
          }
        );
      }
    },
    [listFormat, user.settings]
  );

  useEffect(() => {
    checkOverdueTasks(user.tasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDone = true

  return (
    <>
      <TasksContainer>
        {user.tasks.length !== 0 ? (
          user.tasks.map((task) => (
            <TaskContainer
              key={task.ownerName + task.ownerSurname + task.startTime}
              backgroundColor='#b624ff'
              glow={user.settings[0].enableGlow}
              active={isMeetingGoing(new Date(task.startTime), new Date(task.endTime))}
            >
              <TaskInfo translate="no">
                <TaskHeader>
                  <TaskName>{task.ownerSurname} {task.ownerName}</TaskName>
                  <Tooltip
                    title={new Intl.DateTimeFormat(navigator.language, {
                      dateStyle: "full",
                      timeStyle: "medium"
                    }).format(new Date(task.startTime))}
                  >
                    <TaskDate>{new Date(task.startTime).toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric' })} {" - "} {new Date(task.endTime).toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric' })}</TaskDate>
                  </Tooltip>
                </TaskHeader>
                <TaskDescription>
                  {calculateDateDifference(new Date(task.startTime), new Date(task.endTime))}
                </TaskDescription>
              </TaskInfo>
            </TaskContainer>
          ))
        ) : (
          <NoTasks>
            <b>Сегодня встреч нет</b>
          </NoTasks>
        )}
      </TasksContainer>
    </>
  );
};
