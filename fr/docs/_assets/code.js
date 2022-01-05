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
// }
