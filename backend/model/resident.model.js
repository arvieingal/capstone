import { query } from '../config/db.js'; // Import the promisified query function

const Resident = {
  async getResidents() {
    const rows = await query('SELECT * FROM residents');
    return rows;
  },

  async getResidentById(id) {
    const rows = await query('SELECT * FROM residents WHERE id = ?', [id]);
    return rows[0];
  },

  async addResident(resident) {
    const { full_name, sitio, birthdate, gender, age, email, category, contact_number } = resident;
    const result = await query(
      'INSERT INTO residents (full_name, sitio, birthdate, gender, age, email, category, contact_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [full_name, sitio, birthdate, gender, age, email, category, contact_number]
    );
    return result.insertId;
  },

  async updateResident(id, resident) {
    const { full_name, sitio, birthdate, gender, age, email, category, contact_number } = resident;
    const result = await query(
      'UPDATE residents SET full_name = ?, sitio = ?, birthdate = ?, gender = ?, age = ?, email = ?, category = ?, contact_number = ? WHERE id = ?',
      [full_name, sitio, birthdate, gender, age, email, category, contact_number, id]
    );
    return result.affectedRows;
  },

  async deleteResident(id) {
    const result = await query('DELETE FROM residents WHERE id = ?', [id]);
    return result.affectedRows;
  }
};

export default Resident;
