var AppDAO = require('../dao')
var dao = new AppDAO('../database.sqlite3')

class TaskRepository {
    // omitting other methods

    constructor() {

    }

    createTable() {
        const sql = `
        CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        isComplete INTEGER DEFAULT 0,
        projectId INTEGER,
        CONSTRAINT tasks_fk_projectId FOREIGN KEY (projectId)
          REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE)`
        return dao.run(sql)
    }

    create(name) {
        return dao.run(
            `INSERT INTO tasks (name)
        VALUES (?)`,
            [name]
        )
    }

    update(task) {
        const id = task.id,
            description = task.description,
            name = task.name;
        return dao.run(
            `UPDATE tasks
              SET name = ?,
              description = ?
              WHERE id = ?`,
            [name, description, id]
        )
    }

    delete(id) {
        return dao.run(
            `DELETE FROM tasks WHERE id = ?`,
            [id]
        )
    }

    getByName(name) {
        return dao.get(
            `SELECT * FROM tasks WHERE name = ?`,
            [name])
    }

    getByID(id) {
        return dao.get(
            `SELECT * FROM tasks WHERE id = ?`,
            [id])
    }

    getAll() {
        return dao.all(`SELECT * FROM tasks`)
    }

}

module.exports = new TaskRepository();