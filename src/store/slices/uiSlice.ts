import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  isMobileMenuOpen: boolean;
  activeCategory: string;
  searchDrawerOpen: boolean;
  quickViewProductId: string | null;
  notificationAlert: string | null;
}

const initialState: UiState = {
  isMobileMenuOpen: false,
  activeCategory: "All",
  searchDrawerOpen: false,
  quickViewProductId: null,
  notificationAlert: null,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
    setSearchDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.searchDrawerOpen = action.payload;
    },
    setQuickViewProductId: (state, action: PayloadAction<string | null>) => {
      state.quickViewProductId = action.payload;
    },
    setNotificationAlert: (state, action: PayloadAction<string | null>) => {
      state.notificationAlert = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  setMobileMenuOpen,
  setActiveCategory,
  setSearchDrawerOpen,
  setQuickViewProductId,
  setNotificationAlert,
} = uiSlice.actions;

export default uiSlice.reducer;
