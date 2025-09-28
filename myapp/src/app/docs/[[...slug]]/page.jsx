import React from 'react'

const DocsPages = async ({params}) => {
  const urlParams = await params;
    const slug = urlParams.slug || [];
    return (
    <div>DocsPages
    {
        slug?.length > 0 ? (
      <p>Home &gt; {slug.join(' > ')}</p>

    ) : (
        <h1>Docs Home Page</h1>
    )
}
    </div>
  )
}

export default DocsPages