import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = [...contacts, createFakeContact()];

    await writeContacts(newContact);
    console.log('Контакт додано!');
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
