import prisma from "../../dbConnexion.js";

export const getAllDestination = async (req, res) => {
  try {
    const destination = await prisma.destination.findMany();
    res
      .status(200)
      .json({ message: "Liste des destinations", data: destination });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postDestination = async (req, res) => {
  const { nomVille, adresse } = req.body;

  if (!nomVille || !adresse) throw new Error("Vos donnees ne sont pas trouver");

  const destination = await prisma.destination.create({
    data: {
      nomVille,
      adresse,
    },
  });
  res.status(200).json({
    message: "Enregistrement effectue avec succe",
    data: destination,
  });
};

export const getOnedestination = async (req, res) => {
  try {
    const id = req.params.id;
    const destinationId = await prisma.destination.findFirst({
      where: {
        id: id,
      },
    });
    if (!destinationId) throw new Error("Destination introuvable");
    res.status(200).json({
      message: `Destination ${destinationId.nomVille}`,
      data: destinationId,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putDestination = async (req, res) => {
  try {
    const id = req.params.id;
    const destinationID = await prisma.destination.findFirst({
      where: {
        id: id,
      },
    });

    const appArray = Object.keys(destinationID);
    const bodyArray = Object.keys(req.body);

    if (!bodyArray.every((el) => appArray.includes(el)))
      throw new Error("Destionation non trouver");

    //Mise a jour de l'apprenant

    const newDestination = await prisma.destination.update({
      where: { id: id },
      data: { ...req.body },
    });

    res.status(200).json({
      message: "Modification effectuer avec succe",
      data: newDestination,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//Supprimer l'apprenant
//=====================

export const deleteDestination = async (req, res) => {
  try {
    const id = req.params.id;
    const destinationId = await prisma.destination.findFirst({
      where: {
        id: id,
      },
    });
    if (!destinationId) throw new Error("Destination introuvable");

    const deledestination = await prisma.destination.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      message: "suppression effectuer avec succe",
      data: deledestination,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
