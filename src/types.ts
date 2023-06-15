export interface PackageItem {
  breakfast?: {
    mainCourse: string[];
    sideCourse: string[];
    specials: string[];
    availableTime: string;
    ratePerDay: number;
    ratePerMonth: number;
  };
  canteenId?: any;
  dinner?: {
    mainCourse: string[];
    sideCourse: string[];
    specials: string[];
    availableTime: string;
    ratePerDay: number;
    ratePerMonth: number;
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
  category?: string;
  __v?: number;
  _id?: string;
}

export interface CanteenType {
  canteenName?: string;
  email?: string;
  phonenumber?: number;
  city?: string;
  pinCode?: string;
  status?: boolean;
  packageid?: string;
  image?: string;
}

export interface WishType {
  _id?: string;
  userId?: string;
  packageId?: string;
  canteenId?: string;
  source?: string;
  total?: number;
  startDate?: string;
  endDate?: string;
  status?: boolean;
  image?: string;
  totalPerDayRate?:number;
  breakfast?:{
    image:string;
    }
}

export interface categoryType {
  mainCourse?: string[];
  sideCourse?: string[];
  specials?: string[];
  availableTime?: string;
  ratePerDay?: number;
  ratePerMonth?: number;
  canteenName?: string;
  city?: string;
  category?: string;
  image?: string;
  status?: boolean;
  packageId?: string;
}

