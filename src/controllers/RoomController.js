const Database = require("../db/config");

module.exports = {
    //métodos
    async store(req, res) {
        const db = await Database();

        let roomId = "";
        let pass = req.body.password;

        for(i = 0; i < 6; i++) {
            roomId += Math.floor(Math.random() * 10).toString();
        }

        await db.run(`INSERT INTO rooms (id, pass) VALUES(${roomId}, ${pass})`);
        await db.close();

        res.redirect(`/room/${roomId}`);
    }
}