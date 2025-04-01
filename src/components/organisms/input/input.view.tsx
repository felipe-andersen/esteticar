import { ChangeEventHandler, DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS, HTMLAttributes, HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";

type Props = {
    Input?: React.ReactNode
    edithBtnText?: string
    saveBtnText?: string
}

// interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
//     accept?: string | undefined;
//     alt?: string | undefined;
//     autoComplete?: HTMLInputAutoCompleteAttribute | undefined;
//     capture?: boolean | "user" | "environment" | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
//     checked?: boolean | undefined;
//     disabled?: boolean | undefined;
//     enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
//     form?: string | undefined;
//     formAction?:
//         | string
//         | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
//             keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
//         ]
//         | undefined;
//     formEncType?: string | undefined;
//     formMethod?: string | undefined;
//     formNoValidate?: boolean | undefined;
//     formTarget?: string | undefined;
//     height?: number | string | undefined;
//     list?: string | undefined;
//     max?: number | string | undefined;
//     maxLength?: number | undefined;
//     min?: number | string | undefined;
//     minLength?: number | undefined;
//     multiple?: boolean | undefined;
//     name?: string | undefined;
//     pattern?: string | undefined;
//     placeholder?: string | undefined;
//     readOnly?: boolean | undefined;
//     required?: boolean | undefined;
//     size?: number | undefined;
//     src?: string | undefined;
//     step?: number | string | undefined;
//     type?: HTMLInputTypeAttribute | undefined;
//     value?: string | readonly string[] | number | undefined;
//     width?: number | string | undefined;

//     onChange?: ChangeEventHandler<T> | undefined;
// }

function Comp() {
    return <div>dfd</div>
}
const obj = {
    edithBtnText: "Editar",
    saveBtnText: 'Salvar'
}

export default function Input({
    Input: Comp
}: Props) {
    return (
        <Input {...obj}/>
    )
}