import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('There are no contacts to remove');
      return;
    }
    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Last contact was removed');
  } catch (err) {
    console.log(err);
  }
};

removeLastContact();
