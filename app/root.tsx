import { useEffect, useState } from 'react'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation,
  useTransition,
} from 'remix'
import type { LinksFunction } from 'remix'
import { Box, ChakraProvider, Collapse, ColorModeScript, Divider, Flex, Heading, IconButton } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Nprogress from 'nprogress'
import nprogressStyles from 'nprogress/nprogress.css'
import * as gtag from '~/utils/gtag'
import globalStylesUrl from '~/styles/global.css'
import theme from '~/theme'
import NavMenu from './components/NavMenu'

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: nprogressStyles },
    { rel: 'stylesheet', href: globalStylesUrl },
  ]
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  const location = useLocation()
  const transition = useTransition()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      gtag.pageview(window.location.pathname + window.location.search)
    }
  }, [location])

  useEffect(() => {
    if (transition.state === 'loading' || transition.state === 'submitting') {
      Nprogress.start()
    } else {
      Nprogress.done()
    }
  }, [transition.state])

  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>Hey, developer, you should replace this with what you want your users to see.</p>
        </div>
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch()

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <Box display="flex" justifyContent="center" alignItems="center" flexDir="column">
          <Heading as="h1" fontFamily="KOTRAHOPE">
            {caught.status}: {caught.statusText}
          </Heading>
        </Box>
      </Layout>
    </Document>
  )
}

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#130042" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#130042" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'production' && (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-78DV821V3Y"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-78DV821V3Y', {
              page_path: window.location.pathname,
            });
          `,
              }}
            ></script>
          </>
        )}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

const menus = [
  {
    link: '/',
    title: 'Home',
    text: 'HOME',
  },
  {
    link: '/news',
    title: '이디어츠의 소식들',
    text: 'NEWS',
  },
  {
    link: '/live',
    title: '이디어츠 공연 소식',
    text: 'LIVE',
  },
  {
    link: '/discography',
    title: '이디어츠 앨범 정보',
    text: 'DISCOGRAPHY',
  },
  {
    link: 'https://www.youtube.com/c/%EB%B0%B4%EB%93%9C%EC%9D%B4%EB%94%94%EC%96%B4%EC%B8%A0',
    title: '이디어츠 영상들',
    text: 'MOVIE',
  },
  {
    link: '/goods',
    title: '이디어츠 굿즈들',
    text: 'GOODS',
  },
]
function Layout({ children }: { children: React.ReactNode }) {
  const [visibleMobileMenu, setVisibleMobileMenu] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setVisibleMobileMenu(false)
  }, [location])

  return (
    <ChakraProvider>
      <Box display="flex" flexDirection="column" h="100%">
        <Box as="header" w="100%" display="flex" margin="0 auto" justifyContent="center">
          <Box w={['200px', null, '300px', '400px']} marginTop="8px">
            <Link to="/" title="밴드 이디어츠 로고">
              <img width="100%" src="/images/logo-en.png" alt="밴드 이디어츠 로고" />
            </Link>
          </Box>
        </Box>
        <Box>
          <Box
            display={['none', 'none', 'none', 'flex']}
            flex="1"
            as="nav"
            justifyContent="center"
            alignItems="center"
            fontFamily="AHDN,cursive"
            fontSize={['40px']}
          >
            {menus.map(({ ...props }) => (
              <NavMenu {...props} key={`nav-${props.link}`} />
            ))}
            <a href="mailto:yeonrock@idiots.band">
              <Box marginLeft="12px" marginRight="30px">
                CONTACT
              </Box>
            </a>
          </Box>
          <Box display={['flex', 'flex', 'flex', 'none']} marginTop="24px" marginRight="24px">
            <IconButton
              aria-label="menu icon"
              size="lg"
              icon={visibleMobileMenu ? <CloseIcon /> : <HamburgerIcon />}
              onClick={() => setVisibleMobileMenu(!visibleMobileMenu)}
            />
          </Box>
        </Box>
        <Collapse in={visibleMobileMenu} animateOpacity>
          <Flex direction="column" justifyContent="center" alignItems="center">
            {menus.map(({ ...props }) => (
              <Box key={`nav-mobile${props.link}`} w="100%" textAlign="center">
                <NavMenu {...props} key={`nav-${props.link}`} fontSize="1.2rem" padding="8px 4px" />
                <Divider colorScheme="white" w="100%" marginTop="10px" marginBottom="10px" />
              </Box>
            ))}
            <a href="mailto:yeonrock@idiots.band">
              <Box marginLeft="12px" marginRight="12px">
                CONTACT
              </Box>
            </a>
          </Flex>
        </Collapse>
        <Box
          flex="1"
          w="100%"
          css={{
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'white',
              borderRadius: '24px',
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </ChakraProvider>
  )
}
