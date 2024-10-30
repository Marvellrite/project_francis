import { TypeOf, object, string } from "zod";

const createSessionSchema = object({
    body: object({
        email : string({
            required_error: "UserID is required"
        }),
        password : string({
            required_error: "UserID is required"
        })

    }
    )
})

export type CreateSessionInput = TypeOf<typeof createSessionSchema>;
export default createSessionSchema;