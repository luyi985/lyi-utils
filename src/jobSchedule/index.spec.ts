import { schedule, Tasks } from "./schedule";

const funcMock = jest.fn();

describe("schedule", () => {
  let mockAsyncTasks: Tasks = [];
  let mockTasks: Tasks = [];
  beforeEach(() => {
    jest.clearAllMocks().resetAllMocks();
    jest.useFakeTimers();
    mockTasks = [
      { duration: 5000, task: () => funcMock("data1") },
      { duration: 5000, task: () => funcMock("data2") },
    ];
    mockAsyncTasks = [
      { duration: 2000, task: async () => funcMock("data1") },
      { duration: 5000, task: async () => funcMock("data2") },
    ];
  });
  test("sync task", () => {
    funcMock.mockImplementation((data) => data);
    schedule(mockTasks);
    expect(funcMock).toHaveBeenCalledTimes(1);
    expect(funcMock).toHaveBeenCalledWith("data1");
    jest.advanceTimersByTime(5000);
    expect(funcMock).toHaveBeenCalledTimes(2);
    expect(funcMock).toHaveBeenCalledWith("data2");
    jest.advanceTimersByTime(5000);
  });
});
