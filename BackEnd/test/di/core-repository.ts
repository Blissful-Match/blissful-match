import { TYPES } from '../../src/di/types';
import { Container } from 'inversify';

// Interface imports begin
import IRepository from '../../src/core/repository/definition';
// Interface imports end

// Entity imports begin
import MongoRepo from '../../src/core/repository/mongo';
// Entity imports end

const container = new Container();

container.bind<IRepository>(TYPES.IRepository).to(MongoRepo).inSingletonScope();

export default container;