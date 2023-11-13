import { Sequelize } from "sequelize";

async function connectToDB(dbURI) {
    console.log(`Connecting to DB: ${dbURI}`);

    const sequelize = new Sequelize(dbURI, {
        logging: console.log,
        define: {
            underscored: true,
            timestamps: false
        },
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false, // Set this to true in a production environment with valid certificates
            },
          },
    })

    try {
        await sequelize.authenticate()
        console.log('Connected to DB successfully');
    } catch (error) {
        console.error('Unable to connect to DB:', error)
    }

    return sequelize
}

export default connectToDB