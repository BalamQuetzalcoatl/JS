const defaultStore = [];

export default function reducer(state = defaultStore, {type, payload}) {
    switch (type) {
        case 'findSuggestions':
        {
            return [
                {
                    id: 1,
                    title: 'findSuggestions'
                }
            ]
        }
            
        default:
            return state;
    }
}