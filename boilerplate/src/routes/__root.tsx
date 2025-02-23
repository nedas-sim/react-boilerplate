import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

const RootComponent = () => {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};
