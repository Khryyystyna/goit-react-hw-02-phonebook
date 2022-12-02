export const ContactsItem = ({ contacts }) => {
    return (
        <>
            {contacts.map(({ id, name }) => (
                <li key={id}>
                    {name}
                </li>
            ))}
            </>
        )}