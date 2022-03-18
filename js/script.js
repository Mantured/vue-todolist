

/* MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
*/

const app = new Vue(

    {
        el: '#app',
        data: {
            newToDoComponent: '',
            toDoList: [
                {
                    text: 'Fare to do list',
                    done: true,
                },
                {
                    text: 'Aggiungere Span',
                    done: false,
                },
                {
                    text: 'Fare to do list',
                    done: true,
                },
                {
                    text: 'Aggiungere Span',
                    done: false,
                },
                {
                    text: 'Fare to do list',
                    done: true,
                },
                {
                    text: 'Aggiungere Span',
                    done: false,
                },
            ],
        },
        methods: {
            /**
             *
             * @param {*} toDoContent argomento che l'utente inserirà nell'input, verrà poi aggiunto all'array come oggetto.
             */
            addContent(toDoContent) {
                if (toDoContent.trim() != '') {
                    const newToDoComponent = {
                        text: toDoContent.trim(),
                        done: false,
                    }
                    this.toDoList.push(newToDoComponent);
                    this.newToDoComponent = '';
                } else {
                    console.log('Nope');
                }
            },
            removeContent(toDoIndex) {
                (this.toDoList[toDoIndex] != undefined) ? this.toDoList.splice(toDoIndex, 1) : console.warn('Doble Nope');
            },
            itsDone(index) {
                if (this.toDoList[index].done == true) {
                    this.toDoList[index].done = false;
                } else {
                    this.toDoList[index].done = true;
                }
            }
        },

    }
)