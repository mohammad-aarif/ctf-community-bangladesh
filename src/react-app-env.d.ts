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