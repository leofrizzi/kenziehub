import { z } from "zod";

export const EditTechRequirements = z.object({
  status: z.string().nonempty("É necessário selecionar o nível!"),
});