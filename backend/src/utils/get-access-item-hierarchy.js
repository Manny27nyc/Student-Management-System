/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const getAccessItemHierarchy = (items) => {
    if (!items || items.length <= 0) return [];

    const parents = items.filter(item => !item.parent_path);
    const children = items.filter(item => item.parent_path);

    const sortedParents = parents.sort((a, b) => a.hierarchy_id - b.hierarchy_id);
    const sortedChildren = children.sort((a, b) => a.hierarchy_id - b.hierarchy_id);

    const result = sortedParents.map(parent => {
        const { parent_path, hierarchy_id, ...rest } = parent;
        return {
            ...rest,
            subMenus: sortedChildren
                .filter(child => child.parent_path === parent.path)
                .map(({ parent_path, hierarchy_id, icon, ...restChild }) => restChild)
        }
    });

    return result;
}

module.exports = {
    getAccessItemHierarchy
};