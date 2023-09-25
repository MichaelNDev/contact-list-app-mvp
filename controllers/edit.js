const ContactList = require("../models/contactlist")

module.exports = {
    getEdit: async(req,res) => {
        const id = req.params.id
        try {
            const contacts = await ContactList.find()
            res.render("edit.ejs", {contactList: contacts, idContact: id})
        } catch (err) {
            console.log("edit failed")
            if(err) return res.status(500).send(err)
        }
    },
    deleteItem: async(req,res) => {
        const id = req.params.id
        try {
            const result = await ContactList.findByIdAndDelete(id)
            console.log(result)
            res.redirect('back')
        } catch (err) {
            if (err) return res.status(500).send(err)
            res.redirect('/')
        }
    },
    updateItem: async(req,res) => {
        const id = req.params.id
        try{
            await ContactList.findByIdAndUpdate
            (
                id,
                {
                    nameinput: req.body.nameinput,
                    phoneinput: req.body.phoneinput,
                    emailinput: req.body.emailinput
                }
            )
            res.redirect('/')
        } catch(err) {
            if(err) return res.status(500).send(err)
            res.redirect('/')
        }
    }
}