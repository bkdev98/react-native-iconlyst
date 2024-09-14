import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKettleBroken = ({
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
      d="m7.002 18.024-3.518-5.542 1.61-.751 2.575 2.61m6.09 6.624L8.899 21a1.6 1.6 0 0 1-1.595-1.386c-.108-.806-.276-1.616-.277-2.432-.002-1.532.56-3.032 1.506-4.23 2.123-2.694 5.937-3.435 8.863-1.564 2.267 1.451 3.186 3.888 2.996 6.502-.037.494-.1.984-.178 1.462-.137.857-.643 1.574-1.594 1.58l-1.43.018M14.982 9.103a1.224 1.224 0 1 0-2.447 0 1.224 1.224 0 0 0 2.447 0M8.215 13.367H19.34"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.49 9.513A6.515 6.515 0 0 1 14.003 3a6.515 6.515 0 0 1 6.513 6.513c0 1.268-.36 2.469-1.005 3.464l-.18.284"
    />
  </Svg>
);
export default IconlystKettleBroken;
