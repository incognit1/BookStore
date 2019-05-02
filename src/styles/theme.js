const base = {
    secondaryLight: '#eee',
    secondary: '#e9e9e9',
    secondaryDark: '#e4e4e4',
    textColor: '#414141',
    transparent: 'transparent',
    white: '#fff',
    bgColor: '#fafafa',
    bgColorDark: '#f5f5f5',
    borderGrey: '#ccc',
    lightDanger: '#ff4444',
    danger: '#e63e3e',
    dangerDark: '#b93434',
}

const blueTheme = {
    ...base,
    primaryExtraLight: '#deebff',
    primaryLight: '#2684ff',
    primary: '#237ce6',
    primaryDark: '#265db9',
}

const orangeTheme = {
    ...base,
    primaryExtraLight: '#ffd486',
    primaryLight: '#ffa003',
    primary: '#ff8c00',
    primaryDark: '#ff7a00',
}

export function getTheme (theme) {
    return theme === 'blue' ? blueTheme : orangeTheme
}
