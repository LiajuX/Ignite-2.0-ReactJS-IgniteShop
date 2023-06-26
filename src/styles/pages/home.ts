import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',

  width: '100%',

  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656,

  marginLeft: 'auto',
})

export const Product = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',

  borderRadius: 8,

  background: 'linear-gradient(100deg, #1EA483 0%, #7465D4 100%)',

  overflow: 'hidden',
  cursor: 'pointer',

  img: {
    objectFit: 'cover',
  },

  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    position: 'absolute',
    right: '0.25rem',
    bottom: '0.25rem',
    left: '0.25rem',

    padding: '2rem',
    borderRadius: 6,

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      color: '$gray100',

      fontSize: '$lg',
    },

    span: {
      color: '$green300',

      fontSize: '$xl',
      fontWeight: 'bold',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
