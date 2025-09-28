const Database = require("../db/config");

module.exports = {
    //métodos
    async index(req, res) {
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password;

       const db = await Database();
       const roomVerify = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`);

       if(roomVerify.pass == password) {
            if(action == "delete") {
                await db.run(`DELETE FROM questions WHERE id = ${questionId}`);
            } else if(action == "check") {
                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`);
            }
       }

       await db.close();

       return res.redirect(`/room/${roomId}`);
    },

    async store(req, res) {
        const db = await Database();

        const question = req.body.question;
        const roomId = req.body.room;

        await db.run(`INSERT INTO questions(title, read, room) VALUES("${question}", 0, ${roomId})`);

       await db.close();

       return res.redirect(`/room/${roomId}`);
    }
}