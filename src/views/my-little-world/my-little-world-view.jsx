import styles from './my-little-world.module.css'

const MyLittleWorldView = ({ 
    myLittleWorld,
    handleFilled,
    filled
}) => {
    return (
        <>
            {
                myLittleWorld.map((rows) => (
                    <div key={rows.rowKey} className={styles['flex-container']}>
                        {rows.column.map((columns) => (
                            <div
                                onClick={() => { 
                                    handleFilled(
                                        { 
                                            columnKey: columns.columnKey,
                                            xPosition: columns.xPosition,
                                            yPosition: columns.yPosition
                                        }
                                    ) 
                                }}
                                key={columns.columnKey}
                                style={{
                                    backgroundColor: `${filled.map(item => item.columnKey).includes(columns.columnKey) ? '#806559' : '#526E80'} `
                                }}
                                className={styles['flex-item']}
                            />
                        ))}
                    </div>
                ))
            }
    </>
    );
}

export default MyLittleWorldView;
