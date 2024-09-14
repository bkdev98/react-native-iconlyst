import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoteBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M19.98 15.305c.95-.95 1.48-2.06 1.52-3.22.04-1.19-.43-2.31-1.38-3.25l-4.95-4.96c-1.9-1.89-4.5-1.83-6.48.14l-4.67 4.67c-1.98 1.98-2.03 4.59-.14 6.48l4.96 4.96c.92.92 2.01 1.38 3.11 1.38 1.16 0 2.34-.51 3.36-1.53z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.912 6.311a.75.75 0 0 1 0 1.061l-7.659 7.66a.75.75 0 0 1-1.06 0l-3.03-3.03a.75.75 0 1 1 1.061-1.06l2.499 2.498 7.129-7.129a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVoteBulk;
