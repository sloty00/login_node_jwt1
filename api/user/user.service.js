const pool = require('../../config/database');

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into registration(firstName, lastName, gender, email, password, number) 
            values(?, ?, ?, ?, ?, ?)`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (errors, result, fields) => {
                if (error) {
                    return callBack(errors);
                }
                return callBack(null, result);
            }
        );
    }
};