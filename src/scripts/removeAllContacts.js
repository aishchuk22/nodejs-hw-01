import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts(JSON.parse('[]'));
    console.log('All data was deleted');
  } catch (err) {
    console.error(err.message);
  }
};

removeAllContacts();
