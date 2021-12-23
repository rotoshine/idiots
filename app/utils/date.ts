import { parse, format, formatDistance, differenceInDays } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { isString, isNil, includes } from 'lodash'
import ko from 'date-fns/locale/ko'
import en from 'date-fns/locale/en-US'
import ja from 'date-fns/locale/ja'

const localeMapper = {
  ko,
  en,
  ja,
}

type LocaleKey = keyof typeof localeMapper
const DEFAULT_LOCALE_KEY = 'ko'
const isLocaleKey = (key: string): key is LocaleKey => includes(Object.keys(localeMapper), key)
const getLocaleKey = (key: string) => (isLocaleKey(key) ? key : DEFAULT_LOCALE_KEY)

export const SIMPLE_DATE_STRING_FORMAT = 'yyyy.MM.dd'
export const DATE_STRING_FORAMT = 'yyyy.MM.dd HH:mm'

export const toSimpleDateFormat = (dateOrString: Date | string, locale = DEFAULT_LOCALE_KEY) => {
  if (isNil(dateOrString)) {
    return null
  }
  const date = isString(dateOrString) ? new Date(dateOrString) : dateOrString

  return format(date, SIMPLE_DATE_STRING_FORMAT, {
    locale: localeMapper[getLocaleKey(locale)],
  })
}

export const toDateFormat = (dateOrString: Date | string, locale = DEFAULT_LOCALE_KEY) => {
  if (isNil(dateOrString)) {
    return null
  }
  const date = isString(dateOrString) ? new Date(dateOrString) : dateOrString

  return format(date, DATE_STRING_FORAMT, {
    locale: localeMapper[getLocaleKey(locale)],
  })
}
