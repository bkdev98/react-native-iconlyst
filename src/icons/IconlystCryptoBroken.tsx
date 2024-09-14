import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCryptoBroken = ({
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
      d="M9.87 14.663c-.158.008-.315.017-.483.017a5.83 5.83 0 0 1-5.823-5.823 5.8 5.8 0 0 1 1.41-3.799M15.194 9.34a5.821 5.821 0 0 0-5.806-6.306"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 15.144a5.821 5.821 0 1 0-11.645 0 5.822 5.822 0 0 0 9.693 4.35M3.5 16.363a5.83 5.83 0 0 0 3.804 4.317M21.28 7.47a5.83 5.83 0 0 0-3.803-4.318"
    />
  </Svg>
);
export default IconlystCryptoBroken;
