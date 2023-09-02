//desc get all contacts
//route get/apicontacts
//access public

const getContact = (req, res) => {
    res.status(200).json({ message: "get all contacts" });
};


//desc create new contacts
//route post/api/contacts
//access public

const createContact = (req, res) => {
    res.status(201).json({ message: "create contacts" });
};

module.exports = { getContacts, createContact };
