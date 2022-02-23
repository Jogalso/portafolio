import { useEffect, useState } from 'react';
import Link from 'next/link';
import Heading from 'device-agnostic-ui/Heading.mjs';

export default function Header() {

    const [arriba, setArriba] = useState(true)

    const handleScroll = (e) => {
            let element = e.target
            if (element.scrollingElement.scrollTop < 100) {
                setArriba(true)
            }else{
                setArriba(false)
            }
    }  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [arriba])

    return ( 
        <div onScroll={handleScroll}>
            <div className={arriba ? "Header" : "HeaderScrolled" }>
                <div className="Info">
                    <img className="Info__img" src="../images/galbis2.png" />
                    <Heading size={1}>Jose Galbis</Heading>
                </div>
            </div>
            
            <style>
                {`
                    
                    .HeaderScrolled{
                        display: flex;
                        justify-content: space-between;
                        background-image: linear-gradient(70deg,rgba(230,134,32,.6) 0, rgba(255,149,36,.6) 60%, rgba(255,178,107,.6));
                        border-bottom: 0.3vw solid rgba(0,112,153,.6);
                        border-bottom-right-radius: 0.8vw;
                        border-bottom-left-radius: 0.8vw;
                        position: fixed;
                        width: 100%;
                        z-index: 1000;
                    }
                    .Info{
                        color: #007099;
                        padding-top: 0.5vw;
                        margin-left: 8vw;
                        text-align: center;
                    }
                    .Info__img{
                        height: auto;
                        width: 50%;
                    }
                    @media only screen and (max-width: 1000px){
                        .Header{
                            height: 13.5vw;
                        }
                        .HeaderScrolled{
                            height: 13.5vw;
                        }
                        .Info{
                            margin-top: 2em;
                            display: flex;
                        }
                        .Info__img{
                            height: 8vw;
                            margin-right: 1em;
                        }
                    }
                    @media only screen and (max-width: 850px){
                        .Header{
                            height: 14vw;
                        }
                        .HeaderScrolled{
                            height: 14vw;
                        }
                        .Info{
                            margin-top: 2em;
                            display: flex;
                        }
                        .Info__img{
                            height: 8vw;
                            margin-right: 1em;
                        }
                    }
                    @media only screen and (max-width: 640px){
                        .Info{
                            margin-top: 1em;
                        }
                        .Info__img{
                            height: 10vw;
                        }
                    }
                    @media only screen and (max-width: 600px){
                        .Header{
                            height: 18.5vw;
                        }
                        .HeaderScrolled{
                            height: 18.5vw;
                        }
                    }
                    @media only screen and (max-width: 500px){
                        .Header{
                            height: 22vw;
                        }
                        .HeaderScrolled{
                            height: 22vw;
                        }
                    }
                    @media only screen and (max-width: 450px){
                        .Header{
                            height: 24vw;
                        }
                        .HeaderScrolled{
                            height: 24vw;
                        }
                        .Info__img{
                            height: 15vw;
                        }
                    }
                    @media only screen and (max-width: 400px){
                        .Header{
                            height: 26vw;
                        }
                        .HeaderScrolled{
                            height: 26vw;
                        }
                        .Info{
                            margin-top: 0.8em;
                            margin-left: 3vw;
                            align-items: center;
                        }
                        .Info__img{
                            margin-right: 0.1em;
                            height: 18vw;
                        }
                        Info h2{
                            font-size: 6px;
                        }
                    }
                `}
            </style>
        </div>
    )
}
