import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase";
import { useEffect, useReducer, useState } from "react";

import { FaCheck } from "react-icons/fa6";

enum ActionKind {
    SET_NAME = 'SET_NAME',
    SET_EMAIL = 'SET_EMAIL',
    SET_PHONE = 'SET_PHONE',
    SET_MESSAGE = 'SET_MESSAGE'
}

interface EmailContent {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface EmailAction {
    type: string;
    payload: string;
}

const reducer = (state: EmailContent, action: EmailAction): EmailContent => {
    switch(action.type) {
        case ActionKind.SET_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case ActionKind.SET_EMAIL: {
            return {
                ...state,
                email: action.payload
            }
        }
        case ActionKind.SET_PHONE: {
            return {
                ...state,
                phone: action.payload
            }
        }
        case ActionKind.SET_MESSAGE: {
            return {
                ...state,
                message: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

const EmailForm: React.FC = () => {

    const [isError, setError] = useState<boolean>(false);
    const [isSent, setSent] = useState<boolean>(false);
    const [messageBtnInfo, setMessageBtnInfo] = useState<JSX.Element | string>('Wyślij wiadomość');


    const [state, dispatch] = useReducer(reducer, {
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    useEffect(() => {
        setError((state.name && state.email && state.phone && state.message) ? false : true)
    }, [state.email, state.name, state.phone, state.message])


    const handleEmailSend = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
        event.preventDefault();

        setMessageBtnInfo(<span className="loading loading-spinner loading-sm"></span>);

        if(!isError) {
            const sendEmail = httpsCallable(functions, 'send_email');
            const response = await sendEmail(state);
            if(response.data == 200 || response.data == 202) {
                setMessageBtnInfo(<FaCheck/>);
                setSent(true);
            }
        }
    }

    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 rajdhani-regular">
                    <div className="rajdhani-bold uppercase text-center text-2xl mb-10">Napisz do nas</div>
                    <form action="#" className="space-y-4">
                    <div>
                        <label className="sr-only" htmlFor="name">Imię / Nazwa Firmy</label>
                        <input
                            className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                            placeholder="Imię / Nazwa firmy"
                            type="text"
                            id="name"
                            onChange={e => dispatch({type: ActionKind.SET_NAME, payload: e.target.value})}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                            placeholder="Email address"
                            type="email"
                            id="email"
                            onChange={e => dispatch({type: ActionKind.SET_EMAIL, payload: e.target.value})}
                            required
                        />
                        </div>

                        <div>
                        <label className="sr-only" htmlFor="phone">Numer Telefonu</label>
                        <input
                            className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                            placeholder="Numer Telefonu"
                            type="tel"
                            id="phone"
                            onChange={e => dispatch({type: ActionKind.SET_PHONE, payload: e.target.value})}
                            required
                        />
                        </div>
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="message"></label>

                        <textarea
                            className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                            placeholder="Wiadomość"
                            rows={8}
                            id="message"
                            onChange={e => dispatch({type: ActionKind.SET_MESSAGE, payload: e.target.value})}
                            required
                        ></textarea>
                    </div>

                    {
                        (!(state.name || state.phone || state.message || state.email) || isError) ? 
                            <p className="text-red-700">Nie uzupełniono wszystkich pól formularza.</p> :
                            null
                    }

                    <div className="mt-4 text-right">
                        <button
                            type="submit"
                            onClick={event => handleEmailSend(event)}
                            className="inline-block w-full rounded-lg bg-estradex-blue px-16 py-3 text-center rajdhani-semibold text-white sm:w-auto hover:bg-gray-100 hover:text-estradex-blue btn"
                            disabled={isError || isSent}
                        >
                            { messageBtnInfo }
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default EmailForm;