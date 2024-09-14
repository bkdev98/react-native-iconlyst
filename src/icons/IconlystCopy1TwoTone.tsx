import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCopy1TwoTone = ({
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
      d="M15.165 5.473C14.936 3.997 13.873 3 12.271 3H7.074c-1.81 0-2.946 1.285-2.946 3.1v6.695c0 1.654.945 2.873 2.495 3.065"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.343 8.113h-5.195c-1.81 0-2.946 1.282-2.946 3.096v6.695c0 1.815 1.13 3.096 2.946 3.096h5.195c1.817 0 2.946-1.281 2.946-3.096V11.21c0-1.814-1.13-3.096-2.946-3.096"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCopy1TwoTone;
