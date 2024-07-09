import prisma from "../../dbConnexion.js";

export const getAllColis = async (req, res) => {
    try {
        const colis = await prisma.colis.findMany();
        res.status(200).json({ message: "Liste des colis", data: colis });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

export const postColis = async (req,res) => {
    const {
        
    } = req.body
    try {
        
    } catch (error) {
        
    }
}