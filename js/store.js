let state = {
    selectedIndicator: 'country'
}

function action(type, params) {
    switch (type) {
        case 'setSelectedIndicator': 
            state.selectedIndicator = params
            break
    }

    update()
}