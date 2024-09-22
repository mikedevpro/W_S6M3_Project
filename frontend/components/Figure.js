import React from 'react'
export default function Figure({ imageURL, caption }) {
    return (
        <figure>
            <img src={imageURL} />
            <figcaption>My favorite city taken on {caption}</figcaption>
        </figure>
    )
}
