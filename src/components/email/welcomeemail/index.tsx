import React from 'react'
import { A, Box, Email, Item, Image, Span } from 'react-html-email'
import logo from '../../../assets/images/crester_logo.png'

type Props = {
  subject: string
  confirmationUrl: string
  userName: string
}

const emailHeadCSS = `
  body {
    background-color: #F5F8FA;
  }
`.trim()

const backgroundStyle = {
  WebkitBoxShadow: '6px 6px 40px 3px rgba(140, 152, 164, 0.2)',
  backgroundColor: '#FFF',
  borderRadius: 7,
  boxShadow: '6px 6px 40px 3px rgba(140, 152, 164, 0.2)',
  margin: '0 auto',
  width: '100%',
  padding: '0 32px',
}

const containerStyle = {
  backgroundColor: '#F5F8FA',
  width: '100vw',
  height:'100vh',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'column'
}

const span = {
    height:'100px', display:'flex', justifyContent:'center', alignItems:'center'
}
const span2 = {
    height:'100px', display:'flex', justifyContent:'flex-start', alignItems:'center', marginTop:'10px'
}
const span3 = {
    height:'50px', display:'flex', justifyContent:'flex-start', alignItems:'center'
}


const SignupWelcome = ({ userName, subject, confirmationUrl }: Props) => (
  <Box align="center" style={{
        backgroundColor: '#F5F8FA',
        width: '100vw',
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
  }}>
    <Email align="center" headCSS={emailHeadCSS} title={subject}>
      <Item align="center">
        <Box style={backgroundStyle}>
          <Item style={span}>
          <Image
          height={100}
          alt="logo"
          src={logo}
          style={{ margin: '10px 0 auto ' }}
          width={100}
        />
          </Item>
          <Item style={span}>
          <Span style={{
            height: "32px",
            fontFamily: 'Urbanist, sans-serif',
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: "22px",
            lineHeight: "32px",
            textAlign: "center",
            letterSpacing: "0.005em",
            background: "linear-gradient(286.17deg, #06C149 0%, #33EB75 100%)",
            WebkitTextFillColor:'transparent',
            WebkitBackgroundClip:'text',
            backgroundClip: "text",
            }}>
            Cresters
          </Span>
          </Item>
          <Item style={span}>
            <Span style={{  fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "0.01em",
            color: "#424242",}}>
            Welcome to Cresters🎉
            </Span>
          </Item>
          <Item style={span2}>
            <Span style={{  fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "0.01em",
            color: "#424242",}}>
            Hi There,
            </Span>
          </Item>
          <Item style={{  
            display:'block',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "24px",
            letterSpacing: "0.01em",
            marginBottom:'15px',
            color: "#424242",}}>
            Please click on the link below to verify your email address. This is to confirm ownership of  this email id provided.
            </Item>
          <Item style={{  
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontStyle: "normal",
            marginTop:'15px',
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "24px",
            textDecorationLine: "underline",
            color: '#06C149'
            }}>
            Verify email address here
            </Item>
            <Item style={{  
            display:'block',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "24px",
            letterSpacing: "0.01em",
            marginTop:'15px',
            color: "#424242",}}>
            Alternatively, If you are having trouble with this link, try copying and pasting this URL in your  web browser.
            </Item>
            <Item style={{  
            display:'block',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "24px",
            letterSpacing: "0.01em",
            textDecorationLine: "underline",
            marginTop:'15px',
            color: "#424242",}}>
           https://www.cresters.com/user/verifyaccount/86i8t238tugukgjvdjkbfcjv jvjvj2vekufkufvr
            </Item>
            <Item style={span2}>
            <Span style={{  fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "0.01em",
            color: "#424242",}}>
            Cheers,
            </Span>
          </Item>
            <Item style={span3}>
            <Span style={{  fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "0.01em",
            color: "#424242",}}>
            Cresters Team
            </Span>
          </Item>
          <Item style={span}>
          <Span style={{
            height: "32px",
            fontFamily: 'Nunito, sans-serif',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "12px",
            textAlign: "center",
            letterSpacing: "0.005em",
            }}>
            If you have any questions, you can reply to this email or contact us at <Span style={{color: "#33EB75", fontWeight: 500,}}>hello@cresters.com</Span>
          </Span>
          </Item>
        </Box>
      </Item>
    </Email>
  </Box>
)

export { SignupWelcome }
