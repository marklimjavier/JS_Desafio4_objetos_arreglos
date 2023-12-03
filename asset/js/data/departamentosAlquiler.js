const departamentosAlquiler = [
    {
        nombre: 'Departamento Bella Vista',
        src: 'https://www.activa.cl/wp-content/uploads/2022/02/MG_2342-1-1536x1024.jpg',
        descripcion: 'Comodo departamento situacio en zona alta',
        ubicacion: 'Bellavista de la Florida',
        habitaciones: '2',
        costo: 360000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Departamento Provincial',
        src: 'https://planner5d.com/blog/content/images/size/w2000/2023/02/000037cd32d4a5c3f9e00e11a2e02650_6-2-1.jpeg',
        descripcion: 'Hermoso departamento moderno con acceso a metro y salida rapida a autopistas',
        ubicacion: 'Providencia',
        habitaciones: '3',
        costo: 460000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Departamento edificio Litoral',
        src: 'https://imgclasificados3.emol.com/Proyectos/imagenes//PR_FOTO_4464_1.jpg',
        descripcion: 'Hermoso departamento cerca de la costa',
        ubicacion: 'Concepcion',
        habitaciones: '3',
        costo: 520000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Departamento Lazo',
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/467002308.jpg?k=682748160c0484df6f8bb9f0f4b80462080aaf6016bc6e9572b25fd06651ba31&o=&hp=1',
        descripcion: 'Alquiler de departamento cerca de la plaza sin amoblar, ideal para diseñar vacaciones a largo plazo',
        ubicacion: 'Viña del mar',
        habitaciones: '3',
        costo: 240000,
        smoke: true,
        pets: true
    }
]

for (const depa of departamentosAlquiler) {
    console.log(`Nombre: ${depa.nombre}`);
    console.log(`Ubicacion: ${depa.ubicacion}`);
    console.log(`Costo: ${depa.costo}`);
}


export default departamentosAlquiler
