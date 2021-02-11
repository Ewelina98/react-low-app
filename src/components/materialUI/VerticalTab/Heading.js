import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-500`;

export const HeadingTile = props => {
    return (
        <HeadingRow style={{marginBottom: 10}}>
            <Heading>{props.title}</Heading>
        </HeadingRow>
    );
};