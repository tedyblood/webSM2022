import styled from 'styled-components/macro';
import { Box, Heading,Button,Paragraph } from '~styled';

const Details = styled(Box)`
    padding-top: 50px;
    padding-bottom: 40px;
    @media (min-width: 768px){
    padding-top: 70px;
    padding-bottom: 60px;
    }
    @media (min-width: 992px){
    padding-top: 125px;
    padding-bottom: 110px;
    }
`


Details.Title = styled(Heading)`
    font-size: 25px;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 1.3;
    margin-bottom: 20px;
    @media (min-width: 576px) {
        font-size: 32px;
    }
    @media (min-width: 768px){
        font-size: 35px;
    }
    @media (min-width: 992px){
        font-size: 48px;
    }
`
Details.MetaInfo = styled(Box)`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
Details.Link = styled(Button)`
padding:0;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 32px;
    padding-right: 15px;
    padding-left: 55px;
    &:focus{
        box-shadow: none;
    }
    &:hover{
        color: #cc461b;
    }
    @media (min-width: 768px){
        padding-left: 70px;
        padding-right: 25px;
        font-size: 18px;
    }
    position: relative;
    &::before {
        content: "";
        position: absolute;
        width: 41px;
        height: 1px;
        left: 0;
        top: 50%;
        background-color: #ff5722;
    }
`

Details.Image = styled(Box)`


`
Details.Text = styled(Paragraph)`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 32px;
    margin-bottom: 30px;
`
Details.SubTitle = styled(Paragraph)`
    font-size: 21px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.2;
`
Details.List = styled(Box)`
    padding: 0;
    margin: 0;
    margin-left: 20px;
    li{
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 1.6;
    margin-bottom: 8px;
    }
`

Details.Tag = styled(Box)`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
Details.TagList = styled(Box)`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    li{
    list-style: none;
    a{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 75px;
    min-height: 50px;
    border-radius: 5px;
    border: 1px solid rgba(22, 22, 22, 0.12);
    background-color: #fff;
    color: rgba(38, 39, 41, 0.7);
    padding: 0 23px;
    margin-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    flex-wrap: wrap;
    transition: 0.4s;
    cursor: pointer;
    &:hover{
        background-color: #5034fc;
        color: #fff !important;
    }
    }
}
`
Details.SocialList = styled(Box)`
li{
    display: inline-block;
    a{
    padding: 0 15px;
    transition: 0.4s;
    font-size: 21px;
    cursor: pointer;
    color:rgba(38, 39, 41, 0.7);
    &:hover{
        i{
            color: #5034fc;
        }
    }
    }
}
`
Details.Pagination = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;

`
Details.PrevButton = styled(Box)`
    .btn-link {
        font-size: 21px;
        font-weight: 500;
        letter-spacing: normal;
        line-height: 1;
        color:#262729;
        align-items: center;
        cursor: pointer;
        &:hover {
            color: #5034fc;
        }
        i {
        margin-right: 10px;
        }
    }

`
Details.NextButton = styled(Box)`
    .btn-link {
        font-size: 21px;
        font-weight: 500;
        letter-spacing: normal;
        line-height: 1;
        color:#262729;
        align-items: center;
        cursor: pointer;
        &:hover {
            color: #5034fc;
        }
        i {
            margin-left: 10px;
        }
    }
`
Details.Box = styled(Box)`

`

export default Details;