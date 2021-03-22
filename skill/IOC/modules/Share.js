import Share from 'path/to/Share'

export default {
    init(app) {
        app.share = new Share()
        app.setShare = data => app.share.setShare(data)
    }
}