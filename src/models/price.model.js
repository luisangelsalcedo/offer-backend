import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const Price = sequelize.define("Price", {
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
  price_value: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    validate: {
      notNull: { msg: "Insert a valid price" },
      notEmpty: { msg: "Price is not defined" },
    },
    set(value) {
      this.setDataValue("price_value", Number(value).toFixed(2));
    },
  },
});

const deletePriceAsync = async (req) => {
  const { params } = req;
  const { id } = params;

  const isDeleted = await Price.destroy({
    where: { id },
  });
  return { deleted: !!isDeleted };
};

export { Price, deletePriceAsync };
