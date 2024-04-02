export const isParentActive = (children, path) => {
    if (!children && !path) {
        return false;
    }
    return children.some((item) =>
        item.path === path
            ? true
            : item?.subMenu?.some((item2) => item2.path === path)
    );
};
