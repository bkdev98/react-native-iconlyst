import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNeutralLight = ({
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
      d="M16.218 3H7.783C4.835 3 3 5.081 3 8.026v7.948C3 18.919 4.835 21 7.784 21h8.434C19.166 21 21 18.919 21 15.974V8.026C21 5.081 19.157 3 16.218 3M10.216 14.676H7.54"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.777 8.974v-.051m-.045-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M15.239 8.974v-.051m-.007-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
  </Svg>
);
export default IconlystNeutralLight;
