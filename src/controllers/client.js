import prisma from "../../dbConnexion.js";

export const getAllClient = async (req, res) => {
  try {
    const client = await prisma.client.findMany();
    res.status(200).json({ message: "Liste des clients", data: client });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOneClient = async (req, res) => {
  try {
    const id = req.params.id;
    const clientId = await prisma.client.findFirst({
      where: {
        id: id,
      },
    });

    if (!clientId) throw new Error("Client introuvable");
    res.status(200).json({
      message: `Client ${clientId.name} ${clientId.lastName}`,
      data: clientId,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postClient = async (req, res) => {
  const { name, lastName, telephone, email, adress } = req.body;

  if (!name || !lastName || !telephone || !email || !adress)
    throw new Error("Vos donnees ne sont pas trouver");

  const client = await prisma.client.create({
    data: {
      name,
      lastName,
      telephone,
      email,
      adress,
    },
  });

  res.status(200).json({
    message: "Enregistrement effectuer avec succe",
    data: client,
  });
};

export const putClient = async (req, res) => {
  try {
    const id = req.params.id;
    const clientID = await prisma.client.findFirst({
      where: {
        id: id,
      },
    });

    const appArray = Object.keys(clientID);
    const bodyArray = Object.keys(req.body);

    if (!bodyArray.every((el) => appArray.includes(el)))
      throw new Error("Client non trouver");

    //Mise a jour de l'apprenant

    const newClient = await prisma.client.update({
      where: { id: id },
      data: { ...req.body },
    });

    res.status(200).json({
      message: "Modification effectuer avec succe",
      data: newClient,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Supprimer l'apprenant
//=====================

export const deleteClient = async (req, res) => {
  try {
    const id = req.params.id;
    const clientId = await prisma.client.findFirst({
      where: {
        id: id,
      },
    });
    if (!clientId) throw new Error("Client introuvable");

    const deleClient = await prisma.client.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      message: "suppression effectuer avec succe",
      data: deleClient,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
