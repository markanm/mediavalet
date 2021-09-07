import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../shared/interfaces/Interfaces";
import { ContentWrapper, InfoLabel } from '../../shared/styles/Styles';
import ImageGrid from "../ImageGrid";
import PageHeader from "../PageHeader";

const Search: React.FC = () => {
    const { query } = useParams<{ query: string | undefined }>();
    const [data, setData] = useState<Data | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const getData = async () => {
        setLoading(true);
        if (!query || !query.length) {
            return;
        }

        const response = await fetch(`https://images-api.nasa.gov/search?q=${query}`);

        if (!response.ok) {
            // TODO: Error handling
            setLoading(false);
        }

        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [query]);

    return (
        <>
            <PageHeader />
            <ContentWrapper>
                {(!query || !query.length) ? (
                    <InfoLabel>Please enter search query!</InfoLabel>
                ) : loading ? (
                    <InfoLabel>Loading...</InfoLabel>
                ) : !data || !data.collection.items.length ? (
                    <InfoLabel>No results for '{query}'.</InfoLabel>
                ) : (
                    <ImageGrid data={data} />
                )}
            </ContentWrapper>
        </>
    )
}

export default Search;