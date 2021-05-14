import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    const data = new Promise((resolve, reject) => {
      resolve(read());
      reject(new Error('ошибка'));
    }).then((arrayBuffer) => json(arrayBuffer));
    return data;
  }
}

GameSavingLoader.load();
