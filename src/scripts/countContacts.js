import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (err) {
    console.error(err);
    return [];
  }
};

console.log(await countContacts());
