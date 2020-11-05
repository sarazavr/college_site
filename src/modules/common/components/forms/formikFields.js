import { createBaseFormAdaptor } from "../../utils/createFormikAdaptor";
import InputText from "./InputText";
import MaskedInput from "./MaskedInput";

export const FormikMaskedInput = createBaseFormAdaptor(MaskedInput);
 
export const FormikInput = createBaseFormAdaptor(InputText);
 
 
