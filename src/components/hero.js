import React from 'react'
import styled from 'styled-components'
import { Button } from './button'

const hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src="" type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Great Destinations</HeroH1>
                    <HeroP>Visit the best of Kenya</HeroP>
                    <Button>Travel Now</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default hero

const HeroContainer = styled.div `
background: #0c0c0c;
display: flex;
justify-content: center;
`
