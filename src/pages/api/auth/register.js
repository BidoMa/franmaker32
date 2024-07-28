import { supabase } from '../../../lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, name } = req.body;

    // Validar datos
    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Email, password, and name are required' });
    }

    // Crear un nuevo usuario en Supabase Auth
    const { user, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name
        }
      }
    });

    if (authError) {
      console.error('Error creating user in Supabase Auth:', authError);
      return res.status(500).json({ error: authError.message });
    }

    // Insertar información adicional del usuario en la tabla users
    const { data, error: insertError } = await supabase
      .from('users')
      .insert([{ id: user.id, email, name }]);

    if (insertError) {
      console.error('Error inserting user data into Supabase:', insertError);
      return res.status(500).json({ error: insertError.message });
    }

    return res.status(200).json({ message: 'User registered successfully' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
