export const type = 'currentItem';

export default function currentItem(current) {
    return {
        type,
        payload: current
    }
}