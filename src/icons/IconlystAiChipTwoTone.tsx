import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiChipTwoTone = ({
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
      d="M3.5 13.637h2.727M3.5 10.363h2.727M18.773 10.363h2.728M18.773 13.637h2.728"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.5 13.769c0 1.306.817 2.231 2.127 2.231h3.749c1.31 0 2.123-.925 2.123-2.231v-3.533C16.5 8.926 15.687 8 14.376 8h-3.748C9.32 8 8.5 8.926 8.5 10.236z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.863 3v2.727M14.136 3v2.727M10.863 18.273v2.728M14.136 18.273v2.728"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAiChipTwoTone;
