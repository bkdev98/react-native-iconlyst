import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSketchLight = ({
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
      d="M10.816 19.554 3.51 11.527a1.96 1.96 0 0 1-.169-2.423L6.292 4.78a1.96 1.96 0 0 1 1.62-.855h8.185a1.96 1.96 0 0 1 1.62.857l2.943 4.32c.51.75.44 1.752-.17 2.423l-7.307 8.028a1.6 1.6 0 0 1-2.367 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSketchLight;
