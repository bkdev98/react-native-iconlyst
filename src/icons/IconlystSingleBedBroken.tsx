import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSingleBedBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.135 17.838h6.696c.655 0 .983 0 1.246-.095a1.6 1.6 0 0 0 .963-.963c.095-.263.095-.59.095-1.246v-1.392c0-.656 0-.983-.095-1.246a1.6 1.6 0 0 0-.963-.964c-.263-.094-.59-.094-1.246-.094H5.439c-.656 0-.983 0-1.246.095a1.6 1.6 0 0 0-.964.963c-.094.263-.094.59-.094 1.246v1.392c0 .655 0 .983.094 1.246a1.6 1.6 0 0 0 .964.963c.263.095.59.095 1.246.095h3.348M18.92 11.827V6.76c0-.615 0-.922-.088-1.168a1.5 1.5 0 0 0-.903-.904c-.246-.088-.554-.088-1.168-.088h-4.616M5.349 11.827V6.76c0-.615 0-.922.088-1.168a1.5 1.5 0 0 1 .904-.904c.246-.088.553-.088 1.168-.088h2.337M5.349 19.4v-1.562M18.92 19.4v-1.562M15.635 11.807v-.903c0-.655 0-.983-.095-1.246a1.6 1.6 0 0 0-.963-.963c-.263-.095-.59-.095-1.246-.095h-2.392c-.656 0-.983 0-1.246.095a1.6 1.6 0 0 0-.964.963c-.094.263-.094.59-.094 1.246v.903"
    />
  </Svg>
);
export default IconlystSingleBedBroken;
