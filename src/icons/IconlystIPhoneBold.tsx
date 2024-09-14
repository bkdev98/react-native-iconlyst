import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIPhoneBold = ({
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
      fillRule="evenodd"
      d="M18.55 14.15a.3.3 0 0 0 .3-.3V6.599a4.103 4.103 0 0 0-4.1-4.099h-5.5a4.103 4.103 0 0 0-4.1 4.099v7.251a.3.3 0 0 0 .3.3zM12 19.27a.94.94 0 0 1-.95-.95c0-.544.502-.95.95-.95s.95.406.95.95-.502.95-.95.95m-6.55-3.62a.3.3 0 0 0-.3.3v1.45c0 2.26 1.839 4.1 4.1 4.1h5.5c2.26 0 4.1-1.84 4.1-4.1v-1.45a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIPhoneBold;
