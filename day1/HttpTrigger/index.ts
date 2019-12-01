import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const FACES = ["נ","ג","ה","ש"]

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const rollResult = Math.floor(Math.random() * FACES.length)
    context.res = {
        body: FACES[rollResult]
    }
};

export default httpTrigger;
