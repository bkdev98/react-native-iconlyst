import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToolsOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M14.533 4.405a2.19 2.19 0 0 0-3.096 0l-5.898 5.898a2.19 2.19 0 0 0 0 3.096l2.216 2.216a2.19 2.19 0 0 0 3.096 0l5.898-5.898a2.19 2.19 0 0 0 0-3.096zm-4.157-1.06a3.69 3.69 0 0 1 5.218 0l2.215 2.215a3.69 3.69 0 0 1 0 5.218l-5.898 5.898a3.69 3.69 0 0 1-5.217 0L4.478 14.46a3.69 3.69 0 0 1 0-5.218zM3.23 20.986a.75.75 0 0 1 .75-.75h4.372a.75.75 0 0 1 0 1.5H3.98a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.632 11.097a.75.75 0 0 1 1.06 0l5.259 5.258a2.66 2.66 0 0 1 0 3.76l-.702.703a2.66 2.66 0 0 1-3.761 0l-5.259-5.258a.75.75 0 0 1 1.061-1.061l5.258 5.258a1.16 1.16 0 0 0 1.64 0l.702-.702a1.16 1.16 0 0 0 0-1.64l-5.258-5.258a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystToolsOutline;
