import React from 'react'
import styled from 'styled-components'
import useModal from '../../../hooks/useModal'
import Button from '../../Button'
import UniModal from './UniModal'

interface UniButtonProps {}

const UniButton: React.FC<UniButtonProps> = (props) => {
  const [onPresentAccountModal] = useModal(<UniModal />)


  return (
    <StyledAccountButton>
      {(
        <Button onClick={onPresentAccountModal} size="sm" text="Uniswap" />
      )}
    </StyledAccountButton>
  )
}

const StyledAccountButton = styled.div``


export default UniButton


