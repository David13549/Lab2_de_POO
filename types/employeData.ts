import { Department } from "../enums/Department";
import { Position } from "../enums/Position";

export interface EmployeeData {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  department: Department;
  position: Position;
}
