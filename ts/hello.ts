interface Profile {
  name: string;
}

interface Profile {
  age: number;
}

function greeting(profile: Profile) {
  return `My name is ${profile.name} , ${profile.age} year old`;
}

console.log(greeting({ name: "taro", age: 99 }));
