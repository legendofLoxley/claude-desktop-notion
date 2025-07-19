// test.js - Test for MCP relation properties fix

const patchRelationProperties = require('./fix');

// Mock Notion client
const notionClient = {
  pages: {
    retrieve: async ({ page_id }) => ({ id: page_id, title: `Page ${page_id}` })
  }
};

(async () => {
  const page = {
    properties: {
      relationField: {
        type: 'relation',
        relation: [{ id: '1' }, { id: '2' }]
      }
    }
  };
  const patched = await patchRelationProperties(notionClient, page);
  console.log(JSON.stringify(patched, null, 2));
})();
