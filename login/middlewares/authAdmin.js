const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const authAdmin = async (req, res, next) => {
    try {
        const user = await prisma.user.findUnique({ where: { Id: req.user.Id } })
        if (user.role !== "ADMIN") return res.status(400).json({ msg: "Admin resources access denied!" })
        next()
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = authAdmin