export interface Pagination<T = any> {
  count: string;
  next: string;
  previous: string;
  results: Array<T>;
}
