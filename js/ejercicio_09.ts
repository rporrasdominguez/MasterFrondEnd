//Read Books
//Crea una funcion isBookRead que reciba una lista de libros y un título
// y devuelva si se ha leído o no dicho libro.
//Un libro es un objeto con title como string y isRead como booleano.
//En caso de no existir el libro devolver false
//TIP Existe un método de Array.prototype que te ayudará a buscar segun un patron

interface book {
    title:String,
    isRead: boolean,
}

const books : book[]= [
    {
        title:'Harry Potter y la piedra filosofal',
        isRead: true,
    },
    {
        title:'Cancion de hielo y fuego',
        isRead: false,
    },
    {
        title:'Devastacion',
        isRead: true,
    },

]

function isBookRead(books:book[], titleToSearch: string)
{

    const resultado:book = books.find( book => book.title===titleToSearch);

    return (resultado) ? resultado.isRead : false;

}

console.log(isBookRead(books,'Devastacion'));