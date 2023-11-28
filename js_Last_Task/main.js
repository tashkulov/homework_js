function getElement(identificator) { 
    return document.querySelector(identificator)
}

class Application {
    todolist = []
    form = getElement(".todo_form")
    input = getElement(".todo_form__input")
    btn = getElement(".todo_form__btn")
    list = getElement(".todo_list")
    toaster = getElement('.toaster')
    todoText = ""

    mainthings() {
        this.input.addEventListener("input", ({ target: { value } }) => {
            this.todoText = value
        })

        this.form.addEventListener("submit", (event) => {
            event.preventDefault()
            this.addfunction()
        })

        document.addEventListener("click", (event) => {
            const element = event.target
            if (element.classList.contains("btn_delete")) {
                const id = +element.getAttribute('id')
                this.deletefunction(id)
            }

            if (element.classList.contains("btn_edit")) {
                this.editfunction(element)
            }

            if (element.classList.contains('btn_completed')) {
                const id = +element.getAttribute('id')
                this.completedToDo(id)
            }
        })
    }

    addfunction() {
        if (!this.todoText.trim()) {
            this.toaster.innerText = 'empty'
            this.toaster.classList.remove("toaster_hide")
            setTimeout(() => {
                this.toaster.classList.add("toaster_hide")
            }, 3000)
            return
        }

        const newTodo = {
            title: this.todoText,
            isCompleted: false,
            id: Date.now()
        }

        this.todolist.unshift(newTodo)
        localStorage.setItem("todos", JSON.stringify(this.todolist))
        this.clear()
        this.render()
        this.input.focus()
    }

    deletefunction(id) {
        this.todolist = this.todolist.filter(todo => todo.id !== id)
        localStorage.setItem("todos", JSON.stringify(this.todolist))
        this.render()
    }

    editfunction(btn) {
        const listItem = btn.closest("li")
        const tasktext = listItem.querySelector("span").textContent.trim()
        const newInput = document.createElement('input')
        newInput.type = 'text'
        newInput.value = tasktext

        const newButton = document.createElement('button')
        newButton.innerHTML = 'save'
        newButton.onclick = () => {
            const newText = newInput.value.trim()
            if (newText) {
                listItem.querySelector("span").textContent = newText
                this.todolist = this.todolist.map(todo => {
                    return todo.id == btn.id ? { ...todo, title: newText } : todo
                })
                localStorage.setItem("todos", JSON.stringify(this.todolist))
            }
            listItem.style.display = "flex"
            this.list.removeChild(newInput)
            this.list.removeChild(newButton)
        }
        listItem.style.display = "none"
        listItem.before(newInput)
        listItem.before(newButton)
    }

    render() {
        this.list.innerText = ""
        this.todolist.forEach((todo) => {
            const li = document.createElement("li")

            li.innerHTML = `
                <input class="btn_completed" id="${todo.id}" type="checkbox"  ${todo.isCompleted ? "checked" : ""}/> 
                <span>${todo.title}</span> 
                <div> 
                    <button class="btn_delete" id="${todo.id}">DELETE</button> 
                    <button class="btn_edit" id="${todo.id}">EDIT</button> 
                </div>  
            `

            this.list.append(li)
        })
    }

    completedToDo(id) {
        this.todolist = this.todolist.map(todo => {
            return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        })
        localStorage.setItem("todos", JSON.stringify(this.todolist))
        this.render()
    }

    clear() {
        this.todoText = ""
        this.input.value = ""
    }
}

let app = new Application()
app.mainthings() 