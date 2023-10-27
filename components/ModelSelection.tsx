'use client'
import React from 'react'
import Select from 'react-select'
import useSWR from 'swr'
const fetchModels = () => {
    return fetch('api/getEngines').then(res => res.json())
}
const ModelSelection = () => {
    const { data: models, isLoading} = useSWR('models', fetchModels)
    const {data: model, mutate: setModel} = useSWR('model', {
        fallbackData: 'gpt-3.5-turbo'
    })
    return (
    <div>
        <Select
        className='mt-2'
        // defaultValue={models}
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
            control: (state) => "bg-[#434654] border-[#434654]"

        }}
        options={models?.modelOptions}
        onChange={(e: any) => setModel(e.value)}
        />
    </div>
  )
}

export default ModelSelection