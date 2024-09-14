import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageRefresh2Broken = ({
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
      d="M21 12.082V8.027C21 5.081 19.166 3 16.218 3H7.782C4.842 3 3 5.081 3 8.027v4.612M3 15.973c0 2.946 1.834 5.026 4.782 5.026h1.75M6.345 6.55h-.056m2.541 0h-.055m2.54 0h-.055M18.292 9.492H3M14.414 16.38a3.04 3.04 0 0 1 2.654-1.534c2.043 0 3.058 1.694 3.058 1.694M19.714 19.43a3.05 3.05 0 0 1-2.645 1.523c-1.684 0-2.72-1.693-2.72-1.693"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.231 19.25H14.35V21M20.126 14.648v1.882h-1.882"
    />
  </Svg>
);
export default IconlystWebPageRefresh2Broken;
