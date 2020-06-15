import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import '../src/styles/index.scss'

const styles: React.CSSProperties = {
    padding: '20px 40px'
}

const CenterDecorator = (storyFc: any) => <div style={styles}><h3>组件演示</h3>{ storyFc() }</div>
addDecorator(CenterDecorator)
addDecorator(withInfo)
addParameters({
    info: {
        inline: true,
        header: false
    }
})