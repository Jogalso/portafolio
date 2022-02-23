import Link from 'next/link';
import Nav from 'device-agnostic-ui/Nav.mjs'
import LinkActive from 'device-agnostic-ui/LinkActive.mjs'
import LinkNav from 'device-agnostic-ui/LinkNav.mjs'
import { GalbiotLogo } from './GalbiotLogo';
export default function Menu() {
    
    return ( 
        <div>
            <div className="botones">
            <Nav>
                <LinkActive href="/" passHref>
                    <LinkNav>
                    <GalbiotLogo width={} />
                    </LinkNav>
                </LinkActive>
                <LinkActive href="/styles" passHref>
                    <LinkNav>Styles</LinkNav>
                </LinkActive>
                <LinkActive href="/components" passHref>
                    <LinkNav>Components</LinkNav>
                </LinkActive>
                <LinkActive href="/hooks" passHref>
                    <LinkNav>Hooks</LinkNav>
                </LinkActive>
                <LinkNav href="https://github.com/jaydenseric/device-agnostic-ui">
                    GitHub
                </LinkNav>
                <LinkNav href="https://npm.im/device-agnostic-ui">npm</LinkNav>
            </Nav>
                </div>
            <style>
                {`
                    .botones{
                        margin-top: 0.5vw;
                        display: flex;
                        align-items: end;
                        margin-right: 8vw;
                    }
                    .botones a{
                        color: white;
                        font-size: 1.2vw;
                        border-color: #007099;
                        background-color: #20B1E6;
                        text-transform: uppercase;
                        padding: 0.8vw 1vw;
                        margin-left: 0.1vw;
                        margin-bottom: 0.15vw;
                        text-decoration: none;
                        line-height: 1.5vw;
                    }
                    @media only screen and (max-width: 1000px){
                        .botones{
                            margin-right: 8vw;
                        }
                        .botones a{
                            font-size: 2vw;
                            padding: 1.2vw 2vw;
                            line-height: 2vw;
                            margin-bottom: 0.5vw;
                            margin-left: 0.3vw;
                        }
                    }
                    @media only screen and (max-width: 850px){
                        .botones{
                            margin-right: 8vw;
                        }
                        .botones a{
                            font-size: 2vw;
                            padding: 1.2vw 2vw;
                            line-height: 2vw;
                            margin-bottom: 0.5vw;
                            margin-left: 0.3vw;
                        }
                    }
                    @media only screen and (max-width: 640px){
                        .botones{
                            margin-right: 8vw;
                        }
                        .botones a{
                            font-size: 2.5vw;
                            padding: 1.8vw 2.5vw;
                            line-height: 2.3vw;
                        }
                    }
                    @media only screen and (max-width: 450px){
                        .botones{
                            margin-right: 5vw;
                        }
                        .botones a{
                            font-size: 3vw;
                            padding: 2vw 3vw;
                        }
                    }
                    @media only screen and (max-width: 400px){
                        .botones{
                            margin-right: 2vw;
                        }
                        .botones a{
                            font-size: 4vw;
                            padding: 2.5vw 3.5vw;
                        }
                    }
                `}
            </style>
        </div>
    )
}
