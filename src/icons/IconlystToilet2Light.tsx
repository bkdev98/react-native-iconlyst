import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet2Light = ({
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
      d="M8.372 21h7.257c2.537 0 4.116-1.791 4.116-4.325v-9.35C19.745 4.79 18.165 3 15.628 3H8.372C5.834 3 4.256 4.791 4.256 7.325v9.35C4.256 19.21 5.842 21 8.372 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.95 10.22a4.004 4.004 0 0 1 3.967-4.545 4.004 4.004 0 0 1 3.968 4.545l-.718 5.27a3.28 3.28 0 0 1-6.5 0z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9.482v-.077M12 9a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8M6.181 12H4.256m1.95 2.998h-1.95M6.19 9.003H4.256M19.745 12h-1.93m1.93 2.998h-1.954m1.954-5.995h-1.938"
    />
  </Svg>
);
export default IconlystToilet2Light;
