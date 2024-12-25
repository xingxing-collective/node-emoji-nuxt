import { unemojify } from 'node-emoji'

export const useUnemojify = (input: string) => {
  return unemojify(input)
}
