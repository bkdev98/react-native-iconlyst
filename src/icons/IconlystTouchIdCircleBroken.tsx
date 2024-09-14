import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdCircleBroken = ({
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
      d="M9.413 20.544A9 9 0 0 1 3.25 12a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-8.732 8.996"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.961 15.98a3.173 3.173 0 0 1-4.883-2.673V10.69a3.173 3.173 0 0 1 6.346 0v2.619M12.25 13.254v-2.367"
    />
  </Svg>
);
export default IconlystTouchIdCircleBroken;
