import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Store } from "../types/store";
import { createUserSlice } from "./user-slice";
import { createSocketSlice } from "./socket-slice";
import { createChatSlice } from "./chat-slice";


export const useStore = create<Store>()(immer((...a) => ({
  ...createUserSlice(...a),
  ...createSocketSlice(...a),
  ...createChatSlice(...a)
})))