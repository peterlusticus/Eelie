import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import SignupPageTenant from "./signuptenant";
import SignupPageLandlord from "./signuplandlord";


interface LoginType {
    email: string;
    password: string;
}

const Login = (props: any) => {
    const methods = useForm<LoginType>({ mode: "onBlur" });

    const [showLogin, setShowLogin] = useState(true)
    const [showLandlord, setShowLandlord] = useState(true)

    const changeToSignup = () => {
        setShowLogin(!showLogin);
    }

    const changeToSignupLandlord = () => {
        setShowLogin(!showLogin);
        setShowLandlord(!showLandlord);
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

    const { logIn } = useAuth();
    const router = useRouter();

    const onSubmit = async (data: LoginType) => {
        try {
            await logIn(data.email, data.password);
            toast.success("Erfolgreich eingeloggt");
            if (props.site) {
                router.push("/")
            }
        } catch (error: any) {
            console.log(error.message);
            toast.error("Fehler beim Login");
        }
    };
    return (
        <div className="flex w-full justify-center">
            {showLogin ?
                <FormProvider {...methods}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <div>
                                <div className="relative mt-1 rounded-none shadow-sm">
                                    <input
                                        type="email"
                                        {...register("email", { required: "Email is required" })}
                                        id="email"
                                        className="block w-full rounded-none border-gray-300 pl-2 pr-12 focus:border-green-600 focus:ring-green-600 sm:text-sm transition"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="relative mt-1 rounded-none shadow-sm">
                                    <input
                                        type="password"
                                        {...register("password", { required: "Password is required" })}
                                        className="block w-full rounded-none border-gray-300 pl-2 pr-12 focus:border-green-600 focus:ring-green-600 sm:text-sm transition"
                                        placeholder="Passwort"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <button type="submit" id="btnLogin" className='button-primary'>
                                    Anmelden &rarr;
                                </button>
                                <button type="button" id="btnLogin" onClick={changeToSignup} className='button-secondary'>
                                    Als Vermieter Registrieren &rarr;
                                </button>
                                <button type="button" id="btnLogin" onClick={changeToSignupLandlord} className='button-secondary'>
                                    Als Mieter Registrieren &rarr;
                                </button>
                            </div>
                        </div>
                    </form>
                </FormProvider>

                :

                <div>
                    {showLandlord ?
                        <div className="flex flex-col space-y-2">
                            <SignupPageTenant site={props.site} />
                            {showLogin ? "" : <button className="button-secondary w-full" onClick={changeToSignupLandlord}>Login &rarr;</button>}
                        </div>

                        :

                        <div className="flex flex-col space-y-2">
                            <SignupPageLandlord site={props.site} />
                            {showLogin ? "" : <button className="button-secondary w-full" onClick={changeToSignup}>Login &rarr;</button>}
                        </div>}
                </div>

            }
        </div>
    );
};

export default Login;