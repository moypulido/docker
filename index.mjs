import express from 'express';
import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    estado: { type: String, required: true }
});

const Animal = mongoose.model('Animal', animalSchema);

const app = express()
app.use(express.json());

mongoose.connect('mongodb://moi:password@monguito:27017/miapp?authSource=admin')

// Crear (Create)
app.post('/crear', async (req, res) => {
    console.log('creando...');
    try {
        const animal = new Animal(req.body);
        await animal.save();
        return res.status(201).send(animal);
    } catch (err) {
        console.error('Error creating animal', err);
        return res.status(500).send('Internal Server Error');
    }
});

// Leer (Read)
app.get('/', async (_req, res) => {
    console.log('listado...');
    try {
        const animales = await Animal.find();
        return res.send(animales);
    } catch (err) {
        console.error('Error fetching animals', err);
        return res.status(500).send('Internal Server Error');
    }
});

app.get('/:id', async (req, res) => {
    console.log('listando uno...');
    try {
        const animal = await Animal.findById(req.params.id);
        if (!animal) return res.status(404).send('Animal not found');
        return res.send(animal);
    } catch (err) {
        console.error('Error fetching animal', err);
        return res.status(500).send('Internal Server Error');
    }
});

// Actualizar (Update)
app.put('/:id', async (req, res) => {
    console.log('actualizando...');
    try {
        const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!animal) return res.status(404).send('Animal not found');
        return res.send(animal);
    } catch (err) {
        console.error('Error updating animal', err);
        return res.status(500).send('Internal Server Error');
    }
});

// Borrar (Delete)
app.delete('/:id', async (req, res) => {
    console.log('borrando...');
    try {
        const animal = await Animal.findByIdAndDelete(req.params.id);
        if (!animal) return res.status(404).send('Animal not found');
        return res.send('Animal deleted');
    } catch (err) {
        console.error('Error deleting animal', err);
        return res.status(500).send('Internal Server Error');
    }
});


app.listen(3000, () => console.log('listenining...'))