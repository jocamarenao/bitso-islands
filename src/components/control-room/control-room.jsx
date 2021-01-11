import { Drawer } from 'antd';
import style from './control-drawer.module.css'
import { Divider, Row, Col, InputNumber } from 'antd';


const ControlRoom = ({
    isControlRoomOpened, setControlRoomAccess,
    width, setWidth,
    height, setHeight 
}) => {
    return (
        <div className={style['control-drawer']}>
            <Drawer
                title="Control Room"
                placement="right"
                closable={true}
                onClose={() => setControlRoomAccess(prevState => !prevState)}
                visible={isControlRoomOpened}
            >
                <h2>Size</h2>
                <Row>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 10, offset: 2 }}>
                        <p>Height</p>
                        <InputNumber
                            min={1}
                            max={1000}
                            value={height}
                            onChange={(value) => { setHeight(value) }} />
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 10, offset: 2 }}>
                        <p>Width</p>
                        <InputNumber
                            min={1}
                            max={1000}
                            value={width}
                            onChange={(value) => { setWidth(value) }} />
                    </Col>
                </Row>
                <Divider />
            </Drawer>
        </div>
    );
}

export default ControlRoom;
