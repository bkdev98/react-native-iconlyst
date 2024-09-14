import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapLeftHandLight = ({
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
      d="M5.259 12.69c-.904 2.44-.015 5.669 1.569 7.252 2.02 2.021 7.668 2.175 9.517-.125 1.174-1.459 2.086-3.23 2.66-4.816.309-.851-.144-1.769-.989-2.093a1.735 1.735 0 0 0-2.05.636l-1.135 1.647V6.087a1.587 1.587 0 0 0-3.174-.024l-.063 4.106c-2.221.212-5.437.097-6.335 2.521"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.983 9.5c1.087-.64 1.822-1.861 1.822-3.263 0-2.064-1.593-3.737-3.558-3.737S9.689 4.173 9.689 6.237c0 1.38.711 2.584 1.77 3.232"
    />
  </Svg>
);
export default IconlystTapLeftHandLight;
