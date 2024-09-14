import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOrangeBroken = ({
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
      d="M19.56 3.742c-.598-.867-1.826-1.002-2.571-.257L3.985 16.491c-.745.745-.61 1.975.257 2.573 4.291 2.955 10.215 2.527 14.033-1.286 3.817-3.822 4.246-9.742 1.285-14.036M10.555 9.919l-.3 6.915m11.244-6.915h-5.472M10.555 9.919l7.79 7.78"
    />
  </Svg>
);
export default IconlystOrangeBroken;
