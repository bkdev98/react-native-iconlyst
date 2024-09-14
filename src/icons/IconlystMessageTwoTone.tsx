import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageTwoTone = ({
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
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path
        d="m17.268 8.561-4.266 3.434a2.22 2.22 0 0 1-2.746 0L5.954 8.561"
        opacity={0.4}
      />
      <Path d="M6.888 3h9.428c1.36.015 2.653.59 3.58 1.59a5.02 5.02 0 0 1 1.326 3.704v6.528a5.02 5.02 0 0 1-1.326 3.704 4.96 4.96 0 0 1-3.58 1.59H6.888C3.968 20.116 2 17.741 2 14.822V8.294C2 5.375 3.968 3 6.888 3" />
    </G>
  </Svg>
);
export default IconlystMessageTwoTone;
