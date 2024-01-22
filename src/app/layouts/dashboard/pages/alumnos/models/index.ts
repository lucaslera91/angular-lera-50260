export interface AlumnInfo {
  fullName: string;
  year: number;
  major: string;
  status: string;
}
export interface AlumniData {
  alumni: AlumnInfo[];
}

export interface CoursesData {
  courses: string[];
}