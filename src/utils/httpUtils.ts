export function isSuccess (responseStatus: number) {
  if (responseStatus >= 300) {
    throw Error()
  }
}
