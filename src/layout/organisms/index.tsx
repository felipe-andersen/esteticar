
import {formatDistance, formatDistanceToNowStrict} from 'date-fns'

export const result =  JSON.stringify(formatDistanceToNowStrict(new Date(2024, 5, 1), {
    unit: 'day',
    roundingMethod: 'ceil'
  }))

