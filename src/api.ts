import {Request, Response} from "express";
import {GreetApiServiceClient} from "@moes-media/resources/be/moesmedia/resources/greet/v1/greet_api_grpc_pb.js";
import {ChannelCredentials} from "@grpc/grpc-js";
import messages from "@moes-media/resources/be/moesmedia/resources/greet/v1/greet_pb.js";
import {GetGreeting200Response, GetGreetingRequest} from "@moes-media/greeter-api";

const greeterApiClient = new GreetApiServiceClient("localhost:6767", ChannelCredentials.createInsecure())

export const getGreeting = (req: Request<GetGreetingRequest>, resp: Response<GetGreeting200Response>) => {
    console.log(req.body)
    greeterApiClient.getGreeting(new messages.GetGreetingRequest().setName(req.body.name), (err, grpcResp) => {
        resp.status(200)
            .json({greeting: grpcResp.getGreeting()})
    })
}