import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function FiestaInvitados() {
    const [invitados, setInvitados] = useState(["Roberto", "Maria", "Luis", "Ana", "Carlos"]);
    const [nuevoInvitado, setNuevoInvitado] = useState("");

    // Actualiza la lista tras cada cambio
    function actualizarLista(nuevaLista) {
        setInvitados(nuevaLista.map(nombre => nombre.toUpperCase()));
    }

    // Paso 1: Añadir Juani y Alex
    function añadirJuaniYAlex() {
        actualizarLista([...invitados, "Juani", "Alex"]);
    }

    // Paso 2: Añadir Marta
    function añadirMarta() {
        actualizarLista([...invitados, "Marta"]);
    }

    // Paso 3: Quitar a Roberto
    function quitarRoberto() {
        actualizarLista(invitados.filter(nombre => nombre.toUpperCase() !== "ROBERTO"));
    }

    // Paso 4: Añadir vecinos
    function añadirVecinos() {
        const vecinos = ["Laura", "Pablo", "Jorge", "Sara", "Isabel"];
        actualizarLista([...invitados, ...vecinos]);
    }

    // Buscar invitado
    function buscarInvitado(nombre) {
        if (invitados.includes(nombre.toUpperCase())) {
            alert(`${nombre} está en la lista.`);
        } else {
            alert(`${nombre} no está en la lista.`);
        }
    }

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Invitados Fiesta Este Finde 🎉</h1>
            <Card className="mb-4">
                <CardContent>
                    <ul>
                        {invitados.map((nombre, index) => (
                            <li key={index} className="text-lg">{nombre}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Button className="mr-2 mb-2" onClick={añadirJuaniYAlex}>Añadir Juani y Alex</Button>
            <Button className="mr-2 mb-2" onClick={añadirMarta}>Añadir Marta</Button>
            <Button className="mr-2 mb-2" onClick={quitarRoberto}>Quitar Roberto</Button>
            <Button className="mr-2 mb-2" onClick={añadirVecinos}>Añadir Vecinos</Button>
            <div className="mt-4">
                <input type="text" placeholder="Buscar invitado" className="mr-2 p-2 border rounded" value={nuevoInvitado} onChange={e => setNuevoInvitado(e.target.value)} />
                <Button onClick={() => buscarInvitado(nuevoInvitado)}>Buscar</Button>
            </div>
        </div>
    );
}
