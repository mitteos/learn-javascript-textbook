const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete";

// будет, т.к. константа не даст изменять себя, она берет ссылку на объект, который изменять можно
