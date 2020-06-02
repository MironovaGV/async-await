import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const bufferData = await read();
      return JSON.parse(await json(bufferData));
    } catch (error) {
      return error;
    }
  }
}
