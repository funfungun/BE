//place.sql.js

export const getPlaceListByType = (type) => {
    const tableMap = {
        korean: 'korean',
        chinese: 'chinese',
        japanese: 'japanese',
        expert_cafe: 'expert_cafe',
        dessert_cafe: 'dessert_cafe',
        popup: 'popup',
    };
    const tableName = tableMap[type] || 'expert_cafe'; // 기본값은 expert_cafe 테이블
    return `SELECT * FROM ${tableName} ORDER BY rating DESC LIMIT 5;`;
};
