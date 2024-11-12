import { StyleSheet } from 'react-native';
import colors from '@/assets/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 10,
        color: colors.primary,
    },
    option: {
        fontSize: 20,
        padding: 10,
        color: colors.primary,
    },
    closeButton: {
        fontSize: 16,
        color: 'red',
        padding: 10,
        textAlign: 'center',
    },
    container2: {
        right: 10,
    },
    topContain: {
        height: 70,
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
    },
    sortContain: {
        height: 40,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    products: {
        flex: 10,
    },
    item: {
        flex: 1,
        margin: 5,
        backgroundColor: colors.background,
        padding: 20,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: "flex-start",
    },
    title: {
        fontSize: 14,
        justifyContent: "center",
        alignItems: "center",
        color: colors.darkgray,
    },
    brandTitle: {
        fontSize: 14,
        color: "#4535C1",
    },
    image: {
        width: 90,
        height: 40,
        marginRight: 10,
    },
    prodImage: {
        width: 200,
        height: 200,
    },
    priceTitle: {
        fontSize: 16,
        color: "red",
    },
    button: {
        height: 40,
        width: 160,
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    })
