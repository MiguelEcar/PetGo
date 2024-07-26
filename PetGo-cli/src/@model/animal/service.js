import { path, httpService } from '@http';

/////////////////////////////////////////////////////////////////////////////////
const args = { ...path, path: '/animal' };
/////////////////////////////////////////////////////////////////////////////////

export function createAnimal(payload) {
  return httpService.post(args, payload);
}

export function listAnimal() {
  return httpService.get(args);
}
