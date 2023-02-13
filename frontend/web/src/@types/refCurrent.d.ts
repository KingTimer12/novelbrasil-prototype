interface Props {
  scrollWidth: number;
  offsetWidth: number;
}

export declare global {
  namespace React {
    interface MutableRefObject<Props> {
      current: Props;
    }
  }
}
