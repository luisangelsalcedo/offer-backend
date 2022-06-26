import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const Characteristic = sequelize.define("Characteristic", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Insert a valid name" },
      notEmpty: { msg: "Name is not defined" },
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
});

const deleteCharacteristicAsync = async (req) => {
  const { params } = req;
  const { id } = params;

  const isDeleted = await Characteristic.destroy({
    where: { id },
  });
  return { deleted: !!isDeleted };
};

export { Characteristic, deleteCharacteristicAsync };
