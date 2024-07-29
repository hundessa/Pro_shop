import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: "hund serb",
        email: "hund@email.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: "Hunde Serb",
        email: "hundi@email.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
];

export default users;