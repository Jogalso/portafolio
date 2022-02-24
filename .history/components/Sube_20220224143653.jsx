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
          .botonSube{
          }
          `}
        </style>
      </div>
    )
}

export default Sube
