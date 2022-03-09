const users = [
  {
    name: "Aufa",
    age: 22,
    major: "Frontend Engineer",
  },
  {
    name: "Isfa",
    age: 20,
    major: "Android Engineer",
  },
  {
    name: "Agung",
    age: 24,
    major: "Data Engineer",
  },
  {
    name: "Nurul",
    age: 24,
    major: "English",
  },
  {
    name: "Jaki",
    age: 27,
    major: "English",
  },
];

const formatUser = (title) => {
  return new Promise((resolve, reject) => {
    var user = []
    users.forEach(() => {
      users.map(({ name, age, major }) => {
        user += {
          name: `${title} ${name}`,
          age: age,
          major: major,
        };
      });
    });
    return resolve(user);
  }, 1000);
};

const findByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = users.find(function (user) {
        return user.name == name;
      });

      resolve(item);
    }, 1000);
  });
};

const filterByMajor = (major) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = users.filter(function (user) {
        return user.major == major;
      });
      resolve(item);
    }, 1000);
  });
};

const main = async () => {
  console.log(await formatUser("Mr/Mrs"));
  console.log(await findByName("Isfa"));
  console.log(await filterByMajor("Frontend Engineer"));
};

main();
