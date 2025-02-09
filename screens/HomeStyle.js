import { StyleSheet } from 'react-native';

// Recursos
import Colors from '../hooks/Colors';

const HomeStyles = StyleSheet.create({
    Header: {
        width: '100%',
        height: 60,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.gray.d,
    },
    Container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    ContainerResults: {
        paddingHorizontal: 20,
        alignItems: 'flex-end',
        height: 120,
    },
    ContainerButtons: {
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
});

// Export
export default HomeStyles;