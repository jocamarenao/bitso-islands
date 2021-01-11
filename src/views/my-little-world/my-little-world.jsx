import { Divider } from 'antd';
import MyLittleWorldView from './my-little-world-view';
import MainLayout from '../../layouts/main-layout';
import Gauges from '../../components/gauges/gauges';
import useMyLittleWorld from './use-my-little-world';


const MyLittleWorld = () => {
    const {
        width,
        setWidth,
        height,
        setHeight,
        myLittleWorld,
        filled,
        handleFilled,
        islands
    } = useMyLittleWorld();

    return (
        <MainLayout
            width={width}
            setWidth={setWidth}
            height={height}
            setHeight={setHeight}
        > 
            <Gauges 
                filled={filled.length}
                empty={width * height - filled.length}
                islands={islands}
            />
            <Divider />
            <MyLittleWorldView
                handleFilled={handleFilled}
                filled={filled}
                myLittleWorld={myLittleWorld} 
            />
        </MainLayout>
    );
}

export default MyLittleWorld;
