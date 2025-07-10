const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Create Sequelize instance
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: `database/${process.env.DB_NAME}` || 'database/library_system.db',
    logging: console.log
});

// Define Book model
const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isbn: {
        type: DataTypes.STRING,
        unique: true
    },
    genre: {
        type: DataTypes.STRING
    },
    publishedYear: {
        type: DataTypes.INTEGER
    },
    available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

// Export for use in other files
module.exports = { sequelize, Book };

// Create database and tables
async function setupDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection to database established successfully.');
        
        await sequelize.sync({ force: true });
        console.log('Database and tables created successfully.');
        
        await sequelize.close();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// Run setup if this file is executed directly
if (require.main === module) {
    setupDatabase();
}