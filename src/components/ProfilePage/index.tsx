import React from 'react'
import {
    Container, Banner, Avatar,
    ProfileData, LocationIcon,
    CakeIcon, Followage
} from './styles';
const ProfilePage = () => {
    return (
        <Container>
            <Banner>
                <Avatar/>
            </Banner>
            <ProfileData>
                {/*<EditButton outlined>Editar perfil</EditButton>*/}
                <h1>Abel Rodrigues</h1>
                <h2>@abelfbrodrigues</h2>

                <p>Software Engineering</p>

                <ul>
                    <li><LocationIcon/>Lisbon, Portugal</li>
                    <li>
                        <CakeIcon/>Nascido em 13 de Dezembro de 1999
                    </li>
                </ul>

                <Followage>
                    <span>seguindo  <strong>100</strong></span>
                    <span><strong>2000 </strong> seguidores</span>
                </Followage>
            </ProfileData>
        </Container>

    )
}

export default ProfilePage
