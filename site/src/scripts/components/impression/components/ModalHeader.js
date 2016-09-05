import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * ModalHeader组件.
 */
export default class ModalHeader extends PureComponent {
    // props校验
    static propTypes = {
        children: PropTypes.any,
        // 自定义样式
        className: PropTypes.string,
    }
    // 渲染
    render() {
        let { className, children, ...others } = this.props;

        return(
            <div {...others} className={classnames('modal-header', className)}>
                {children}
            </div>
        );
    }
}
