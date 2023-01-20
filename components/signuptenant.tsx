import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/router";
import Autocomplete from "react-google-autocomplete";
import dynamic from 'next/dynamic';
import { toast } from "react-toastify";
import Textarea from "./bookings/textarea";
const ReactPasswordChecklist = dynamic(() => import('react-password-checklist'), {
    ssr: false,
});

interface SignupType {
    email: string;
    name: string;
    prename: string;
    birthday: string;
    password: string;
    password_confirm: string;
    quest1: string;
    quest2: string;
    quest3: string;
}
const SignupPageTenant = (props: any) => {
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const [formatted_address, setFormattedAddress] = useState("")
    const [place_id, setPlaceId] = useState("")

    const methods = useForm<SignupType>({ mode: "onBlur" });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;
    const { signUpAsTenant } = useAuth();
    const router = useRouter();

    const onSubmit = async (data: SignupType) => {
        try {
            await signUpAsTenant(data.email, data.password, data.name, data.prename, data.birthday, formatted_address, place_id, data.quest1);
            toast.success("Erfolgreich registriert");
            if (props.site) {
                router.push("/")
            }
        } catch (error: any) {
            console.log(error.message);
            toast.error("Fehler bei der Registrierung");
        }
    };

    return (
        <div className="grid justify-items-center items-center">
            <FormProvider {...methods}>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <div>
                            <div className="relative mt-1 rounded-none shadow-sm">
                                <input
                                    type="text"
                                    {...register("name", { required: "Ihr Nachname wird zur Registrierung benötigt." })}
                                    id="name"
                                    className="block w-full rounded-none border-gray-300 pl-2 pr-12 focus:border-green-600 focus:ring-green-600 sm:text-sm transition"
                                    placeholder="Name"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="relative mt-1 rounded-none shadow-sm">
                                <input
                                    type="text"
                                    {...register("prename", { required: "Ihr Vorname wird zur Registrierung benötigt." })}
                                    id="prename"
                                    className="block w-full rounded-none border-gray-300 pl-2 pr-12 focus:border-green-600 focus:ring-green-600 sm:text-sm transition"
                                    placeholder="Vorname"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="relative mt-1 rounded-none shadow-sm">
                                <input
                                    type="date"
                                    {...register("birthday", { required: "Ihr Geburtsdatum wird zur Registrierung benötigt." })}
                                    id="birthday"
                                    className="block w-full rounded-none border-gray-300 pl-2 pr-12 focus:border-green-600 focus:ring-green-600 sm:text-sm transition"
                                    placeholder="Geburtsdatum"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="relative mt-1 rounded-none shadow-sm">
                                <input
                                    type="email"
                                    {...register("email", { required: "Ihre Email-Adresse wird zur Registrierung benötigt. An diese wird nach erfolgreicher Buchung eine Bestätigungsmail gesendet." })}
                                    id="email"
                                    className="block w-full rounded-none border-gray-300 pl-2 pr-12 focus:border-green-600 focus:ring-green-600 sm:text-sm transition"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="relative mt-1 rounded-none shadow-sm">
                                <Autocomplete apiKey={"AIzaSyCY17WLFDKPuYBIl3tzEQ0AWnQ9QFmEZwU"}
                                    id="address"
                                    onPlaceSelected={(place) => {
                                        setFormattedAddress(place.formatted_address)
                                        setPlaceId(place.place_id)
                                    }}
                                    options={{
                                        types: ['address'],//oder "street_address" weil ist bis jetzt ohne nr siehe https://developers.google.com/maps/documentation/places/web-service/autocomplete
                                        componentRestrictions: { country: "de" },
                                    }}
                                    className="block w-full ring-1 ring-gray-300 h-9 rounded-none border-gray-300 pl-2 pr-12 focus:border-green-600 focus:ring-green-600 sm:text-sm transition"
                                    placeholder="Rechnungsadresse"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="relative mt-1 rounded-none shadow-sm">
                                <input
                                    type="password"
                                    {...register("password", { required: "Ihr Passwort wird zur Registrierung benötigt." })}
                                    id="password1"
                                    className="block w-full rounded-none border-gray-300 pl-2 pr-12 focus:border-green-600 focus:ring-green-600 sm:text-sm transition"
                                    placeholder="Passwort"
                                    onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <div className="relative mt-1 rounded-none shadow-sm">
                                <input
                                    type="password"
                                    {...register("password_confirm", { required: "Verify your password", })}
                                    id="password2"
                                    className="block w-full rounded-none border-gray-300 pl-2 pr-12 focus:border-green-600 focus:ring-green-600 sm:text-sm transition"
                                    placeholder="Passwort wiederholen"
                                    onChange={e => setPasswordAgain(e.target.value)}
                                />
                            </div>
                        </div>
                        <ReactPasswordChecklist
                            rules={["minLength", "specialChar", "number", "capital", "match"]}
                            minLength={8}
                            value={password}
                            valueAgain={passwordAgain}
                            onChange={(isValid) => { }}
                            messages={{
                                minLength: "Das Passwort muss mindestens 8 Zeichen lang sein.",
                                specialChar: "Das Passwort muss mindestens ein Sonderzeichen enthalten.",
                                number: "Das Passwort muss mindestenes eine Zahl enthalten.",
                                capital: "Das Passwort muss mindestens einen Großbuchstaben enthalten.",
                                match: "Die Passwörter müssen übereinstimmen.",
                            }}
                        />
                    </div>
                    <div>
                            <div className="relative mt-1 rounded-none shadow-sm">
                                <div>
                                    <textarea 
                                        rows={4}
                                        {...register("quest1", { required: "Die Frage muss beantwortet werden" })}
                                        name="quest1"
                                        id="quest1"
                                        className="form-input block w-full sm:text-sm border-gray-300"
                                        placeholder="Frage 1"
                                        defaultValue={''}/>
                                </div>                            
                            </div>
                        </div>
                        <div>
                            <div className="relative mt-1 rounded-none shadow-sm">
                                <div>
                                    <textarea 
                                        rows={4}
                                        {...register("quest2", { required: "Die Frage muss beantwortet werden" })}
                                        name="quest2"
                                        id="quest2"
                                        className="form-input block w-full sm:text-sm border-gray-300"
                                        placeholder="Frage 2"
                                        defaultValue={''}/>
                                </div>                            
                            </div>
                        </div>
                        <div>
                            <div className="relative mt-1 rounded-none shadow-sm">
                                <div>
                                    <textarea 
                                        rows={4}
                                        {...register("quest3", { required: "Die Frage muss beantwortet werden" })}
                                        name="quest3"
                                        id="quest3"
                                        className="form-input block w-full sm:text-sm border-gray-300"
                                        placeholder="Frage 3"
                                        defaultValue={''}/>
                                </div>                            
                            </div>
                        </div>
                    <div className="mt-2">
                        <button id="btnLogin" type="submit" className='w-full text-white px-4 py-2 text-base font-medium rounded-none bg-green-600 hover:bg-green-500 transition'>
                            Als Mieter Registrieren &rarr;
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default SignupPageTenant;