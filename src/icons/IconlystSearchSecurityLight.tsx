import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSecurityLight = ({
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
      d="M19.761 12.746A8.19 8.19 0 0 1 3.455 11.68a8.19 8.19 0 0 1 7.169-8.125M17.213 17.676 20.544 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.57 8.934s2.507-.76 2.507-2.853.091-2.026-.11-2.229S17.899 3 17.57 3c-.33 0-2.196.65-2.398.852s-.11.136-.11 2.23 2.508 2.852 2.508 2.852"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchSecurityLight;
