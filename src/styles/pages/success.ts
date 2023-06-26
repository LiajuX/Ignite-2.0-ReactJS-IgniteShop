import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  height: 656,

  margin: '0 auto',

  h1: {
    color: '$gray100',

    fontSize: '$2xl',
  },

  p: {
    maxWidth: 560,

    marginTop: '2rem',

    color: '$gray300',

    fontSize: '$xl',
    textAlign: 'center',
  },

  a: {
    display: 'block',

    marginTop: '5rem',

    color: '$green500',

    fontSize: '$xl',
    fontWeight: 'bold',
    textDecoration: 'none',

    transition: 'all 0.2s',

    '&:hover': {
      color: '$green300',

      textDecoration: 'underline',
    },
  },
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  maxWidth: 130,
  height: 145,

  marginTop: '4rem',
  padding: '0.25rem',
  borderRadius: 8,

  background: 'linear-gradient(100deg, #1EA483 0%, #7465D4 100%)',

  img: {
    objectFit: 'cover',
  },
})
