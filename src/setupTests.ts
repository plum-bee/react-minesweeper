import '@testing-library/jest-dom/extend-expect'

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveTextContent: (htmlElement: string) => R
      toBeInTheDOM: () => R
    }
  }
}
