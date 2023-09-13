import { DataTypes, Model } from "sequelize";
import util from 'util'
import connectToDB from './db.js'

export const db = await connectToDB('postgresql:///natsite')

export class User extends Model {
    [util.inspect.custom]() {
      return this.toJSON();
    }
  }

  User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fname:{
            type: DataTypes.STRING,
            // allowNull: false,
        },
        lname:{
            type: DataTypes.STRING,
            // allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            // allowNull: false,
        },  
        phone:{
            type: DataTypes.STRING,
            // allowNull: false,
        },
        church:{
            type: DataTypes.STRING,
        },
        hashedPass:{
            type: DataTypes.STRING,

        },
        isAdmin: {
            type: DataTypes.BOOLEAN
        }

  },
  {
    modelName: 'user',
    sequelize: db
  }
)

export class VolunteerShift extends Model {
    [util.inspect.custom]() {
      return this.toJSON();
    }
  }

VolunteerShift.init(
    {
        shiftId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        shiftDate:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        shiftTimeRange:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        shiftType:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        modelName: 'volunteer_shift',
        sequelize: db
    }
)
export class Availability extends Model {
    [util.inspect.custom]() {
      return this.toJSON();
    }
  }

Availability.init(
    {
        availabilityId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId:{
            type: DataTypes.INTEGER,
        },
        shiftId:{
            type: DataTypes.INTEGER,
        },

    },
    {
        modelName: 'availability',
        sequelize: db
    }
)

export class Volunteer extends Model {
    [util.inspect.custom]() {
      return this.toJSON();
    }
  }

Volunteer.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fname:{
            type: DataTypes.STRING,
            // allowNull: false,
        },
        lname:{
            type: DataTypes.STRING,
            // allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            // allowNull: false,
        },  
        phone:{
            type: DataTypes.STRING,
            // allowNull: false,
        },
    },
    {
        modelName: 'volunteer',
        sequelize: db
    }
)    

Volunteer.hasMany(Availability, {foreignKey: 'userId' })
Availability.belongsTo(Volunteer, {foreignKey: 'userId'})

VolunteerShift.hasMany(Availability, {foreignKey: 'shiftId'})
Availability.belongsTo(VolunteerShift, {foreignKey: 'shiftId'})

User.hasOne(Volunteer, {foreignKey: 'userId'})
Volunteer.belongsTo(User, {foreignKey: 'userId'})