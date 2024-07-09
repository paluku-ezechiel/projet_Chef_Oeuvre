import prisma from "../../dbConnexion.js";

export const getAllDriver = async (req, res) => {
  try {
    const driver = await prisma.driver.findMany();
    res.status(200).json({ message: "Liste des driver", data: driver });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postDriver = async (req, res) => {
  try {
    const { name, lastName, telephone } = req.body;

    if (!name || !lastName || !telephone)
      throw new Error("Vos donnees ne sont pas trouver");

    const driver = await prisma.driver.create({
      data: {
        name,
        lastName,
        telephone,
      },
    });
    res.status(200).json({
      message: "Enregistrement effecuer avec succe",
      data: driver,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getOnedriver = async (req, res) => {
  try {
    const id = req.params.id;
    const driverId = await prisma.driver.findFirst({
      where: {
        id: id,
      },
    });
    if (!driverId) throw new Error("Driver introuvable");
    res.status(200).json({
      message: `Driver ${driverId.name}`,
      data: driverId,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putDriver = async (req, res) => {
  try {
    const id = req.params.id;
    const driverID = await prisma.driver.findFirst({
      where: {
        id: id,
      },
    });

    const appArray = Object.keys(driverID);
    const bodyArray = Object.keys(req.body);

    if (!bodyArray.every((el) => appArray.includes(el)))
      throw new Error("Driver non trouver");

    //Mise a jour de l'apprenant

    const newDriver = await prisma.driver.update({
      where: { id: id },
      data: { ...req.body },
    });

    res.status(200).json({
      message: "Modification effectuer avec succe",
      data: newDriver,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Supprimer l'apprenant
//=====================

export const deleteDriver = async (req, res) => {
  try {
    const id = req.params.id;
    const driverId = await prisma.driver.findFirst({
      where: {
        id: id,
      },
    });
    if (!driverId) throw new Error("Driver introuvable");

    const deledriver = await prisma.driver.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      message: "suppression effectuer avec succe",
      data: deledriver,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
