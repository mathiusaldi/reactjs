import { Provider } from "react-redux";
import Menu from "../components/Menu";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Menu/>
      <Component {...pageProps} isLogin={false} />
    </Provider>
  );
}

export default MyApp;
