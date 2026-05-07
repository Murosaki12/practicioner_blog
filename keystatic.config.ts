import { config, collection, fields } from '@keystatic/core';
import { inline, wrapper } from '@keystatic/core/content-components';

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'Practicioner Blog' } },
  collections: {
    notes: collection({
      label: 'Notes',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        pubDate: fields.date({ label: 'Published' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        content: fields.mdx({
          label: 'Content',
          components: {
            Panel: wrapper({
              label: 'Panel',
              schema: {
                variant: fields.select({
                  label: 'Colour',
                  options: [
                    { label: 'Blue', value: 'blue' },
                    { label: 'Yellow', value: 'yellow' },
                    { label: 'Green', value: 'green' },
                    { label: 'Purple', value: 'purple' },
                    { label: 'Red', value: 'red' }
                  ],
                  defaultValue: 'blue'
                }),
                title: fields.text({ label: 'Title' })
              }
            }),
            Badge: inline({
              label: 'Badge',
              schema: {
                variant: fields.select({
                  label: 'Colour',
                  options: [
                    { label: 'Red', value: 'red' },
                    { label: 'Yellow', value: 'yellow' },
                    { label: 'Blue', value: 'blue' },
                    { label: 'Grey', value: 'grey' },
                    { label: 'Green', value: 'green' }
                  ],
                  defaultValue: 'blue'
                })
              }
            })
          }
        })
      }
    })
  }
});
