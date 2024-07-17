import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const UserEmail = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        console.log("request.user", request.user); 
        console.log("email", request.user?.email); 
        
        return request.user?.email;
    }
);
