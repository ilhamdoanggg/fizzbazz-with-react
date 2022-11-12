import * as React from 'react';
import Lottie from 'react-lottie';
// import {Dialog, Typography} from '@mui/material'
import { Dialog } from '@mui/material'
import { withStyles } from '@mui/styles'
import LoadingAnimation from 'assets/json/loading.json'
import style from './styles';
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const loadingDialog = (props) => {
    let dialog = (
        <Dialog
            hideBackdrop={true}
            id={props.id}
            open={props.open}
            type={props.type}
            style={{ width: '100%', }}>
            <Lottie options={defaultOptions} height={80} width={80} />
        </Dialog>
    );
    return <> {dialog} </>;
}
export default withStyles(style)(loadingDialog);
