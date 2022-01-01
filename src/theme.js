import { extendTheme, theme as base} from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `Space Mono ${base.fonts?.heading}`,
    body: `Space Mono ${base.fonts?.body}`
  }, 
})

export default theme
