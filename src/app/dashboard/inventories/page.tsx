'use client';
import React, { useEffect } from 'react';
import { Box, Container, Grid, Paper, Toolbar, Typography, Link } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchInventories } from '@/lib/actions/authActions';
import { CustomTable } from '@/components/CustomTable';
import { DashboardLayout } from '@/components/DashboardLayout';

const InventoriesPage = () => {
  const dispatch = useAppDispatch();
  const inventories = useAppSelector((state) => state.auth.inventories);

  useEffect(() => {
    dispatch(fetchInventories());
  }, [dispatch]);

  const columns = [
    { id: 'productId', label: 'Product ID' },
    { id: 'quantity', label: 'Quantity' },
    { id: 'location', label: 'Location' },
    { id: 'createdAt', label: 'Created At' },
  ];

  const rows = inventories.map((inventory) => ({
    productId: inventory.productId,
    quantity: inventory.quantity,
    location: inventory.location,
    createdAt: inventory.createdAt,
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

export default InventoriesPage;
