import moment from 'moment'

export const formatDateString = (dateString: string) =>
  moment(dateString, 'YYYY-MM-DD').format('YYYY.MM.DD')
