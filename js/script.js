

/* MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
*/

const app = new Vue(

    {
        el: '#app',
        data: {
            newToDoComponent:'',
            toDoList: [
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
            }
        },
    }
)