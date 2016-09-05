import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * ButtonToolbar组件.
 */
export default class ButtonToolbar extends PureComponent {
    // prop type校验
    static propTypes = {
        children: PropTypes.any,
        // 自定义样式
        className: PropTypes.string,
    }
    // 渲染
    render() {
        let { className, children } = this.props;

        return (
            <div className={classnames('btn-toolbar', className)}>
                {children}
            </div>
        );
    }
}
