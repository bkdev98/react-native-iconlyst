import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSilentBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd">
      <Path d="M6.185 14.205C-.246 6.918 2.97 4.74 3.254 4.385c3.069-3.112 3.545-1.695 5.956.752 2.03 2.07-.602 3.058.477 5.516zM12.09 13.382c3.28 2.694 4.206-1.159 6.53 1.202 2.396 2.447 3.774 2.941.735 6.043-.357.31-2.66 3.842-10.555-3.885z" />
      <Path
        fillRule="nonzero"
        d="M21.375 3.86v.01l-9.416 9.645-8.515 8.73a.86.86 0 0 1-.594.255.9.9 0 0 1-.605-.254.9.9 0 0 1-.129-1.057l.03-.04a.5.5 0 0 1 .07-.092l17.96-18.428a.82.82 0 0 1 .594-.265c.228 0 .446.103.605.265a.893.893 0 0 1 0 1.23"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystCallSilentBulk;
