import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCounterClockwiseUndoOutline = ({
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
      fill={props.color}
      d="M12.252 21.75a9.77 9.77 0 0 1-9.4-7.141.75.75 0 0 1 1.446-.4 8.241 8.241 0 1 0 .762-6.275.75.75 0 0 1-1.3-.74 9.749 9.749 0 1 1 8.5 14.556z"
    />
    <Path
      fill={props.color}
      d="M7.448 8.318H4.167a.75.75 0 0 1-.75-.75v-3.3a.75.75 0 0 1 1.5 0v2.55h2.531a.75.75 0 0 1 0 1.5M9.23 15.317a.75.75 0 0 1-.385-1.393l2.81-1.679V8.572a.75.75 0 1 1 1.5 0v4.1a.75.75 0 0 1-.366.644l-3.174 1.9a.75.75 0 0 1-.385.101"
    />
  </Svg>
);
export default IconlystCounterClockwiseUndoOutline;
