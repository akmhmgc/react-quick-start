function greeting(profile) {
    return "My name is ".concat(profile.name, " , ").concat(profile.age, " year old");
}
console.log(greeting({ name: "taro", age: 99 }));
