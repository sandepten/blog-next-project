import prisma from "./prisma";

export const getAllContacts = async () => {
    const contacts = await prisma.contact.findMany({});
    return contacts;
};
export const createContact = async (name, email, phone, message) => {
    const contact = await prisma.contact.create({
        data: {
            name,
            email,
            phone,
            message,
        },
    });
    return contact;
};