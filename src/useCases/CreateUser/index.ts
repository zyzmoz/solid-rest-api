import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { FakeUserRepository } from "../../repositories/implementations/FakeUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider;
const fakeUserRepository = new FakeUserRepository;

const createUserUseCase = new CreateUserUseCase(
  fakeUserRepository,
  mailtrapMailProvider,
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export {
  createUserUseCase,
  createUserController
}