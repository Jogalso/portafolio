import { useSube } from "../hooks/useSube"

const Sube = () => {  

  const {arriba, handleSube} = useSube()

    return (
      <div>
        <a
          className={arriba ? "botonSube arriba" : "botonSube abajo"}
          onClick={() => handleSube()}
        >
          <img src="../images/up.png" />
        </a>
        <style>
          {`
          .arriba {
            display:none;
          }
          .abajo{
              padding:20px;
            font-size:20px;
            color:#fff;
            cursor:pointer;
            position: fixed;
            bottom:20px;
            right:20px;
              position: fixed;
              bottom: 2em;
              right: 2em; 
              border-radius:50%;
          }
          `}
        </style>
      </div>
    )
}

export default Sube
