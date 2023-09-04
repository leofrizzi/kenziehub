import { z } from "zod";

export const createTechRequirements = z.object({
    title: z.string().nonempty("É obrigatório digitar uma tech!"),
    status: z.string().nonempty("É obrigatório selecionar o nível da tech !"),
});