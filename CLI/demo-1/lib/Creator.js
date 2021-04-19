module.exports = class Creator extends EventEmitter {
    async create(cliOptions = {}, preset = null) {
        const isTestOrDebug = process.env.VUE_CLI_TEST || process.env.VUE_CLI_DEBUG;
        const {run , name, context, afterInvokeCbs, afterAnyInvokeCbs} = this
        if(!preset) {
            if(cliOptions.presets) {
                preset = await this.resolvePreset(cliOptions.preset, cliOptions.clone)
            } else if( cliOptions.default) {
                preset = defaults.presets.default
            } else if(cliOptions.inlinePreset) {
                try {
                    preset = JSON.parse(cliOptions.inlinePreset)
                } catch(e) {
                    error(
                        `CLI inline preset is not valid JSON: ${cliOptions.inlinePreset}`
                    )
                    exit(1)
                }
            } else {
                preset = await this.promptAndResolvePreset()
            }
        }
    }
    async promptAndResolvePreset(answers = null) {
        if(!answers) {
            await clearConsole(true) 
            answers = await inquirer.prompt(this.resolveFinalPrompts())
        }
        debugger('vue-cli:answers')(answers)
        if(
            answers.save &&
            answers.saveName &&
            savePreset(answers.saveName, preset)
        ) {
            log()
            log(
                ` Preset ${chalk.yellow(answers.saveName)} saved in ${chalk.yellow(
                    rcPath
                )}`
            )
        }
    }
    resolveFinalPrompt() {
        this.injectedPrompts.forEach((prompt)=> {
            const originalWhen = prompt.when || (()=> true)
            prompt.when = (answers) => {
                return isManualMode(answers) && originalWhen(answers)
            }
        })
        const prompts = [
            this.presetPrompt,
            this.featurePrompt,
            ...this.injectedPrompts,
            ...this.outroPrompts,
        ]
        debugger('vue-cli:prompts')(prompts)
        return prompts
    }
}

exports.saveOptions = toSave => {
    const options = Object.assign(cloneDeep(exports.loadOptions()), toSave)
    for(const key in options) {
        if(!(key in exports.defaults)) {
            delete options[key]
        }
    }
    cachedOptions = options
    try {
        fs.writeFileSync(rcPath, JSON.stringify(options, null, 2))
        return true
    } catch (e) {
        error(
            `Error saving preferences:` +
            `make sure you hace write access to ${rcPath}.\n` +
            `(${e.message})`
        )
    }
}

exports.savePreset = (name, preset) => {
    const presets = cloneDeep(exports.loadOtions().presets || {})
    presets[name] = preset
    return exports.saveOptions({presets})
}

const isManualMode = answers => answers.preset === '__manual__'

const featurePrompt = {
    name: 'features',
    when: isManualMode,
    type: 'checkbox',
    message: 'Check the features needed for your project',
    choices: [],
    pageSize: 10
}