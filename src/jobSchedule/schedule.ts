export type Tasks = {
  duration: number;
  task: () => Promise<any> | any;
}[];

export const schedule = async (tasks: Tasks) => {
  let d: any;
  try {
    if (!Array.isArray(tasks) || tasks.length === 0) return {};
    const currentTask = tasks.shift();
    if (!currentTask) return {};
    const { duration, task } = currentTask;
    task();
    d = setTimeout(() => {
      clearTimeout(d);
      schedule(tasks);
    }, duration);
  } catch (e) {
    clearTimeout(d);
    console.error(e);
  }
};
