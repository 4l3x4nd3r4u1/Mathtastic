import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#1a202c')(props),
    }
  })
}

const fonts = {
  heading: 'Space Mono',
  body: 'JetBrains Mono'
}

const components = {
  Heading: {
    variants: {
      'section-title': props => ({
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: mode('purple', '#88ccca')(props),
        TextDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      })
    }
  }
}

const config = {
  initialColorMode: 'dark',
}

const theme = extendTheme({
  config, styles, components, fonts
})

export default theme
