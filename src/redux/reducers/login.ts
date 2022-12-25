import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import WalletConnectProvider from '@walletconnect/web3-provider';

export interface CounterState {
    account: string | undefined;
    provider: WalletConnectProvider;
}

const initialState: CounterState = {
    account: undefined,
    provider: new WalletConnectProvider({
        rpc: {
            1337: 'https://ganache.ftisu.vn'
        }
    })
};

export const loginReducer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, accountData) => {
            state.account = accountData.payload;
        },
        logout: (state) => {
            state.account = undefined;
            // state.provider = new WalletConnectProvider({
            //     rpc: {
            //         1337: 'https://ganache.ftisu.vn'
            //     }
            // });
        }
    }
});

// Action creators are generated for each case reducer function
export const { login, logout } = loginReducer.actions;

export default loginReducer.reducer;
