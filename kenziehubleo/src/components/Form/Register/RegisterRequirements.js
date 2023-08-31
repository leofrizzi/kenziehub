import { z } from "zod";

export const registerRequirements = z
    .object({
        name: z.string().nonempty("O nome é obrigatório!"),
        email: z
            .string()
            .nonempty("O E-mail é obrigatório!")
            .email("Digite um email válido!"),
        password: z
            .string()
            .nonempty("A Senha é obrigatória!")
            .min(8, "Crie uma senha de no mínimo 8 caracteres!")
            .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula!")
            .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra minúscula!")
            .regex(/[0-9]+/, "É necessário conter pelo menos um número!")
            .regex(
                /[!@#$%^&*()\-=_+[\]{}|;:'",.<>/?]/,
                "É necessário pelo menos um caracter especial!"
            ),
        confirm_password: z.string().nonempty("Confirmar senha é obrigatório!"),
        bio: z.string().min(40, "No mínimo 40 caracteres!"),
        contact: z.string().nonempty("O número é obrigatório!"),
        course_module: z.string().nonempty("Selecionar um módulo é obrigatório!"),
    })
    .refine(({ password, confirm_password }) => password === confirm_password, {
        message: "As senhas não correspondem",
        path: ["confirm_password"],
    });