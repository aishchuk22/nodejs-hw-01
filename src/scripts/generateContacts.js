import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const addedContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const newContacts = [...existingContacts, ...addedContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(newContacts, null, 2));
    console.log(`Додано ${number} контактів!`);
  } catch (err) {
    console.error(err);
  }
};

generateContacts(5);
