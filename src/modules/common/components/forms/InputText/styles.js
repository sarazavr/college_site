import { makeStyles } from '@material-ui/styles';


export const useStyles = makeStyles ( {
    infoMessage: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoIcon: {
        color: '#666',
        fontSize: 15,
        cursor: 'pointer',
        '&:hover': {
            color: '#3399ff',
        },
    },
    inputHeight: {
        height: 44,
    },
    inputAutoHeight: {
        height: 'unset',
    },
});