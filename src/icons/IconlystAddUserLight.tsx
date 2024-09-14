import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUserLight = ({
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
      d="M13.749 7.996a3.996 3.996 0 1 1-7.991 0 3.996 3.996 0 0 1 7.991 0M9.754 14.875c-3.376 0-6.255.51-6.255 2.553s2.863 2.571 6.255 2.571c3.373 0 6.254-.512 6.254-2.553 0-2.043-2.862-2.571-6.254-2.571"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.547 8.566v4.42m2.255-2.21h-4.508"
    />
  </Svg>
);
export default IconlystAddUserLight;
