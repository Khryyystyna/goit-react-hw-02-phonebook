import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { ContactsItem } from "./ContactsItem";
import css from './Contacts.module.css'

export const ContactsList = ({contacts, onDelete}) => {
  return (
    <>
      <ul className={css.list}>
        <ContactsItem
          contacts={contacts}
          onDelete={onDelete} />
      </ul>
    </>
  );
};
            
       
