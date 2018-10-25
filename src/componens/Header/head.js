import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

function showToast() {
    Toast.info('This is a toast tips !!!', 1);
}

function showToastNoMask() {
    Toast.info('Toast without mask !!!', 2, null, false);
}


class ToastExample extends React.Component {
    componentDidMount() {
        Toast.loading('Loading...', 30, () => {
            console.log('Load complete !!!');
        });

        setTimeout(() => {
            Toast.hide();
        }, 3000);
    }
    render() {
        return (
            <WingBlank>
                <WhiteSpace />
                <Button onClick={showToast}>text only</Button>
                <WhiteSpace />
                <Button onClick={showToastNoMask}>without mask</Button>
                <WhiteSpace />
            </WingBlank>
        );
    }
}

ReactDOM.render(<ToastExample />, mountNode);