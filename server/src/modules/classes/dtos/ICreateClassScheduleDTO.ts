export default interface ICreateClassScheduleDTO {
  schedule: Array<{
    week_day: number;
    from: string;
    to: string;
  }>;
  class_id: string;
}
