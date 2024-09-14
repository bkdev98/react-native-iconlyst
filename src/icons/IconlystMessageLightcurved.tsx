import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageLightcurved = ({
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
      d="M17.545 9.019s-3.21 3.853-5.558 3.853-5.593-3.853-5.593-3.853"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.452 11.969c0-6.838 2.381-9.117 9.524-9.117S21.5 5.13 21.5 11.969c0 6.837-2.381 9.117-9.524 9.117s-9.524-2.28-9.524-9.117"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageLightcurved;
