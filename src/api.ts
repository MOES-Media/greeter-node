import {Request, Response} from "express";
import {GreetApiServiceClient} from "@moes-media/resources/be/moesmedia/resources/greet/v1/greet_api_grpc_pb.js";
import {ChannelCredentials} from "@grpc/grpc-js";
import messages from "@moes-media/resources/be/moesmedia/resources/greet/v1/greet_pb.js";

const greeterApiClient = new GreetApiServiceClient("localhost:6767", ChannelCredentials.createInsecure())

export const getGreeting = (req: Request<{ body: { name?: string } }>, resp: Response) => {
    console.log("get greeting")
    const name = "General Kenobi";
    greeterApiClient.getGreeting(new messages.GetGreetingRequest().setName(name), (err, grpcResp) => {
        resp.status(200)
        resp.json({greeting: grpcResp.getGreeting()})
    })
}