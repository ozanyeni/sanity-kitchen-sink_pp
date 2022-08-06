export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '62edbca9488b4a66a5a069d8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-pp-studio',
                  apiId: 'dd845657-7dfb-4f0c-86d2-11129d9a3e3a'
                },
                {
                  buildHookId: '62edbca913baf865b159fc0b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-pp',
                  apiId: 'c93f869e-7bc6-4150-8716-b69fe9add631'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ozanyeni/sanity-kitchen-sink_pp',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-pp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
