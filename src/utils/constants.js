
/**
 * Tabela com pesos de respostas baseadas no formulário do banco paulista
 */
module.exports = {
    suitability_table : [
        {
            b:2,
            c:3,
            d:4 
        },
        {
            b:2,
            c:4,
            d:5 
        },
        {
            b:1,
            c:2,
            d:4 
        },
        {
            b:2,
            c:4,
        },
        {
            b:2,
            c:4,
        },
        {
            b:2,
            c:3,
            d:4 
        },
        {
            b:2,
            c:3,
            d:4 
        }, 
        {
            a:1,
            b:2,
            c:4 
        },
        {
            a:1,
            b:2,
            c:4 
        }, 
        {
            b:1,
            c:2,
            d:4 
        },
        {
            b:1,
            c:2,
            d:4,
            e:5 
        },
    ],
    suitability_profile(points) {
        if(points <= 14){
            return {
                points,
                'profile': 'conservador'
            }
        }

        if(points >= 36){
            return {
                points,
                'profile': 'arrojado'
            }
        }

        return {
            points,
            'profile': 'moderado'
        }
    }
}

