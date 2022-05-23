import { Body, Controller, Post } from '@nestjs/common';
import { PublishService } from './publish.service';

@Controller('publish')
export class PublishController {
    constructor(private publishService:PublishService){}

    // post method publishes messages using publish service publish method
    @Post()
    publishMsg(@Body() body){// still have to implement the dto 
        this.publishService.publishMsg(body.channel,body.msg);
    }
}
