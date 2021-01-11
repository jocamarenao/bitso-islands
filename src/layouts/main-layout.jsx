import { Layout } from 'antd';
import { ToolOutlined } from '@ant-design/icons';

import ControlRoom from '../components/control-room/control-room';
import styles from './main-layout-styles.module.css';
import useMyLittleWorld from './use-main-layout';
const { Header, Content, Footer } = Layout;

const MainLayout = ({
    children,
    width, setWidth,
    height, setHeight 
}) => {
    const {
        isControlRoomOpened,
        setControlRoomAccess,
    } = useMyLittleWorld();
    return (
        <Layout className={styles.layout}>
            <Header style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', alignSelf: 'center' }} className={styles.logo} onClick={() => setControlRoomAccess(prevState => !prevState)}>
                    <div style={{ display: 'flex', justifyContent: 'center' }} className={styles.logoContainer}>
                        <p>
                            Control Room
                            <ToolOutlined style={{ marginLeft: '5px', fontSize: '20px', color: '#08c' }} />
                        </p>
                    </div>
                </div>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className={styles['layout-content']}>
                    {children}
                    <Footer style={{ textAlign: 'center' }}>My Little World ©2021 Created by Jonatan Camarena</Footer>
                    <ControlRoom
                        setControlRoomAccess={setControlRoomAccess}
                        isControlRoomOpened={isControlRoomOpened}
                        width={width}
                        setWidth={setWidth}
                        height={height}
                        setHeight={setHeight}
                    />
                </div>
            </Content>
        </Layout>
    );
}

export default MainLayout;
