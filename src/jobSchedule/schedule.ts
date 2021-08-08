type Tasks = {
  duration: number;
  task: () => Promise<any> | any;
}[];

export const schedule = (tasks: Tasks) => {
  return [];
};
