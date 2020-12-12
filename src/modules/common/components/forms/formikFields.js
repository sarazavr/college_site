
import { createBaseFormAdaptor } from "../../utils/createFormikAdaptor";
import InputSelect from "./InputSelect";
import InputSwitch from "./InputSwitch";
import InputText from "./InputText";
import MaskedInput from "./MaskedInput";



export const FormikMaskedInput = createBaseFormAdaptor(MaskedInput);
 
export const FormikInput = createBaseFormAdaptor(InputText);
 
 
export const FormikSwitch = createBaseFormAdaptor(InputSwitch);

export const FormikSelect = createBaseFormAdaptor(InputSelect);

