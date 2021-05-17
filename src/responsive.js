export const screenSizes = {
    mobile: 600,
    tablet: 1024,
    desktop: 1366
}

export const mediaQueries = {
    mobileQuery: `(max-width:${screenSizes.mobile}px)`,
    tabletQuery: `(max-width:${screenSizes.mobile}px) and (max-width: ${screenSizes.tablet})`,
    desktopQuery: `(max-width: ${screenSizes.tablet}px)`

}