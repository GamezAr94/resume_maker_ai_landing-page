// src/app/actions.ts

'use server';

import { createClient } from '../utils/supabase/server';
import { z } from 'zod';

// On définit un type pour la réponse de notre action
export interface FormState {
    message: string;
    success: boolean;
}

export async function addToWaitlist(
    prevState: FormState,
    formData: FormData,
): Promise<FormState> {
    const supabase = await createClient();

    // 1. Validation de l'email avec Zod (très sécurisé)
    const emailSchema = z
        .string()
        .email({ message: 'Please enter a valid email address.' });
    const emailParseResult = emailSchema.safeParse(formData.get('email'));

    if (!emailParseResult.success) {
        return {
            message: emailParseResult.error.issues[0].message,
            success: false,
        };
    }

    const email = emailParseResult.data;

    // 2. Insertion dans la base de données Supabase
    const { error } = await supabase.from('waitlist').insert({ email: email });

    // 3. Gestion des erreurs (par exemple, si l'email existe déjà)
    if (error) {
        console.error('Supabase error:', error);
        // Le code '23505' est une erreur de contrainte unique (email dupliqué)
        if (error.code === '23505') {
            return {
                message: "You're already on the waitlist!",
                success: true, // C'est une "réussite" pour l'utilisateur
            };
        }
        return {
            message: 'An error occurred. Please try again.',
            success: false,
        };
    }

    // 4. Message de succès
    return {
        message: "Success! You're on the list. We'll be in touch soon.",
        success: true,
    };
}

// ... garde tes autres actions (signInAction, etc.) ici ...
