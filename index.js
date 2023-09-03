const contacts = require("./contacts");

//* з використанням yargs для парсингу аргументів командного рядка
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log("\x1B[1;30;47m LIST OF ALL CONTACTS: \x1b[0m");
      console.log("\x1B[1;37;42m");
      console.table(allContacts);
      console.log("\x1b[0m");
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      if (!oneContact)
        console.log(
          "\x1b[37;41m YOU ARE LOOKING FOR NOT EXISTING CONTACT: \x1b[0m"
        );
      else console.log("\x1B[1;30;47m YOU ARE LOOKING FOR CONTACT: \x1b[0m");
      console.table(oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log("\x1B[1;30;47m YOU HAVE CREATED A NEW CONTACT: \x1b[0m");
      console.table(newContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      if (!deleteContact)
        console.log(
          "\x1b[37;41m YOU ARE TRYING TO DELETE A CONTACT THAT DOES NOT EXIST:  \x1b[0m"
        );
      else console.log("\x1B[1;30;47m YOU HAVE DELETED A CONTACT: \x1b[0m");
      console.table(deleteContact);
      break;

    case "update":
      const updatedContact = await contacts.updateContact(
        id,
        name,
        email,
        phone
      );
      if (!updatedContact)
        console.log(
          "\x1b[37;41m YOU ARE TRYING TO DELETE A CONTACT THAT DOES NOT EXIST:  \x1b[0m"
        );
      else console.log("\x1B[1;30;47m YOU HAVE UPDATED A CONTACT: \x1b[0m");
      console.table(updatedContact);
      break;

    default:
      console.warn("\x1b[30;41m UNKNOWN ACTION TYPE! \x1b[0m");
  }
}

invokeAction(argv);

//* з використанням commander для парсингу аргументів командного рядка
// const { Command } = require("commander");
// const program = new Command();
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "id")
//   .option("-n, --name <type>", "name")
//   .option("-e, --email <type>", "email")
//   .option("-p, --phone <type>", "phone");

// program.parse(process.argv);

// const argv = program.opts();

// const actions = {
//   list: contacts.listContacts,
//   get: contacts.getContactById,
//   add: contacts.addContact,
//   remove: contacts.removeContact,
//   update: contacts.updateContact,
// };

// async function invokeAction({ action, ...inputData }) {
//   try {
//     const result = await actions[action]({ ...inputData });
//     action === "list" ? console.table(result) : console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// invokeAction(argv);

//* Перевірка працездатності функцій для роботи з контактами
// (async () => {
//   const s = await contacts.listContacts();
//   console.log(s);
// })();

// (async () => {
//   const s = await contacts.getContactById(id="Z5sbDlS7pCzNsnAHLtDJd");
//   console.log(s);
// })();

// (async () => {
//   const s = await contacts.removeContact((id = "AeHIrLTr6JkxGE6SN-0Rw"));
//   console.log(s);
// })();

// (async () => {
//   const s = await contacts.addContact(name="Allen Raymond", email="nulla.ante@vestibul.co.uk", phone="(992) 914-3792");
//   console.log(s);
// })();
