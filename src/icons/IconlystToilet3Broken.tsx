import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet3Broken = ({
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
      d="M12 21h3.629c2.537 0 4.116-1.791 4.116-4.325v-9.35C19.745 4.79 18.165 3 15.628 3H8.372C5.834 3 4.256 4.791 4.256 7.325v9.35C4.256 19.21 5.842 21 8.372 21h.415"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.972 15.192a3 3 0 0 1-5.943 0l-.657-4.82a3.662 3.662 0 1 1 7.257 0l-.273 2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.002 9.681v-.077m0-.405a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8M6.254 9.813v3.834M17.738 9.813v3.834"
    />
  </Svg>
);
export default IconlystToilet3Broken;
