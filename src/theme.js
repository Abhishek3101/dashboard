import { extendTheme,withDefaultColorScheme,theme as chakraTheme} from '@chakra-ui/react'

const theme = extendTheme({
    ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
    colors: {
        primary: {
            100: "#FDD8D8",
            200: "#FCC5C5",
            300: "#FA9E9E",
            400: "#F87777",
            500: "#F64B4B",
            600: "#F42A2A",
            700: "#E90C0C",
            800: "#D50B0B",
            900: "#AE0909",
        },
        
    },

},
withDefaultColorScheme({ colorScheme: 'primary' }),
)

export default theme



