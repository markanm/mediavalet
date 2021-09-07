import React, { useEffect, useState } from "react";
import { Data } from "../../shared/interfaces/Interfaces";
import { ContentWrapper, InfoLabel } from '../../shared/styles/Styles';
import ImageGrid from "../ImageGrid";
import PageHeader from "../PageHeader";

const Recent: React.FC = () => {
    const [data, setData] = useState<Data | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const getData = async () => {
        setLoading(true);
        const response = await fetch(`https://images-assets.nasa.gov/recent.json`);

        if (!response.ok) {
            // TODO: Error handling
        }

        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <PageHeader />
            <ContentWrapper>
                {loading ? (
                    <InfoLabel>Loading...</InfoLabel>
                ) : (
                    <ImageGrid data={data} />
                )}
            </ContentWrapper>
        </>
    )
}

export default Recent;