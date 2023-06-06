export interface PackageItem {
  breakfast?: {
    mainCourse: string[];
    sideCourse: string[];
    specials: string[];
    availableTime: string;
    ratePerDay: number;
    ratePerMonth: number;
  };
  canteenId?:any;
  dinner?: {
    mainCourse: string[];
    sideCourse: string[];
    specials: string[];
    availableTime: string;
    ratePerDay: number;
  };
  image?: string;
  lunch?: {
    mainCourse: string[];
    sideCourse: string[];
    specials: string[];
    availableTime: string;
    ratePerDay: number;
  };
  review?: any[];
  status?: boolean;
  total?: number;
  category?:string, 
  __v?: number;
  _id?: string;
}
