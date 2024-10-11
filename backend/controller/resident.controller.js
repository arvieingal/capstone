// controllers/residentsController.js
import Resident from '../model/resident.model.js';

export const getResidents = async (req, res) => {
  try {
    const residents = await Resident.getResidents();
    res.json(residents);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching residents', error: err.message });
  }
};

export const getResidentById = async (req, res) => {
  const { id } = req.params;
  try {
    const resident = await Resident.getResidentById(id);
    if (resident) {
      res.json(resident);
    } else {
      res.status(404).json({ message: 'Resident not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching resident', error: err.message });
  }
};

export const addResident = async (req, res) => {
  const { full_name, sitio, birthdate, gender, age, email, category, contact_number } = req.body;
  try {
    const newResidentId = await Resident.addResident({
      full_name, sitio, birthdate, gender, age, email, category, contact_number
    });
    res.status(201).json({ id: newResidentId });
  } catch (err) {
    res.status(500).json({ message: 'Error adding resident', error: err.message });
  }
};

export const updateResident = async (req, res) => {
  const { id } = req.params;
  const { full_name, sitio, birthdate, gender, age, email, category, contact_number } = req.body;
  try {
    const updatedRows = await Resident.updateResident(id, {
      full_name, sitio, birthdate, gender, age, email, category, contact_number
    });
    if (updatedRows > 0) {
      res.json({ message: 'Resident updated successfully' });
    } else {
      res.status(404).json({ message: 'Resident not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error updating resident', error: err.message });
  }
};

export const deleteResident = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRows = await Resident.deleteResident(id);
    if (deletedRows > 0) {
      res.json({ message: 'Resident deleted successfully' });
    } else {
      res.status(404).json({ message: 'Resident not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting resident', error: err.message });
  }
};
