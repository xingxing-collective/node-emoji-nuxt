import type { EmojifyOptions } from 'node-emoji'
import { emojify } from 'node-emoji'

export const useEmojify = (input: string, opts?: EmojifyOptions) => {
  return emojify(input, opts)
}
