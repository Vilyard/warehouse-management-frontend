"use client";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { loginRequest, fetchUsers } from "@/lib/actions/authActions";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, error, user, users } = useAppSelector(
    (state) => state.auth
  );

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Token exists in local storage:', localStorage.getItem('token'));
    dispatch(loginRequest(email, password));
  };

  const handleGetUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleLoginSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </Box>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleGetUsers}
          disabled={isLoading}
        >
          {isLoading ? "Loading Users..." : "Get Users"}
        </Button>
        <Box sx={{ mt: 3 }}>
          {users && users.length > 0 && (
            <Typography component="h2" variant="h6">
              Users:
            </Typography>
          )}
          {users &&
            users.map((user) => (
              <Typography key={user.id}>
                {user.name} - {user.email}
                {user.phone} - {user.address}
              </Typography>
            ))}
        </Box>
        {user && (
          <Typography color="primary" sx={{ mt: 2 }}>
            Welcome, {user.name}!
          </Typography>
        )}
      </Box>
    </Container>
  );
};
