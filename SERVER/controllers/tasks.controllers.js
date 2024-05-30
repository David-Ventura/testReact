import { pool } from "../db.js";







export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createAt ASC"
    );
    res.json(result);
    console.log(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//consulta sql con subconsultas
export const getUnionTablas = async (req, res) => {
  try {
    const [result] = await pool.query(`SELECT c.idexpediente_asociado, c.cod_cliente, c.numero_folio, c.nombres, c.dui, c.comentario, c.estado, c.idagencia, c.idrArchivero, c.idEstado_expediente,
    (SELECT(g.agencia) FROM agencia g WHERE g.idagencia = c.idagencia) as agencia,
    (SELECT(r.Archivero) FROM resguardo r WHERE r.idresguardo = c.idrArchivero) as archivero,
   (SELECT(r.idresguardo) FROM resguardo r WHERE r.idresguardo = c.idrArchivero) as idresguardo,
    (SELECT(g.gaveta) FROM resguardo g WHERE g.idresguardo = c.idrArchivero) as gaveta,
    (SELECT CONCAT(i.rango_inicial ,'-', i.rango_final) FROM resguardo i WHERE i.idresguardo = c.idrArchivero) rangos,
    (SELECT(e.estadoExpediente) FROM estadoExpediente e WHERE e.idestadoExpediente = c.idestado_expediente) as estadoExpediente
from expediente_asociado c where c.cod_cliente = 3 and idagencia=1 `);

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title, description) VALUES (?, ?)",
      [title, description]
    );
    res.json({
      id: result.insertId,
      title,
      description,
    });
    console.log(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const serveronline = async (eq, res)=>{
  try{
    res.status(200).json({ message: 'Servidor Online' });
  }catch(error){
    return res.status(400).json({message:error.message})
  }
}