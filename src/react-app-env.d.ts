/// <reference types="react-scripts" />
declare module '*.mp4' {
    const src: string;
    export default src;
  }
declare module 'baffle-react' {
    const Baffle: any;
    export default Baffle;
  }

  interface RefObject<T> {
    current: T | any
  }

  type MemberType = {
    name: string;
    desc: string;
    img: string;
    email: string;
    role: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    github: string;
    interest: string;
    education: string;
    experience: string;
    website: string;
    achievment: string;
}