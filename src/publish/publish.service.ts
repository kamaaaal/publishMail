import { Injectable } from '@nestjs/common';
import { RedisClientType } from '@redis/client';
import * as redis from 'redis';

@Injectable()
export class PublishService {
    redisClient : redis.RedisClientType;

    contructor (){
        this.redisClient = redis.createClient({
            url : process.env.REDIS_URL,
            password : process.env.REDIS_PASS,
        });
        // before publishing message we have to await till connecting to client
        (async ()=> await this.redisClient.connect())();
    }

    async publishMsg(channel,msg){
        await this.redisClient.publish(channel,msg);
    }
}
