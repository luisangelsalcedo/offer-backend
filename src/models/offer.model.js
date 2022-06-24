import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";
import { Characteristic, Price } from "./index.js";

const Offer = sequelize.define("Offer", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// associations with characteristics
Offer.hasMany(Characteristic, {
  foreignKey: "offer_id",
  sourceKey: "id",
  as: "characteristics",
});
Characteristic.belongsTo(Offer);

// associations with prices
Offer.hasMany(Price, {
  foreignKey: "offer_id",
  sourceKey: "id",
  as: "prices",
});
Price.belongsTo(Offer);

// syncs
Offer.sync({ alter: true });
Characteristic.sync({ alter: true });
Price.sync({ alter: true });

// Async Methods
const createOfferAsync = async (req) => {
  const { body } = req;
  const offer = await Offer.create(body);
  return offer;
};

const findOfferAsync = async () => {
  const arr = await Offer.findAll({
    include: [
      { model: Characteristic, as: "characteristics" },
      { model: Price, as: "prices" },
    ],
  });
  return arr;
};

const findByPkOfferAsync = async (id) => {
  const offer = await Offer.findByPk(id, {
    include: [
      { model: Characteristic, as: "characteristics" },
      { model: Price, as: "prices" },
    ],
  });
  if (!offer) throw new Error("Offer not found");
  return offer;
};

const updateOfferAsync = async (req) => {
  const { offer, body } = req;
  const { id } = offer;
  const updated = await Offer.update(body, {
    where: { id },
  });
  if (updated) await offer.reload();
  return offer;
};

const deleteOfferAsync = async (req) => {
  const { offer } = req;
  const { id } = offer;
  const deleted = await Offer.destroy({
    truncate: {
      cascade: true,
    },
    where: { id },
  });
  if (!deleted) throw new Error("Offer was not removed");
  return offer;
};

const createCharacteristicAsync = async (req) => {
  const { offer, body } = req;
  const { id } = offer;
  const characteristic = await Characteristic.create({ ...body, offer_id: id });
  return characteristic;
};

const createPriceAsync = async (req) => {
  const { offer, body } = req;
  const { id } = offer;
  const price = await Price.create({ ...body, offer_id: id });
  return price;
};

export {
  Offer,
  createOfferAsync,
  findOfferAsync,
  findByPkOfferAsync,
  updateOfferAsync,
  deleteOfferAsync,
  createCharacteristicAsync,
  createPriceAsync,
};
