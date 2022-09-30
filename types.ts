
import { ReactNode } from 'react';

export interface LayoutProps {
    children?: JSX.Element | JSX.Element[] | ReactNode | ReactNode[],
    title?: string,
}
