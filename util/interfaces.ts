export interface IPrivacyCandidate {
  firstName: string;
  lastName: string;
}

export interface ICandidate extends IPrivacyCandidate {
  age: number;
  size: number;
  isCapable: boolean;
}
