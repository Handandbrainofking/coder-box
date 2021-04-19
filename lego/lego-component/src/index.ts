import LText from './components/LText'


const components = [
    LText
]

const install = (app: any) => {
    components.map(component => {
        app.use(component)
    })
}

export {
    install,
    LText
}

export default {
    install
}