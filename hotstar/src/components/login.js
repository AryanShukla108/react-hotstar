import React from 'react'

import styled from 'styled-components'

function login() {
    return (

        <Container>

            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />

                <Signup>
                    GET ALL THERE
                </Signup>

                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam temporibus harum itaque sed nihil vero, corrupti nisi praesentium ullam ea assumenda voluptate odio perferendis reprehenderit consectetur quaerat provident voluptates ducimus suscipit minima. Architecto, eligendi voluptas?
                </Description>

                <CTALogoTwo src="/images/cta-logo-two.png" />

            </CTA>



        </Container>



    )
}

export default login

const Container = styled.div`
position: relative;
height: calc(100vh -70px);
display: flex;
align-items: center;
justify-content: center;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("images/login-background.jpg") ;
content: "";
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
opacity: 0.7;
z-index: -1;


`

const CTA = styled.div`
max-width: 650px;
padding: 80px 40px;
width: 100%;
display: flex;
flex-direction: column;
margin-top: 100px;
align-items: center;

`

const CTALogoOne = styled.img`

`

const Signup = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0;
color:#f9f9f9;
border-radius: 4px;
text-align: center;
font: 18px;
cursor: pointer;
transition:all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;

&:hover{
    background: #0483ee;
}
`

const Description = styled.p`
font-size: 20px;
letter-spacing: 1.5px;
text-align: center;
line-height: 25.5px;
`

const CTALogoTwo = styled.img`
width: 90%;
`