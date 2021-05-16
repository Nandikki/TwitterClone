import React from 'react'
import {Container, Header, BackIcon, ProfileInfo, Button} from './styles';

const Main = () => {
    return (
        <Container>
            <Header>
                <Button>
                    <BackIcon/>
                </Button>

                <ProfileInfo>
                    <strong>Abel Rodrigues</strong>
                    <span>95 Tweets</span>

                </ProfileInfo>
            </Header>
            {/*<ProfilePage/>*/ }
            {/*<BottomMenu>
                <HomeIcon/>
                <SearchIcon/>
                <BellIcon/>
                <EmailIcon/>
            </BottomMenu>*/}
        </Container>
    )
}

export default Main
