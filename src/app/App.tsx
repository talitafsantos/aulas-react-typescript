import { ReactNode } from "react";
import { Routes } from "./routes";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import "dayjs/locale/pt-br"
import { UsuarioLogadoProvider } from "./shared/contexts";


interface ICustomLocalizationProps {
  children: ReactNode;
}

export const CustomLocalization:React.FC<ICustomLocalizationProps> = ({children}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">{children}</LocalizationProvider>
  );
};



export const App = () => {
  return (
  
    <div className="App">
      <UsuarioLogadoProvider>
        <Routes />
      </UsuarioLogadoProvider>
      
      <div>
        <CustomLocalization>
          <DatePicker />
        </CustomLocalization>
      </div>
    </div>
  );
}

