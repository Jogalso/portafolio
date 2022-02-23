import Link from 'next/link'

export default function Footer() {
    return ( 
        <div>
            <div className="Footer">
                <Link href="/terms">
                    <a target="_blank">
                        Terminos
                    </a>
                </Link>
                <Link href="/privacy">
                    <a target="_blank">
                        Politica privacidad
                    </a>
                </Link>
                <Link href="/about">
                    <a target="_blank">
                        About
                    </a>
                </Link>
            </div>
            
            <style>
                {`
                    .Footer{
                        background: linear-gradient(70deg, #FFB26B 0, #FF9524 60%, #E68620);
                        display: flex;
                        justify-content: space-around;
                        border-top-right-radius: 0.8vw;
                        border-top-left-radius: 0.8vw;
                        padding-top: 0.5vw;
                        margin-top: 0.3vw;
                    }
                    .Footer a{
                        border-radius: 2px;
                        color: white;
                        background-color: #20B1E6;
                        display: inline-block;
                        text-transform: uppercase;
                        padding: 0.8vw 1vw;
                        text-decoration: none;
                        line-height: 1.5vw;
                        margin-bottom: 0.15vw;
                    }
                    @media only screen and (max-width: 1000px){
                        .Footer{
                            margin-top: 1vw;
                        }
                    }
                    @media only screen and (max-width: 800px){
                        .Footer{
                            height: 8vw;
                            margin-top: 0.3vw;
                        }
                        .Footer a{
                            margin-top: 1vw;
                            margin-bottom: 2vw;
                            padding: 2vw 3vw;
                        }
                    }
                    @media only screen and (max-width: 600px){
                        .Footer{
                            margin-top: 0.8vw;
                        }
                        
                    }
                `}
            </style>
        </div>
    )
}


