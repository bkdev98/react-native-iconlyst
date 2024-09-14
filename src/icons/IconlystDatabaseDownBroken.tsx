import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseDownBroken = ({
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
      strokeWidth={1.5}
      d="M11.614 2.979c-4.172 0-7.554 1.364-7.554 3.047s3.382 3.047 7.554 3.047 7.554-1.364 7.554-3.047c0-1.183-1.67-2.208-4.11-2.713"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.06 15.977v2.036s0 3.009 7.597 3.009M19.168 11.557V5.984M4.06 5.984V12s0 3.007 7.597 3.007M14.308 18.205l2.817 2.817 2.816-2.817M17.125 14.363v6.658"
    />
  </Svg>
);
export default IconlystDatabaseDownBroken;
