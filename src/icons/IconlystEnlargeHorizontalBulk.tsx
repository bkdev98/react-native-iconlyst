import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnlargeHorizontalBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M7.453 16.704a1 1 0 0 1-.707-.293l-3.453-3.453a1 1 0 0 1 0-1.414L6.746 8.09A.999.999 0 1 1 8.16 9.504l-2.746 2.747 2.746 2.746a.999.999 0 0 1-.707 1.707M16.547 16.704a.999.999 0 0 1-.707-1.707l2.746-2.746-2.746-2.747a.999.999 0 1 1 1.414-1.414l3.453 3.454a1 1 0 0 1 0 1.414l-3.453 3.453a1 1 0 0 1-.707.293" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.999 20.914a1 1 0 0 1-1-1V4.586a1 1 0 0 1 2 0v15.328a1 1 0 0 1-1 1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEnlargeHorizontalBulk;
