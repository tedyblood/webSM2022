import styled from 'styled-components/macro';
import {
    Box,
    Heading,
    Button,
    Paragraph
} from '~styled';

const Hero = styled(Box)`
    padding-top: 0;
    padding-top: 50px;
    padding-bottom: 60px;

    @media (min-width: 768px){
        padding-top: 60px;
        padding-bottom: 80px;
    }

    @media (min-width: 992px){
        padding-top: 110px;
        padding-bottom: 0px;
    }

    @media (min-width: 1200px) {
        padding-top: 35px;
        padding-bottom: 0px;
    }

`

Hero.Content = styled(Box)`
    @media (min-width: 992px){
    padding-bottom: 100px;
    }

    @media (min-width: 1600px){
    padding-bottom: 0;
    }
`
Hero.SubTitle = styled(Heading)`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 25px;
    margin-bottom: 15px;
`
Hero.Title = styled(Heading)`
    font-size: 38px;
    font-weight: 500;
    letter-spacing: -0.5px;
    line-height: 1.2068;
    margin-bottom: 21px;
    margin-bottom: 30px;

    @media (min-width: 768px){
        font-size: 48px;
    }

    @media (min-width: 992px){
        font-size: 60px;
        font-weight: 500;
        letter-spacing: normal;
        line-height: 72px;
    }
`
Hero.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 32px;
    margin-bottom: 10px;
    opacity:0.7;
`

Hero.ButtonGroup = styled(Button)`
    padding-top: 28px;
    margin-bottom: -20px;

    .btn {
        margin-bottom: 20px;
    }
`
Hero.Button = styled(Button)`
    min-width: 130px;
    height: 50px;
    border-radius: 500px;
    font-size: 14px;
    @media (min-width: 480px){
    min-width: 180px;
    height: 56px;
    font-size: 15px;
    }

    &.🌱{
        margin-right:18px;
        margin-bottom:20px
    }

    &.btn-red{
    color:#fff;
    background-color: #ff7272;
    border-color: #ff7272;
    &:hover{
        color:#fff;
        background-color: #ff8787;
        border-color: #ff8080;
    }

    }
    &.btn-green{
        color:#fff;
        background-color: #099a97;
        border-color: #099a97;
        &:hover{
        color:#fff;
        background-color: #3aaeac;
        border-color: #22a4a1;

    }
    }
`
Hero.ImageGroup = styled(Box)`
    display:flex;
    align-items: flex-end;
    margin-top: -60px;
    margin-bottom: 70px;

    @media (min-width: 992px){
    margin-top: 0;
    margin-bottom: 0;
    }
    position: relative;
    margin-left: -50px;

    @media (min-width: 575px){
    margin-left: -100px;
    }

    @media (min-width: 992px){
    margin-bottom: 0;
    }
`
Hero.ImageOne = styled(Box)`
    position: relative;
    width: 95%;
    bottom: -80px;

    @media (min-width: 992px){
    bottom: -110px;
    }
`
Hero.ImageTwo = styled(Box)`
width: 50%;
`

Hero.Box = styled(Box)`

`

export default Hero;