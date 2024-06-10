'use client';
import React, { useEffect } from 'react';
import { Box, Container, Grid, Paper, Toolbar, Typography, Link } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchSuppliers } from '@/lib/actions/authActions'; 
import { CustomTable } from '@/components/CustomTable';
import { DashboardLayout } from '@/components/DashboardLayout';

const SuppliersPage = () => {
  const dispatch = useAppDispatch();
  const suppliers = useAppSelector((state) => state.auth.suppliers);

  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch]);

  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'contactName', label: 'Contact Name' },
    { id: 'contactEmail', label: 'Contact Email' },
    { id: 'contactPhone', label: 'Contact Phone' },
  ];

  const rows = suppliers.map(supplier => ({
    name: supplier.name,
    contactName: supplier.contactName,
    contactEmail: supplier.contactEmail,
    contactPhone: supplier.contactPhone,
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

export default SuppliersPage;
