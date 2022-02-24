
export default function ContenedorImagenes(){
    return (
        <>
        <figure>
            <div className='sopaImagenes'>
                <Picture width={157} height={100} style={{ width: '157px' }}>
                    <img
                        src="../images/reactLogo.png"
                        alt="react"
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
                        src="../images/mqttLogo.png"
                        alt="graphql"
                    />
                </Picture>
            </div>
        </figure>
        <style>
        {`
            .contendor{
                width: 100%;
                backgroud: black;
            }
        `}
    </style>
        </>
            
    )
}