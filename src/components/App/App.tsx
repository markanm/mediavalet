import { ThemeProvider as ThemeProviderMui } from '@material-ui/styles';
import { custom_theme, GlobalStyle } from "../../shared/styles/Styles";
import AppRouter from "../Router";

const App: React.FC = ({ children }) => {
  return (
    <>
      <ThemeProviderMui theme={custom_theme}>
        <GlobalStyle />
        <AppRouter>
          {children}
        </AppRouter>
      </ThemeProviderMui>
    </>
  );
}

export default App;
