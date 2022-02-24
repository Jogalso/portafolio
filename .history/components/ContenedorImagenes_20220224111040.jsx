import Picture from 'device-agnostic-ui/Picture.mjs'
export default function ContenedorImagenes(){
    return (
        <>
        <figure className='figuraSopa'>
            <div className='sopaImagenes'>
                
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/logo.png"
                        alt="iot"
                    />
                </Picture>
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/reactLogo.png"
                        alt="react"
                    />
                </Picture>
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/nextjsLogo.svg"
                        alt="next.js"
                    />
                </Picture>
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/graphqlreactLogo.svg"
                        alt="graphql-react"
                    />
                </Picture>
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/graphqlLogo.png"
                        alt="graphql"
                    />
                </Picture>
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/apolloLogo.png"
                        alt="apollo"
                    />
                </Picture>
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/socketioLogo.png"
                        alt="socket.io"
                    />
                </Picture>
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/mqttLogo.png"
                        alt="mqtt"
                    />
                </Picture>
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/mongodbLogo.png"
                        alt="mongoDb"
                    />
                </Picture>
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/nodejsLogo.svg"
                        alt="node.js"
                    />
                </Picture>
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/vercelLogo.svg"
                        alt="vercel"
                    />
                </Picture>
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/awsLogo.png"
                        alt="aws"
                    />
                </Picture>
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/arduinoLogo.svg"
                        alt="arduino"
                    />
                </Picture>
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/industrialshieldsLogo.png"
                        alt="industrial shields"
                    />
                </Picture>
                
                
            </div>
        </figure>
        <style>
        {`
            .figuraSopa{
                position: absolute;
                margin: 0;
                -webkit-mask-image: -webkit-linear-gradient(left,#000,transparent)
            }
            .sopaImagenes{
                position: relative;
                left:100%;
                display: grid;
                grid-auto-flow: column;
                grid-gap: 3rem;
                animation:sopa 25s ease-out infinite;
            }
            .sopaImagenes img{
                border-radius: 2em;
            }
            @keyframes sopa {
                0%{}
                100%{transform: translateX(-100%);}
              }
        `}
    </style>
        </>
            
    )
}