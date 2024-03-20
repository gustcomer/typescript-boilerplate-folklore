type BasicInfo = { name: string; age: number };
type ContactInfo = { email: string; phone: number };

// An entity can be either BasicInfo or ContactInfo, or both
type Entity = BasicInfo | ContactInfo;

// A fully detailed entity must include all properties from BasicInfo and ContactInfo
type DetailedEntity = BasicInfo & ContactInfo;

type A = keyof BasicInfo; // type domain is {"name", "age"}
type B = keyof ContactInfo; // type domain is {"email", "phone"}
type C = keyof Entity; // type domain is {} - I know, it's counterintuitive
type D = keyof DetailedEntity; // type domain i {"name", "age", "email", "phone"}


interface Person {
  name: string;
}

interface PersonSpan extends Person {
  birth: Date;
  death?: Date;
}

type E = keyof Person // type domain is {"name"}
type F = keyof PersonSpan// type domain is {"name", "birth", "death"}
