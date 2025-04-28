import Container from "./components/Container";
import Header from "./components/Header";
import Page from "./components/Page";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";

export default function Home() {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <Container>
          <Header />
          <Page>
            <Product />
          </Page>
        </Container>

      </div>

    </>
  )
}