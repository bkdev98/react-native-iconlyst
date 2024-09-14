import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapBroken = ({
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
      d="M13.915 21.373c-2.346.381-5.08-.086-6.26-1.556-1.174-1.459-2.086-3.23-2.66-4.816-.309-.851.143-1.769.988-2.093a1.736 1.736 0 0 1 2.05.635l1.136 1.648V6.087a1.586 1.586 0 0 1 3.174-.025l.063 4.106c2.221.213 5.437.098 6.335 2.522.904 2.44.015 5.668-1.569 7.252"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.016 9.5C7.93 8.861 7.194 7.639 7.194 6.237c0-2.064 1.593-3.737 3.558-3.737s3.558 1.673 3.558 3.737q-.001.452-.098.873"
    />
  </Svg>
);
export default IconlystTapBroken;
