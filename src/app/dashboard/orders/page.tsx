'use client';
import React, { useEffect } from 'react';
import { Box, Container, Grid, Paper, Toolbar, Typography, Link } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchOrders } from '@/lib/actions/authActions'; 
import { CustomTable } from '@/components/CustomTable';
import { DashboardLayout } from '@/components/DashboardLayout';

const OrdersPage = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.auth.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const columns = [
    { id: 'orderNumber', label: 'Order Number' },
    { id: 'customerName', label: 'Customer Name' },
    { id: 'customerEmail', label: 'Customer Email' },
    { id: 'products', label: 'Products' },
    { id: 'totalAmount', label: 'Total Amount'},
    { id: 'status', label: 'Status'}
  ];

  const rows = orders.map(order => ({
    orderNumber: order.orderNumber,
    customerName: order.customerName,
    customerEmail: order.customerEmail,
    products: order.products,
    totalAmount: order.totalAmount,
    status: order.status
  }));
  
  // console.log(rows)
  console.log(orders)

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

export default OrdersPage;
