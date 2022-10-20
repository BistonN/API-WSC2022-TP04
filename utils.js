const nodemon = require("nodemon");
const { env } = require("process");

exports.getApiConfig = () => {
const envNodemon = require('../nodemon.json');

    return {
        jwt_key: 'T7^f%ym0UUz8',
        url_dominio: 'http://localhost:3000',
        port: 3000,
        web_mysql_user: envNodemon.env.MYSQL_USER,
        web_mysql_password: envNodemon.env.MYSQL_PASSWORD,
        web_mysql_database: envNodemon.env.MYSQL_DATABASE,
        web_mysql_host: envNodemon.env.MYSQL_HOST,
        mysql_port: 3306
    };
}