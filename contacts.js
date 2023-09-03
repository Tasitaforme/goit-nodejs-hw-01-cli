//const fs = require("fs").promises;
const fs = require("fs/promises");
const { nanoid } = require("nanoid");

//const path = require("path");
const path = require("node:path");

//const contactswithoutPath = (`${__dirname}/db/contacts.json`);
const contactsPath = path.join(__dirname, "/db/contacts.json");

//* Функції для використанням з yargs
// Повертає масив контактів
async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

//Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
async function getContactById(contactId) {
  const db = await listContacts();
  const contact = db.find((contact) => contact.id === contactId);
  return contact || null;
}

// Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
async function removeContact(contactId) {
  const db = await listContacts();
  const index = db.findIndex((el) => el.id === contactId);
  if (index === -1) {
    return null;
  }
  const [deletedContact] = db.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(db, null, 2));
  return deletedContact;
}

// Повертає об'єкт доданого контакту.
async function addContact(name = "", email = "", phone = "") {
  const db = await listContacts();
  const newContact = {
    id: nanoid(20),
    name,
    email,
    phone,
  };
  db.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(db, null, 2));
  //or another solution
  // const newDb = [...db, newContact];
  // await fs.writeFile(contactsPath, JSON.stringify(newDb, null, 2));
  return newContact;
}

// Повертає об'єкт оновленого контакту
async function updateContact(id, name, email, phone) {
  if (!id) {
    return "Сannot update the contact, enter the contact ID if you want to update it!";
  }
  const db = await listContacts();
  const index = db.findIndex((el) => el.id === id);
  if (index === -1) {
    return null;
  }
  const prevContact = db[index];
  db[index] = {
    ...prevContact,
    name: name || prevContact.name,
    email: email || prevContact.email,
    phone: phone || prevContact.phone,
  };
  const updatedContact = db[index];

  await fs.writeFile(contactsPath, JSON.stringify(db, null, 2));

  return updatedContact;
}

//* Функції для використанням з commander
// const listContacts = async () => JSON.parse(await fs.readFile(contactsPath));

// const getContactById = async ({ id }) => {
//   console.log(id);
//   const db = await listContacts();
//   const contact = db.find((contact) => contact.id === id);
//   return contact || null;
// };

// const removeContact = async ({ id }) => {
//   if (!id) {
//     return "Unable to delete contact, please enter contact ID if you want to delete it!";
//   }
//   const db = await listContacts();
//   const index = db.findIndex((el) => el.id === id);
//   if (index === -1) {
//     console.log(
//       "You are trying to delete a contact with ID that does not exist!"
//     );
//     return null;
//   }
//   const [deletedContact] = db.splice(index, 1);
//   await fs.writeFile(contactsPath, JSON.stringify(db, null, 2));
//   return deletedContact;
// };

// const addContact = async ({ name = "", email = "", phone = "" }) => {
//   if (name || email || phone) {
//     const db = await listContacts();
//     const newContact = {
//       id: nanoid(20),
//       name,
//       email,
//       phone,
//     };
//     db.push(newContact);
//     await fs.writeFile(contactsPath, JSON.stringify(db, null, 2));

//     return newContact;
//   }
//   return "Cannot add a contact, enter name, email, or number...";
// };

// const updateContact = async ({ id, ...inputData }) => {
//   if (!id) {
//     return "Сannot update the contact, enter the contact ID if you want to update it!";
//   }

//   if ((id && !inputData) || inputData == {}) {
//     return "Сannot update the contact, enter info that you want to update!";
//   }

//   const db = await listContacts();
//   const index = db.findIndex((el) => el.id === id);
//   if (index === -1) {
//     console.log(
//       "You are trying to update a contact with ID that does not exist!"
//     );
//     return null;
//   }
//   const prevContact = db[index];
//   db[index] = { ...prevContact, ...inputData };
//   const updatedContact = db[index];

//   await fs.writeFile(contactsPath, JSON.stringify(db, null, 2));

//   return updatedContact;
// };

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
