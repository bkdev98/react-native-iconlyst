import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallRemoveTwoTone = ({
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
      d="M12.498 14.503c-4.447 0-2.38 3.391-5.21 3.392-2.73 0-3.788.511-3.788-2.947.043-.39-.676-3.862 8.998-3.864 9.674 0 8.96 3.47 9.002 3.86 0 3.468-1.058 2.948-3.788 2.948-2.83 0-.766-3.39-5.214-3.389"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.283 6.078h6.433"
    />
  </Svg>
);
export default IconlystPhoneCallRemoveTwoTone;
