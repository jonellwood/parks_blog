import React from 'react'
import ArticleItem from './ArticleItem'

function ArticleList({articles}) {
    return (
        <div>
            {
                articles.map(
                    ({ node } , index) => {
                        return <ArticleItem
                            title = {node.title}
                            key = {index}
                            description = {node.description}
                            slug = {node.slug}
                            commentCount = "Some Random Number of"
                        />
                    }
                )
            }
        </div>
    )
}

export default ArticleList
