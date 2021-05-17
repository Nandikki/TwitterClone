import styled, {css} from 'styled-components';
import {LocationOn, Cake} from '../../styles/Icons';

export const Container = styled.div`
    diaplay: flex;
    flex-direction: column;

    max-height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Banner = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: min(33vw, 199px);
    background: var(--twitter);
    position: relative;

`;

export const Avatar = styled.div``;

const iconCSS = css`
    width: 20px;
    height: 20px;
    color: var(--gray);
`;

export const ProfileData = styled.div``;

export const LocationIcon = styled(LocationOn)`${(iconCSS)}`;

export const CakeIcon = styled(Cake)`${(iconCSS)}`;

export const Followage = styled.div`
`;

