import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const addedContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const newContacts = [...contacts, ...addedContacts];

    await writeContacts(newContacts);
    console.log(`Додано ${number} контактів!`);
  } catch (err) {
    console.error(err);
  }
};

generateContacts(4);
