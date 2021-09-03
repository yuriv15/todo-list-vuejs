
const ToDoList = {
    data() {
        return {
            list: [],
            newToDo: {
                done: false,
            }
        }
    },
    methods: {
        addItem: function () {
          if (this.newToDo.todo) {
              this.list.push(this.newToDo);
              this.newToDo = {
                  done: false,
              };
              localStorage.setItem("list", JSON.stringify(this.list));
          } else {
            alert("You need to write a new to-do in order to add");
          }
      },
        clearAll: function () {
          this.list = [];
          localStorage.clear();
        },
        removeItem: function (index) {
            if (index > -1) {
                this.list.splice(index, 1);
                localStorage.setItem("list", JSON.stringify(this.list));
            }
        }
    },
    created() {
        this.list = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : this.list;
    },
};

Vue.createApp(ToDoList).mount('#app');