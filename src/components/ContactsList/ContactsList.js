import { ContactsItem } from "./ContactsItem";


export const ContactsList = ({contacts}) => {
  return (
    <>
      <ul>
          <ContactsItem contacts={contacts}/>
      </ul>
    </>
  );
};
            
       
