const { SQLiteDB } = require('./models/connection');

async function getTask({params}, res) {
  try {
    const {id} = params;
    const task = await new Promise((resolve, reject) => {
      let item = {};
      SQLiteDB.each(
        `SELECT * from tasks WHERE id=${id}`, 
        (err, row) => {
        if (err) {
          reject(err);
        }
        item = row;
        },
        () => resolve(item),
      );
    })
    return(res.status(200).send(task));
  }
  catch(error) {
    console.log(error);
    return res.status(400).json(error);
  }
}

async function getTasks({query}, res) {
  try {
    const {page, limit} = query;
    const tasks = await new Promise((resolve, reject) => {
      const taskLists = [];
      SQLiteDB.each(
        `SELECT * FROM tasks LIMIT ${limit} OFFSET ${page*limit}`, 
        (err, row) => {
        if (err) {
          reject(err);
        }
        taskLists.push(row);
        },
        () => {
          resolve(taskLists);
        }
      );
    })
    return(res.status(200).send(tasks));
  }
  catch(error) {
    console.log(error);
    return res.status(400).json(error);
  }
}

async function addTask({body}, res) {
  try {
    const {title, description} = body;
    
    await new Promise((resolve, reject)=> {
      SQLiteDB.run(
      `INSERT INTO tasks (title, description) VALUES (?, ?)`, 
      [title, description],
      (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    })
  
    return(res.send("Add task success"));
  }
  catch(err) {
    logger.error(err);
    return res.status(400).json(err);
  }
}

async function updateTask({body, params}, res) {
  try {
    const { title, description } = body;
    const { id } = params;

    await new Promise((resolve, reject)=> {
      SQLiteDB.run(`UPDATE tasks SET title = ?, description = ? WHERE id = ?`,
      [title, description, id],
      (err) => {
        if (err) {
          reject (err);
        }
        resolve();
      });
    })
    return(res.send("Update task success!"));
  }
  catch(error) {
    console.log(error);
    return res.status(400).json(error);
  }
}

async function deleteTask({params}, res) {
  try {
    const { id } = params;
  
    await new Promise( (resolve, reject) => {
      SQLiteDB.run(`
      DELETE FROM tasks WHERE id = ?`,
      [id],
      (err) => {
        if (err) {
          reject (err);
        }
        resolve();
      });
    })

    return(res.send("Delete task success"))
  }
  catch(error) {
    console.log(error);
    return res.status(400).json(error);
  }
}

module.exports = {
  getTask,
  getTasks,
  addTask,
  updateTask,
  deleteTask,
}