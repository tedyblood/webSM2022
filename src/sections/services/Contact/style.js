import styled from 'styled-components/macro';
import { Box, Heading,Button,Paragraph } from '~styled';

const Contact = styled(Box)`
    padding-top: 60px;
    padding-bottom: 20px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 40px;
    }

    @media (min-width:992px) {
        padding-top: 247px;
        padding-bottom: 129px;
    }
`
Contact.Title = styled(Heading)`
    font-size: 32px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.3;
    position:relative;
    @media (min-width:768px) {
      font-size: 38px;
    }

    @media (min-width:992px) {
      font-size: 48px;
    }
`
Contact.Subtitle = styled(Heading)`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.75;
     
`
Contact.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.77777;
`
Contact.Button = styled(Button)`
color:#fff;
    border-color: #fd346e;
    background-color: #fd346e;
    box-shadow:0 20px 20px rgb(253 52 110 / 30%);
    border-radius:500px;
    &:hover{
        box-shadow:0 20px 20px rgb(253 52 110 / 0%);
        color:#fff;

    }
`

Contact.ContentTextBlock = styled(Box)`
    position:relative;
`
Contact.Image = styled(Box)`
    position: relative;
    width: 80%;
    padding-bottom:20%;
    @media (min-width:1200px) {
        width: 100%;
    }

`;
Contact.ImageInner = styled(Box)`
    position: absolute;
    right: -25%;
    bottom: 0;
    width: 84%;
`;

Contact.Box = styled(Box)``


export default Contact;