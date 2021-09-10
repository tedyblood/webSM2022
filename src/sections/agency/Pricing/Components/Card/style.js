import styled from 'styled-components/macro';
import { Box, Button, Heading,Paragraph } from '~styled';
import {transparentize} from "polished"
const propToColor = (arg = "#442cd6" ) => transparentize(0.70, arg);
const Card = styled(Box).attrs({className:"card"})`
  padding-bottom: 45px;
  border: none;
  border-radius: 15px;
  transition: 0.4s;
  margin-bottom: 25px;
  text-align:center;
  color:#262729;
  box-shadow:0 4px 10px rgb(0 0 0 / 0%);
  &:hover{
    box-shadow:0 4px 10px rgb(0 0 0 / 5%);
    .btn{
      opacity:1 !important;
    }
  }
`
Card.Title = styled(Heading)`
    font-size: 32px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: normal;
    line-height: 1.3125;
    margin-bottom: 18px;
    color: #fff;
`
Card.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.7);
    position: relative;
    padding-bottom: 20px;

    &::before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.3);
        width: 190px;
        height: 1px;
        transform: translateX(-50%);
    }
`

Card.Price = styled(Box).attrs({className:"price-block"})`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    color: #fff;
`
Card.PriceText = styled(Box)`
    margin-top: 5px;
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: normal;
    line-height: 22px;
    color: inherit;
    transition: 0.4s;
    align-self:${props => props.alignSelf};
`
Card.PriceTextTwo = styled(Box)`
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: normal;
    line-height: 22px;
    color: inherit;
    transition: 0.4s;
    align-self:${props => props.alignSelf};
    display: block;
    position: relative;
    top: -5px;
`
Card.List = styled(Box)`
    margin-bottom: 38px;
    padding-left: 30px;
    padding-right: 30px;
`
Card.ListItem = styled(Box)`
    color:inherit;
    opacity: 0.7;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    margin-bottom: 13px;
`
Card.Button = styled(Button).attrs(props => ({
    style:{
        borderColor: props.backgroundColor? props.backgroundColor: "#5034fc" ,
        background: props.backgroundColor? props.backgroundColor: "#442cd6" ,
        boxShadow:  "0 4px 4px " + propToColor(props.backgroundColor),
    }
}))`
    transition:.4s;
  &:hover{
    transform: translateY(-5px);
    border-color:${props => props.hoverBackgroundColor? props.hoverBackgroundColor: "#442cd6" }!important;
    background:${props => props.hoverBackgroundColor? props.hoverBackgroundColor: "#442cd6" }!important;
    box-shadow:  ${props => "0 4px 4px " + propToColor(props.hoverBackgroundColor)}!important;
  }
`
Card.Amount = styled(Box)`
    font-size: 70px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -1px;
    margin-bottom: 0;
    transition: 0.4s;
    color:inherit;
`

Card.Top = styled(Box)`
    padding-bottom: 35px;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`
Card.Box = styled(Box)``
export default Card;