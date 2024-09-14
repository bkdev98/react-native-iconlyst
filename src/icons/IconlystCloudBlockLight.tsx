import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudBlockLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.564 16.813A4.14 4.14 0 0 0 21 13.04c0-2.596-1.83-4.14-4.103-4.141C16.897 7.265 15.617 4 12 4S7.103 7.265 7.103 8.898C4.833 8.918 3 10.443 3 13.038c0 1.68 1 3.126 2.436 3.775"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.117 16.882a3.116 3.116 0 1 0-6.233 0 3.116 3.116 0 0 0 6.233 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.221 14.695-4.403 4.412"
    />
  </Svg>
);
export default IconlystCloudBlockLight;
