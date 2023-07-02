import { request as graphqlRequest, RequestDocument, Variables } from 'graphql-request'

const INDISTREET_API_END_POINT = 'https://indistreet-api.roto.codes'

export const request = async (
  url: string,
  query: {
    [key: string]: string | number | boolean
  } = {},
  option?: RequestInit
) => {
  const querystring = Object.keys(query)
    .map(key => `${key}=${query[key]}`)
    .join('&')

  const fullUrl = `${url}${querystring.length > 0 ? `?${querystring}` : ''}`

  console.log(`[fetch] ${fullUrl}`)

  const res = await fetch(fullUrl, option)

  if (res.ok) {
    return await res.json()
  } else {
    throw new Error(`${res.status} api call error.`)
  }
}

export const fetchIndistreetApi = async (
  url: string,
  query: {
    [key: string]: string | number | boolean
  } = {}
) => {
  return await request(`${INDISTREET_API_END_POINT}${url}`, query)
}

const IDIOTS_API_END_POINT = 'https://admin.lipimoon.world'

export const requestToIdiots = async (document: RequestDocument, variables?: Variables) => {
  return await graphqlRequest(`${IDIOTS_API_END_POINT}/graphql}`, document, variables)
}

export const requestToIndistreet = async (document: RequestDocument, variables?: Variables) => {
  return await graphqlRequest(`${INDISTREET_API_END_POINT}/graphql`, document, variables)
}
