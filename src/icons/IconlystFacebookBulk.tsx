import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFacebookBulk = ({
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
      d="M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.055 12.131h2.029a.75.75 0 0 0 0-1.5h-2.029v-.67c0-.717.583-1.3 1.299-1.3h.729a.75.75 0 0 0 0-1.5h-.729a2.804 2.804 0 0 0-2.799 2.8v.67h-.639a.75.75 0 0 0 0 1.5h.639v3.96a.75.75 0 0 0 1.5 0z"
    />
  </Svg>
);
export default IconlystFacebookBulk;
