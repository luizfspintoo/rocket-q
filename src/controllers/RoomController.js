const Database = require("../db/config");

module.exports = {
    //métodos
    async store(req, res) {
        const db = await Database();

        let roomId = "";
        let name = req.body.name;
        let pass = req.body.password;
        let isRoom = true;

        while (isRoom) {
            for (i = 0; i < 6; i++) {
                roomId += Math.floor(Math.random() * 10).toString();
            }

            let allRooms = await db.all("SELECT id FROM rooms");
            isRoom = allRooms.some(allRooms => allRooms == roomId);

            if (!isRoom) {
                await db.run(`INSERT INTO rooms (id, name, pass) VALUES(${roomId}, "${name}", ${pass})`);
            }

        }

        await db.close();

        return res.redirect(`/room/${roomId}`);
    },

    async index(req, res) {
        const db = await Database();

        const roomId = req.params.room;
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 0 ORDER BY id DESC`);
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 1 ORDER BY id DESC`);
        const isNotQuestion = questions.length == 0 ? true : false;

        return res.render("room", { roomId: roomId, questions: questions, questionsRead: questionsRead, isNotQuestion: isNotQuestion });
    },

    async access(req, res) {
        const db = await Database();
        const roomId = req.body.room;

        const roomRes = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`);

        if (roomRes) {
            return res.redirect(`/room/${roomId}`);
        }

        await db.close();
        return res.render("index", {
            page: "enter-room",
            erro: ["Sala não encontrada para o código informado."]
        });
    }
}