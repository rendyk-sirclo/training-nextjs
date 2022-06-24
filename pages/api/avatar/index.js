import { avatars } from "@data/avatars";

export default function handler(req, res) {
  res.status(200).json(avatars)
}
