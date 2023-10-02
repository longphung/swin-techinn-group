import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const useRegister = () => {
  const supabase = createClientComponentClient();

  return async ({
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    suburb,
  }) => {
    const registerResponse = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
        data: {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          suburb: suburb,
        },
      },
    });
    if (registerResponse.error) {
      throw registerResponse.error;
    }
    const { error } = await supabase.from("profiles").insert({
      id: registerResponse.data.user.id,
      first_name: firstName,
      last_name: lastName,
      dob: null,
      mobile: phoneNumber,
      sexual: null,
      suburb: suburb,
      is_admin: false,
    });
    if (error) {
      throw error;
    }
  };
};

export default useRegister;
