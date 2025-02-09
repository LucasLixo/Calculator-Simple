import { StyleSheet } from 'react-native';

// Resources
import Colors from './Colors';

const Styles = StyleSheet.create({
    AreaView: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    ContainerView: {
        width: '100%',
        height: 'auto',
        paddingBottom: 10,
        flexDirection: 'column',
    },
    Hr: {
        width: '95%',
        marginHorizontal: 'auto',
        marginVertical: 5,
        borderBottomColor: Colors.gray.a,
        borderBottomWidth: 1,
    },
});

// Export
export default Styles;
