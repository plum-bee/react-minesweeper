declare namespace jest {
  interface Matchers<R> {
    toHaveTextContent: (htmlElement: string) => R
    toBeInTheDOM: () => R
  }
}
