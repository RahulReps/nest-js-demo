import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: NextFunction): void {
    Logger.log(`${req.method} ${req.originalUrl}`);

    next();
  }
}