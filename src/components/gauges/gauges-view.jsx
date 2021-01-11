import { Card, Col, Row } from 'antd';

import styles from './styles.module.css'

const GaugesView = ({ islands=0, filled=0, empty=0 }) => {
    return (
        <div>
            <Row gutter={16}>
                <Col span={8}>
                    <Card className={styles['site-card-wrapper']} title="Islands" bordered={false}>
                        <h1>{islands}</h1>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className={styles['site-card-wrapper']} title="Filled" bordered={false}>
                        <h1>{filled}</h1>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className={styles['site-card-wrapper']} title="Empty" bordered={false}>
                        <h1>{empty}</h1>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default GaugesView;