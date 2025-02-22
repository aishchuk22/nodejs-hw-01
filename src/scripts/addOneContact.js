import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = [...existingContacts, createFakeContact()];
    await fs.writeFile(PATH_DB, JSON.stringify(newContact, null, 2));
    console.log('Контакт додано!');
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
