module.exports = {
  env: {
    // datos backend
    URI_BACKEND: "http://localhost:3000/api/graphql/",
    // URI_BACKEND: "http://192.168.1.216:4000/api/",
    // URI_BACKEND: 'http://localhost:4000/api/',

    // apis distintas
    API_AUTENTIFICACION: "users",
    API_DATOS: "secados",
    API_PRODUCTOS: "tipoProducto",
    API_SECADEROS: "secaderos",

    // datos Ris
    URI_RIS: "ws://192.168.1.216:5001/", // :5001

    DB_USER: "galbis",
    DB_PASSWD: "siblag123",
    DB_HOST: "cluster2.6b78a.mongodb.net",
    // cluster0.6b78a.mongodb.net
    // cluster2.6b78a.mongodb.net
    // secaderos.6b78a.mongodb.net
    DB_PORT: "46677",
    DB_NAME: "secadero",

    // collections

    USERS: "usuarios",
    DATA: "secados",

    // datos de ejecucion del servidor

    PORT: "4000",
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://15.237.58.53:4000/api/:path*",
      },
    ]
  },
}
