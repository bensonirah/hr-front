import { Outlet } from "react-router-dom";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import { SidebarContent } from "../components/SidebarContent";
import { MobileNav } from "../components/MobileNav";

export default function AdminDashboardLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box minH="100vh">
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
