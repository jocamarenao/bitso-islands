import GaugesView from './gauges-view'

const Gauges = ({ islands, filled, empty }) => {
    return (
        <GaugesView islands={islands} filled={filled} empty={empty} />
    );
}

export default Gauges;
