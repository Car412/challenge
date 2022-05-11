import {gql} from "@apollo/client";

const getCountries = gql `
query countries {
    countries{
        name
        capital
        continent{
            name
        }
        languages{
            name
        }
        emoji
        emojiU

    }
}
`;

export default getCountries;