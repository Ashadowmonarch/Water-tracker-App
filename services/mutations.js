import {
  registerUser,
  loginUser,
  setAuthToken,
  deleteProduct,
  updateProduct,
  postProduct,
} from "../services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function usePostProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postProduct,
    onMutate: () => {
      console.log("mutated");
    },
    onSuccess: () => {
      console.log("Sucess");
    },
    onError: () => {
      console.log("Error");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        return queryClient.invalidateQueries({ queryKey: ["allProducts"] });
      }
    },
  });
}

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ productId, data }) => updateProduct(productId, data),
    onSettled: async (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        queryClient.invalidateQueries({ queryKey: ["allProducts"] });
        queryClient.invalidateQueries({
          queryKey: ["singleProduct", variables.productId],
        });
      }
    },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ productId }) => deleteProduct(productId),
    onSettled: async (_, error, { productId }) => {
      if (error) {
        console.log(error);
      } else {
        queryClient.invalidateQueries({
          queryKey: ["allProducts"],
        });
        queryClient.invalidateQueries({
          queryKey: ["singleProduct", productId],
        });
      }
    },
  });
}

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser, // Explicitly defining the mutation function
    onSuccess: (data) => {
      console.log("User registered successfully:", data);
      // Handle successful registration (e.g., redirect, update state)
    },
    onError: (error) => {
      console.error("Registration failed:", error);
      // Handle registration error (e.g., show error message)
    },
  });
};

// UseMutation hook for logging in a user
export const useLoginUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("Login successful:", data);
      setAuthToken(data.access);
      // Invalidate queries or update state to reflect logged-in status
      queryClient.invalidateQueries(["user"]); // Example of invalidating user-related queries
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });

  return useMutation(loginUser, {
    onSuccess: (data) => {
      console.log("Login successful:", data);
      setAuthToken(data.access);
      // Invalidate queries or update state to reflect logged-in status
      queryClient.invalidateQueries(["user"]); // Example of invalidating user-related queries
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });
};
