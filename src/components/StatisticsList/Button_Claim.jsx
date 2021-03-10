import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    {
        flex: 1 1;
        height: 42px;
        border-radius: 100px;
        margin-top: 24px;
        flex-shrink: 0;
        border: 2px transparent solid;
        padding: 0 20px;
        line-height: 40px;

        font-size: 14px;
        font-family: HelveticaNeue-Medium, HelveticaNeue;
        font-weight: 500;
        color: #22292F;

        background: #F2F0EB;
        box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 10%);
    }
`

function Button_Claim() {
    return (
        <StyledButton className="Button_Claim" onClick={() => {alert("Claim!!")}}>
            Claim
        </StyledButton>
    )
}

export default Button_Claim
