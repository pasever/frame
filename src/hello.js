function hello(to) {
    return _.template('Hello, <%= name %>!')({ name: to });
}