const { AppBar } = require('layout/common/AppBar/AppBar');
const { Outlet } = require('react-router-dom');

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
