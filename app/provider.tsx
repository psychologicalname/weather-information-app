'use client'

//redux
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';

const Provider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    )
}

export default Provider
