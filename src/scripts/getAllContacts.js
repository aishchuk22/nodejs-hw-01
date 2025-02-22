import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const result = await readContacts();
    return result;
  } catch (err) {
    console.error(err);
    return [];
  }
};

console.log(await getAllContacts());
