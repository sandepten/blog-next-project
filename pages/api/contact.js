import { createContact, getAllContacts } from "../../prisma/contact";

export default async function handle(req, res) {
    try {
        switch (req.method) {
            case "GET": {
                  const contacts = await getAllContacts();
                  return res.status(200).json(contacts);
              }
            case "POST": {
                const { name, email, phone, message } = req.body;
                const contact = await createContact(name, email, phone, message);
                return res.status(200).json(contact);
              }
        }
    }catch (error) {
        return res.status(500).json({ ...error, message: error.message });}
}