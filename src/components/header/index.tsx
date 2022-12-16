import { styled } from "@stitches/react"
import Image from "next/image"
import logo from "../../../public/images/logo.svg"
import { SignInButton } from "../SigInButton"

const HeaderContainer = styled('header',{
    height: '5rem',
    borderBottom: '1px solid #29292e'
})

const HeaderContent = styled('div',{

    maxWidth: '1120px',
    height: '5rem',
    margin: '0 auto',
    padding: '0 2rem',
    display: "flex",
    alignItems: "center",

    nav:{
        marginLeft: '5rem',
        height: '5rem',
        a:{
            display: 'inline-block',
            position: 'relative',
            padding: '0 0.5rem',
            height: '5rem',
            lineHeight: '5rem', 
            color: '$gray300',
            transition:'0.2s all ease',
            '&:hover':{
                color:'$white'
            },
            '& + a':{
                marginLeft:'2rem',
                
            },
            '&.isActive::after':{
                content:'',
                height:'3px',
                borderRadius: '3p 3px 0 0',
                width:'100%',
                position:'absolute',
                bottom:'1px',
                left:'0',
                background: '$yellow500'
            },
            '&.isActive':{
                color:'$white',
                fontWeight:'bold'

            }
        }
    },
    button:{
        marginLeft: 'auto'
    }
})

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <Image src={logo} alt="" />
                <nav>
                    <a className="isActive" href="">Home</a>
                    <a href="">Posts</a>
                </nav>
                <SignInButton />
            </HeaderContent>
        </HeaderContainer>
    )
}