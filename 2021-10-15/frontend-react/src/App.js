import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import {Layout} from 'antd';
import Nav from "./components/Nav";

const {Header, Content, Footer} = Layout;

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Header>
        <Nav />
      </Header>
      <Content>       
        <Switch>
          <Route exact path="/" component={ShowMagic} />
          <Route exact path="/posts" component={Posts} />
        </Switch>
      </Content>
      <Footer>
        Footer
      </Footer>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
