import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet2Broken = ({
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
      d="M8.371 3C5.834 3 4.256 4.791 4.256 7.325v9.35C4.256 19.21 5.842 21 8.37 21h7.258c2.536 0 4.115-1.791 4.115-4.325v-9.35C19.744 4.79 18.165 3 15.628 3h-3.933"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.917 18.327a3.28 3.28 0 0 1-3.25-2.837l-.717-5.27a4.004 4.004 0 0 1 3.967-4.544 4.004 4.004 0 0 1 3.968 4.544l-.718 5.27a3.27 3.27 0 0 1-1.037 1.979"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9.482v-.077M12 9a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8M6.181 12H4.256M6.206 15h-1.95M6.19 9.003H4.256M19.745 12h-1.93M19.746 15h-1.954m1.954-5.995h-1.938"
    />
  </Svg>
);
export default IconlystToilet2Broken;
