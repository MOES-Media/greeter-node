import express, {Express, Request, Response} from "express";
import * as api from "./api";
import swaggerRoutes from "swagger-routes-express"
import apiDefinition from "@moes-media/greeter-api"
import bodyParser from "body-parser"

const app: Express = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const connect = swaggerRoutes.connector(api as any, apiDefinition)
connect(app)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});