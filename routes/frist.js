var express = require('express');
var router = express.Router();
// const ProjectRepository = require('../myNode/project_repository')
var TaskRepository = require('../myNode/task_repository')
var ProjectRepository = require('../myNode/project_repository')

// const projectRepo = new ProjectRepository(dao)


const tasks = [
    {name: 'lanka'},
    {name: 'xiaozhou'},
    {name: 'huxu'},
    {name: 'gwf'},
    {name: 'lijian'},
    {name: 'gyz'},
    {name: 'oyh'},
    {name: 'hyexin'},
    {name: 'xiaolei'},
    {name: 'wzw'}
]
// TaskRepository.createTable();
// tasks.forEach(i => {
//     console.log(i.name);
//     TaskRepository.create(i.name);
// })
// 查询所有
router.get('/getUser', function (req, res) {
    TaskRepository.getAll().then(
        success => {
            res.json(success);
        },
        error => {
            res.json(error);
        }
    )
})

// 查询某个
router.get('/search', function (req, res) {
    console.log(0, req.query.name);
    TaskRepository.getByName(req.query.name).then(
        success => {
            res.send(success);
        },
        error => {
            res.send(error);
        }
    )
})

// 删除某个
router.get('/delete', function (req, res) {
    console.log(2, req.query.id);
    TaskRepository.delete(req.query.id).then(
        success => {
            res.send(success);
        },
        error => {
            res.send(error);
        }
    )
})

// 修改某个
router.get('/update', function (req, res) {
    console.log(2222, req.query);
    TaskRepository.update(req.query).then(
        success => {
            res.send(success);
        },
        error => {
            res.send(error);
        }
    )
})

// 新增用户
router.get('/create', function (req, res) {
    TaskRepository.create(req.query.name).then(
        success => {
            res.send(success);
        },
        error => {
            res.send(error);
        }
    )
})

// 查询某个用户 根据id
router.get('/searchId', function (req, res) {
    TaskRepository.getByID(req.query.id).then(
        success => {
            res.send(success);
        },
        error => {
            res.send(error);
        }
    )
})
/* GET users listing. */
// router.get('/', function(req, res, next) {
//     console.log(111111);
//     next();
// }, function (req, res) {
//     res.send('第一个个人自定义页面');
// });


// const tasks = [
//     {
//         name: '张三',
//         isVacation: 1,
//         isSaturday: 0
//     },
//     {
//         name: '李四',
//         isVacation: 1,
//         isSaturday: 0
//     }
// ]
//
// const { name, description, isComplete } = tasks;
// taskRepo.create(name, description, isComplete);

module.exports = router;