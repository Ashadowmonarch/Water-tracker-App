import { postWaterDetail, deleteAllWater } from "./api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export function usePostWaterDetail() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postWaterDetail,
    onMutate: () => {},
    onSuccess: () => {},
    onError: () => {},
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        return queryClient.invalidateQueries({ queryKey: ["allWater"] });
      }
    },
  });
}

export function useDeleteAllWater() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAllWater,
    onMutate: () => {},
    onSuccess: () => {},
    onError: () => {},
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        return queryClient.invalidateQueries({ queryKey: ["allWater"] });
      }
    },
  });
}
