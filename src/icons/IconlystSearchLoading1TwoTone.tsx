import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLoading1TwoTone = ({
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
      d="M5.544 6.397a8.4 8.4 0 0 1 1.358-1.451M7.483 18.303a8.44 8.44 0 0 1-2.918-3.537M4.186 9.123a8.4 8.4 0 0 0-.279 2.837"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.464 19.63a8.4 8.4 0 0 0 2.473.181 8.37 8.37 0 0 0 4.562-1.766l.528-.462L21.45 21M20.08 14.608a8.3 8.3 0 0 0 .628-3.506 8.425 8.425 0 0 0-8.744-8.096"
    />
  </Svg>
);
export default IconlystSearchLoading1TwoTone;
