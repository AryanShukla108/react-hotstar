import React from 'react'

import styled from 'styled-components'


function Detail() {
    return (

        <Container>

            <Background>
                <img src="https://c4.wallpaperflare.com/wallpaper/914/821/232/snow-snowflakes-ice-deer-wallpaper-preview.jpg" />
            </Background>

            <ImageTitle>

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Cinderella_%282015%29_Logo_Black.svg/1200px-Cinderella_%282015%29_Logo_Black.svg.png" />

            </ImageTitle>

            <Controls>

                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>

                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>

                <AddButton>
                    <span>+</span>
                </AddButton>

                <GroupWatchButton>
                    <img src="images/group-icon.png" />
                </GroupWatchButton>

            </Controls>

            <SubTitle>
                1 hr 41 min . 2023 . Family . U/A 7+ . English 
            </SubTitle>

            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus non quis rerum deserunt tempora nulla sunt quaerat eum delectus ducimus, repudiandae voluptates quasi dolor odio cupiditate impedit maxime quod?
            </Description>

        </Container>
    )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-y: hidden;
`

const Background = styled.div`

position: fixed;
top: 0;
left: 0;
right: 0;
z-index: -1;
opacity: 0.8;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

const ImageTitle = styled.div`
height: 30vh;
min-height: 170px;
width: 35vw;
min-width: 200px;
margin-top: 60px;

img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`

const Controls = styled.div`
display: flex;
align-items: center;
`

const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
font-size: 0px 24px;
margin-right: 22px;
display: flex;
align-items: center;
height: 56px;
background: rgb(249,249,249);
border: none;
letter-spacing: 1.8px;
cursor: pointer;

&:hover{
    background: rgb(198,198,198);
}
`

const TrailerButton = styled(PlayButton)`
background: rgba(0,0,0,0.23);
background: 1px solid rgb(249,249,249);
text-transform: uppercase;
`

const AddButton = styled.button`
margin-right: 16px;
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border:2px solid white;
background-color: rgba(0,0,0,0.6);
cursor: pointer;

span{
    font-size: 30px;
    color: white;
}
`

const GroupWatchButton = styled(AddButton)`
background: rgb(0,0,0);
`

const SubTitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`

const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249,249,249);
max-width: 500px;
color: purple;
font-weight: bold;
`