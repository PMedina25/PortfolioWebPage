import gql from 'graphql-tag';

export const FETCH_ORGANIZATIONS_QUERY = gql`
{
    getOrganizations {
        id
        name
        description
        type
        startDate
        endDate
        url
        image
    }
}
`;

export const FETCH_PROJECTS_QUERY = gql`
{
    getProjects {
        id
        title
        description
        category
        technologies
        startDate
        endDate
        url
        github
        image
    }
}
`;