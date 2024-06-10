'use client';
import React, { useEffect } from 'react';
import { Box, Container, Grid, Paper, Toolbar, Typography, Link } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchProducts } from '@/lib/actions/authActions';
import { CustomTable } from '@/components/CustomTable';
import { DashboardLayout } from '@/components/DashboardLayout';

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.auth.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'description', label: 'Description' },
    { id: 'price', label: 'Price' },
    { id: 'category', label: 'Category' },
    { id: 'sku', label: 'SKU' },
    { id: 'suppliers', label: 'Suppliers' },
  ];

  const rows = products.map(product => ({
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    sku: product.sku,
    suppliers: product.suppliers,
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

export default ProductsPage;
