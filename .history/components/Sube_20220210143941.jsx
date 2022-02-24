import { useSube } from "../../hooks/globales/useSube"

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
          .botonSube{
            background-color: #12a173;
          }
          `}
        </style>
      </div>
    )
}

export default Sube
