'use client';
import React, { useEffect } from 'react';
import { Box, Container, Grid, Paper, Toolbar, Typography, Link } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchShipments } from '@/lib/actions/authActions';
import { CustomTable } from '@/components/CustomTable';
import { DashboardLayout } from '@/components/DashboardLayout';

const ShipmentsPage = () => {
  const dispatch = useAppDispatch();
  const shipments = useAppSelector((state) => state.auth.shipments);

  useEffect(() => {
    dispatch(fetchShipments());
  }, [dispatch]);

  const columns = [
    { id: 'shipmentNumber', label: 'Shipment Number' },
    { id: 'orderId', label: 'Order ID' },
    { id: 'carrier', label: 'Carrier' },
    { id: 'trackingNumber', label: 'Tracking Number' },
    { id: 'status', label: 'Status' },
    { id: 'shippedAt', label: 'Shipped At' },
    { id: 'deliveredAt', label: 'Delivered At' },
  ];

  const rows = shipments.map(shipment => ({
    shipmentNumber: shipment.shipmentNumber,
    orderId: shipment.orderId,
    carrier: shipment.carrier,
    trackingNumber: shipment.trackingNumber,
    status: shipment.status,
    shippedAt: shipment.shippedAt,
    deliveredAt: shipment.deliveredAt,
  }));

  return (
    <DashboardLayout>
      <Box component="main" sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}>
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <CustomTable columns={columns} rows={rows} />
              </Paper>
            </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}.
          </Typography>
        </Container>
      </Box>
    </DashboardLayout>
  );
};

export default ShipmentsPage;
