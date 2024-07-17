import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const UserEmail = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        console.log("request.user", request.user); // Log the entire user object
        console.log("email", request.user?.email); // Log specifically the email
        
        return request.user?.email;
    }
);
