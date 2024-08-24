// store/slices/localitySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocalityState {
    localityId: string | null;
}

const initialState: LocalityState = {
    localityId: null,
};

export const localitySlice = createSlice({
    name: 'locality',
    initialState,
    reducers: {
        setLocalityId: (state, action: PayloadAction<string | null>) => {
            state.localityId = action.payload;
        },
    },
});

export const { setLocalityId } = localitySlice.actions;
export default localitySlice.reducer;
