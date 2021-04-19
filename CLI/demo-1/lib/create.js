// create

module.exports = class Creator extends EventEmitter {
    constructor(name, context, promptModules) {
        super()
        this.name = name
        this.context =  process.env.VUE_CLI_CONTEXT = context
        const {presetPrompt, featurePrompt} = this.resolveIntroPrompts()
        this.presetPrompt = presetPrompt
        this.featurePrompt = featurePrompt

        this.putroPrompts = this.resolveOutroPrompts()
        this.injectedPrompts = []
        this.promptsCompleteCbs = []
        this.afterInvokeCbs = []
        this.afterAnyInvokeCbs = []

        this.run = this.run.bind(this)
        const promptAPI = new PromptModuleAPI(this)

        promptModules.forEach(m => m(promptAPI))
    }
}

class PromptModuleAPI {
    constructor(creator) {
        this.creator = creator
    }
    injectFeature(feature) {
        this.creator.featurePrompt.choices.push(feature)
    }
    injectPrompt(prompt) {
        this.creator.injectedPrompts.push(prompt)
    }
    injectOptionForPrompt(name,option) {
        this.creator.injectedPrompts.find(f => {
            return f.name === name
        })
        .choices.push(option)
    }
    onPromptComplete(cb) {
        this.creator.promptCompleteCbs.push(cb)
    }
}

const creator = new Creator('', cwd.get(), getPromptModules())

onCreationEvent = ({event}) => {
    process.set({
        id: PROGRESS_ID,status:event,info: null
    }, context)
}

creator.on('creation', onCreationEvent)

exports.getPromptModules = () => {
    return [
        'vueVersion',
        'babel',
        'typescript',
        'pwa',
        'router',
        'vuex',
        'cssPreprocessors',
        'linter',
        'unit',
        'e2e'
    ].map(file => require(`../promptModules/${file}`))
}

const CLI = cli => {
    cli.injectFeature({
        name: '',
        value: '',
        short: '',
        description: '',
        link: '',
        checked: true
    })
    cli.injectPrompt({
        name: '',
        when: answers => answers.features.includes(''),
        message: '',
        type: 'list',
        choices: [],
        default: '2'
    })
    cli.onPromptComplete((answers, options)=> {})
    cli.injectPrompt({
        name: 'vueVersion',
        when: answers => answers.features.includes('vueVersion'),
        message:'Choose a version of Vue.js that you want to start the project with ',
        type: 'list',
        choices: [
            {
                name: '2.x',
                value: '2',
            }, 
            {
                name: '3.x (preview)',
                value: '3'
            },
        ],
        default: '2'
    })
}