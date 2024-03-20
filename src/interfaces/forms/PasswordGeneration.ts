import { type ICheckboxValues } from "@/interfaces/forms/SecurityLevels";

export interface IPasswordGenerationForm {
  password: string;
  characterLength: number;
  securityLevels: ICheckboxValues;
  passwordSecurityLevel: number;
}