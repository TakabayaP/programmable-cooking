import React from 'react';

export default function Recipe({ params }: { params: { id: string } }) {
    return (
        <div>
            This is the recipe page for id: {params.id}
        </div>
    );
};
