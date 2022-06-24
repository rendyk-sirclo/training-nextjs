import { avatars } from "@data/avatars";

export default function handler(req, res) {
  const { id } = req.query
  const avatar = avatars.find(avatar => avatar._id === id)

  if (avatar) {
    res.status(200).json(avatar)
  } else {
    // res.status(404).json({ error: `Avatar with id ${id} not found` })
    res.status(404).redirect("/404")
  }
}
