import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudShieldTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.064 17.358a4.14 4.14 0 0 0 2.436-3.774c0-2.596-1.83-4.14-4.103-4.141 0-1.632-1.28-4.898-4.897-4.898S7.603 7.81 7.603 9.443c-2.27.02-4.103 1.545-4.103 4.14 0 1.68 1 3.126 2.436 3.775"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 20.02s3.03-.918 3.03-3.448c0-2.531.11-2.45-.133-2.694-.243-.247-2.5-1.032-2.898-1.032s-2.654.787-2.898 1.032c-.243.243-.132.163-.132 2.694 0 2.53 3.03 3.448 3.03 3.448"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudShieldTwoTone;
