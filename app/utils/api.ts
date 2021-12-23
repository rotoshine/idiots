import { request as graphqlRequest, RequestDocument, Variables } from 'graphql-request'

const INDISTREET_API_END_POINT = 'https://indistreet-api.roto.codes'
const LIPIMOON_API_END_POINT = 'https://admin.lipimoon.world'

const LIPIMOON_API_KEY =
  'a941fcd9081cf58e5be518d8054b6b33ce3f278822ae86c9f7044efe9032d40049f815cafcf63b77c3fab97d47329364634e4d6361f818c46c8363511a22c16a4309af34e4714d79ec886313a9320592c97169cc5320886c4bd1baf75a9a354ac4e45e518c6191b38c66ac5adc9bd6b3ed56a84df66bf621163113a11485b790'

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

export const fetchLipimoonApi = async (
  url: string,
  query: {
    [key: string]: string | number | boolean
  } = {}
) => {
  return await request(`${LIPIMOON_API_END_POINT}/api${url}`, query, {
    headers: {
      Authorization: `Bearer ${LIPIMOON_API_KEY}`,
    },
  })
}

const IDIOTS_API_END_POINT = 'https://admin.lipimoon.world'

export const requestToIdiots = async (document: RequestDocument, variables?: Variables) => {
  return await graphqlRequest(`${IDIOTS_API_END_POINT}/graphql}`, document, variables)
}

export const requestToIndistreet = async (document: RequestDocument, variables?: Variables) => {
  return await graphqlRequest(`${INDISTREET_API_END_POINT}/graphql`, document, variables)
}
