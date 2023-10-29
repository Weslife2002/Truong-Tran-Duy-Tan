const { SQLiteDB } = require('./models/connection');

async function getTask({params}, res) {
  try {
    const {id} = params;
    const tasks = await new Promise((resolve, reject) => {

      SQLiteDB.each(
        `SELECT * from tasks WHERE id=${id}`, (err, row) => {
        if (err) {
          reject(err);
        }
        t
      });
    })
    return(res.status(200).send(row));
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
    
    SQLiteDB.run(
    `INSERT INTO tasks (title, description) VALUES (?, ?)`, 
    [title, description],
    (err) => {
      if (err) {
        logger.error('Error during insertion:', err);
        return res.status(500).send("Failed to add task");
      }
    });
  
    return(res.send("Add task success"))
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

    SQLiteDB.each(`
    UPDATE tasks
    SET title = ${title}, description = ${description}
    WHERE id=${id}
    `, (err, row) => {
      if (err) {
        throw (err);
      }
    });

    return(res.send("Update success!"));
  }
  catch(error) {
    console.log(error);
    return res.status(400).json(error);
  }
}

async function deleteTask({params}, res) {
  try {
    const { id } = params;
  
    SQLiteDB.each(`
    DELETE FROM tasks
    WHERE id = ${id}
    `, (err, row) => {
      if (err) {
        throw (err);
      }
    });

    return(res.send("Delete success"))
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