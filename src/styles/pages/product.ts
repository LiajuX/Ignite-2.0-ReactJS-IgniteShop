import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'stretch',

  maxWidth: 1180,

  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  maxWidth: 576,
  height: 656,

  padding: '0.25rem',
  borderRadius: 8,

  background: 'linear-gradient(100deg, #1EA483 0%, #7465D4 100%)',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    color: '$gray300',

    fontSize: '$2xl',
  },

  span: {
    display: 'block',

    marginTop: '1rem',

    color: '$green300',

    fontSize: '$2xl',
  },

  p: {
    marginTop: '2.5rem',

    color: '$gray300',

    fontSize: '$md',
    lineHeight: 1.6,
  },

  button: {
    marginTop: 'auto',
    padding: '1.25rem',
    border: 0,
    borderRadius: 8,

    backgroundColor: '$green500',
    color: '$white',

    fontSize: '$md',
    fontWeight: 'bold',

    cursor: 'pointer',
    transition: 'all 0.2s',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})
