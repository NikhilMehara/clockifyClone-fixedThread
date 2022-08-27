import React from "react";
import Pay from "../Components/ArfCompo/Pay";
import Card from "../Components/ArfCompo/Card";
import DashboardNavbar from "../Components/DashboardNavbar";
import { SimpleGrid } from '@chakra-ui/react'

const Payment = () => {
  return (
    <div>
      <DashboardNavbar>
      <SimpleGrid columns={[1, 1, 2]} spacing='40px'>
        <Pay />
        <Card/>
      </SimpleGrid>
      </DashboardNavbar>
    </div>
  );
};

export default Payment;
