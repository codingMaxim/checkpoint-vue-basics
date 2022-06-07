Vue.createApp({
  data() {
    return {
      todos: [
        {
          description: "Learn Vue",
          done: false,
        },
        {
          description: "Learn Rest",
          done: true,
        },
      ],
      text: "",
      filterOption: "all",
    };
  },

  methods: {
    addTodo(description) {
      if (description.length > 3) {
        const newTodo = {
          description,
          done: false,
        };
        this.todos.push(newTodo);
        this.inputValue = "";
      }
    },
    deleteDoneTodos() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },

  computed: {
    filteredTodos() {
      if (this.filterOption === "all") {
        return this.todos;
      } else if (this.filterOption === "done") {
        return this.todos.filter((todo) => todo.done);
      } else if (this.filterOption === "open") {
        return this.todos.filter((todo) => !todo.done);
      }
    },
  },
}).mount("#app");
