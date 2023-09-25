const ContactList = require("../models/contactlist")

module.exports = {
    getIndex: async(req,res) => {
        try {
            const contacts = await ContactList.find()
            res.render("index.ejs", {contactList: contacts})
        } catch (err) {
            if (err) return res.status(500).send(err)
        }
    },
    createContact: async(req,res) => {
        const newContact =  new ContactList(
            {
                nameinput: req.body.nameinput,
                phoneinput: req.body.phoneinput,
                emailinput: req.body.emailinput
            }
        )
        try {
            await newContact.save()
            console.log(newContact)
            res.redirect("/")
        } catch (err) {
            if (err) return res.status(500).send(err)
            res.redirect("/")
        }
    }
}