import { Suspense } from "react";

import AppBar from "../AppBar";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
