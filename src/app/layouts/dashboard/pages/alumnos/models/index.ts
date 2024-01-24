export interface AlumnInfo {
  fullName: string;
  year: number | null;
  major: string;
  status: string;
}
export interface AlumniData {
  alumni: AlumnInfo[];
}

export interface CoursesData {
  majors: string[];
}