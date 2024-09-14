import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTinderLight = ({
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
      d="M18.53 8.863c2.815 5.315.16 11.755-6.137 12.137-8.096 0-10.917-9.572-4.551-13.99 0 7.24 6.075.94 4.158-4.01 2.7.9 5.214 3.206 6.53 5.863"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTinderLight;
