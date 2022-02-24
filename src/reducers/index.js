export const initialState = {
    isLoggedIn: localStorage.getItem('profile') || false,
    user: null,
    links: []
}

export const reducer = (state, { type, data }) => {
    switch (type) {
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify(data))
            return {...state, isLoggedIn: localStorage.getItem('profile')}
        case 'LOGOUT':
            localStorage.clear()
            return {...initialState, isLoggedIn: false}
        case 'INDEX':
            return {...state, user: data.user, links: data.links}
        case 'ADD_LINK':
            return {...state, links: [...state.links, data]}
        case 'EDIT_LINK':
            return {...state, links: data}
        case 'DELETE_LINK':
            return {...state, links: state.links.filter(link => link !== data) }
        case 'EDIT_USER':
            return {...state, user: data }
        default:
            throw new Error(`${type} is an invalid action type`)
    }
}