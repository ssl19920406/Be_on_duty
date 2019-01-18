var AppDAO = require('../dao')
var dao = new AppDAO('../database.sqlite3')

class ProjectRepository {
    // omitting other methods

    constructor(dao) {
        this.dao = dao
    }

    createTable() {
        const sql = `
        CREATE TABLE IF NOT EXISTS projects (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT)`
        return this.dao.run(sql)
    }

    // 添加数据库
    create(name) {
        return dao.run(
            'INSERT INTO projects (name) VALUES (?)',
            [name])
    }

    // 更新数据库
    update(project) {
        const { id, name } = project
        return this.dao.run(
            `UPDATE projects SET name = ? WHERE id = ?`,
            [name, id]
        )
    }

    // 删除数据库
    delete(id) {
        return this.dao.run(
            `DELETE FROM projects WHERE id = ?`,
            [id]
        )
    }

    getById(id) {
        return this.dao.get(
            `SELECT * FROM projects WHERE id = ?`,
            [id])
    }

    getAll() {
        return this.dao.all(`SELECT * FROM projects`)
    }

    getTasks(projectId) {
        return this.dao.all(
            `SELECT * FROM tasks WHERE projectId = ?`,
            [projectId])
    }
}

module.exports = new ProjectRepository();