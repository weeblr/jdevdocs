//if (document.location.origin.endsWith('weeblr.com')) {
window.addEventListener("DOMContentLoaded", function (e) {
    var tagsList = ['h2', 'h3', 'h4']
    var tags = []
    tagsList.map(function (tag) {
        tags[tag] = document.getElementsByTagName(tag)
    })
    let current = document.location.origin + document.location.pathname + document.location.search
    let copyInput = document.createElement('input')
    copyInput.type = 'text'
    copyInput.id = 'wb-copy-input'
    copyInput.setAttribute('aria-hidden', true)
    copyInput.setAttribute('tabindex', -1)
    copyInput.classList.add('wb-sr-only')
    document.body.appendChild(copyInput)

    let copyLink = function (e) {
        e.preventDefault()
        e.stopPropagation()
        var copyEl = this
        copyInput.value = e.target.dataset.link
        copyInput.select()
        document.execCommand("copy")
        copyInput.value = ''
        copyEl.textContent = 'Copied!'
        setTimeout(function () {
            copyEl.textContent = 'Copy link'
        }, 3000)
        e.target.focus()
    }

    let processTag = function (tag) {
        if (!tag.id) {
            return
        }
        let copyEl = document.createElement('button')
        copyEl.textContent = 'Copy link'
        copyEl.dataset.link = current + '#' + tag.id
        copyEl.classList.add('wb-copy-link')
        copyEl.addEventListener("click", copyLink)
        tag.appendChild(copyEl)
    }
    tagsList.map(function (tag) {
        for (let i = 0; i < tags[tag].length; i++) {
            processTag(tags[tag][i])
        }
    })
})
window.addEventListener("DOMContentLoaded", function (e) {
    var tagsList = ['img']
    var tags = []
    tagsList.map(function (tag) {
        tags[tag] = document.getElementsByTagName(tag)
    })

    let onFocusImageEvent = function (e) {
        if (document.activeElement === e.target) {
            e.target.classList.add('wb-focused-image')
        } else {
            e.target.classList.remove('wb-focused-image')
            delete e.target.dataset.wbzoomed
        }
    }

    let onClickImage = function (e) {
        e.preventDefault()
        e.stopPropagation()
        if (document.activeElement === e.target) {
            if (e.target.dataset.wbzoomed === 'true') {
                e.target.classList.remove('wb-focused-image')
                delete e.target.dataset.wbzoomed
            } else {
                e.target.classList.add('wb-focused-image')
                e.target.dataset.wbzoomed = 'true'
            }
        }
    }

    let processTag = function (tag) {
        tag.setAttribute('tabindex', '0')
        tag.addEventListener("blur", onFocusImageEvent)
        tag.addEventListener("focus", onFocusImageEvent)
        tag.addEventListener("click", onClickImage)
    }
    tagsList.map(function (tag) {
        for (let i = 0; i < tags[tag].length; i++) {
            processTag(tags[tag][i])
        }
    })
})
// }
