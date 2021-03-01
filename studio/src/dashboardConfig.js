export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603d751f406f1e00c2f0df2d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-t-studio',
                  apiId: 'aba0f3dc-befb-4301-ac70-762fdc971a21'
                },
                {
                  buildHookId: '603d7520121661007b4a0407',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-t',
                  apiId: 'f25782a3-f491-466e-83c3-150c4530827f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/flowen/sanity-gatsby-blog-t',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-t.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
