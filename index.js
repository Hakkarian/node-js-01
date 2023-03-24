import { program } from 'commander';
// import yargs from 'yargs';
// import { hideBin } from 'yargs/helpers';
import contacts from './contacts.js';



//second variant
// const arr = hideBin(process.argv);
// const {argv} = yargs(arr);





const invokeAction = async ({action, id, name, email, phone}) => {
    switch (action) {
      case "list":
        const allContacts = await contacts.listContacts();
        console.table(allContacts);
        break;
      case "get":
        const oneBook = await contacts.getContactById(id);
        console.log(oneBook);
        break;
      case "add":
            const contacts2 = await contacts.addContact({ name, email, phone });
            const allContacts1 = await contacts.listContacts();
        console.table(allContacts1);
        break;
      case "remove":
            const contacts3 = await contacts.removeContact(id);
            const allContacts2 = await contacts.listContacts();
            console.table(allContacts2)
        break;
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
}

//third variant
program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
    .option("-p, --phone <type>");


program.parse(process.argv);

const argv = program.opts();

invokeAction(argv)

//second variant
// invokeAction(argv)


//first variant
// const actionIndex = process.argv.indexOf("--action");

// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

// invokeAction(argv);