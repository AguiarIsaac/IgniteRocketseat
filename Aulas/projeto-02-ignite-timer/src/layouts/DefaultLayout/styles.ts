import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 76rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
`
