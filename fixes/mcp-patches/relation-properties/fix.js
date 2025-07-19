// fix.js - Patch for MCP relation properties bug

/**
 * Patch the MCP server to correctly resolve relation properties.
 * This is a stub for demonstration; adapt to your MCP server's API.
 */
module.exports = async function patchRelationProperties(notionClient, page) {
  if (!page.properties) return page;
  for (const [key, prop] of Object.entries(page.properties)) {
    if (prop.type === 'relation' && Array.isArray(prop.relation)) {
      // Fetch related pages
      const related = await Promise.all(
        prop.relation.map(async rel => {
          return await notionClient.pages.retrieve({ page_id: rel.id });
        })
      );
      page.properties[key].related_pages = related;
    }
  }
  return page;
};
