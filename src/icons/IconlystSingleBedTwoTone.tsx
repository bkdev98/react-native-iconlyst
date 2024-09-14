import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSingleBedTwoTone = ({
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
      d="M3.635 14.142c0-.656 0-.983.094-1.246a1.6 1.6 0 0 1 .964-.964c.263-.094.59-.094 1.246-.094H19.33c.655 0 .983 0 1.246.095a1.6 1.6 0 0 1 .963.963c.095.263.095.59.095 1.246v1.392c0 .655 0 .983-.095 1.246a1.6 1.6 0 0 1-.963.963c-.263.095-.59.095-1.246.095H5.939c-.656 0-.983 0-1.246-.095a1.6 1.6 0 0 1-.964-.963c-.094-.263-.094-.59-.094-1.246z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.421 19.4v-1.562m-13.571 0V19.4M19.421 11.838V6.904c0-.655 0-.983-.095-1.246a1.6 1.6 0 0 0-.963-.963c-.263-.095-.59-.095-1.246-.095H8.154c-.656 0-.984 0-1.246.095a1.6 1.6 0 0 0-.964.963c-.094.263-.094.59-.094 1.246v4.934"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.135 11.807v-.903c0-.655 0-.983-.095-1.246a1.6 1.6 0 0 0-.963-.963c-.263-.095-.59-.095-1.246-.095h-2.392c-.656 0-.983 0-1.246.095a1.6 1.6 0 0 0-.964.963c-.094.263-.094.59-.094 1.246v.903"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSingleBedTwoTone;
