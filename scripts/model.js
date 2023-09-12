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
            allowNull: false,
        },
        lname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },  
        phone:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        church:{
            type: DataTypes.STRING,
        },
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
        modelName: 'volunteer shift',
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

User.hasMany(Availability, {foreignKey: 'userId' })
Availability.belongsTo(User, {foreignKey: 'userId'})

VolunteerShift.hasMany(Availability, {foreignKey: 'shiftId'})
Availability.belongsTo(VolunteerShift, {foreignKey: 'shiftId'})