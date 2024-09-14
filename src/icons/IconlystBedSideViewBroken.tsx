import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBedSideViewBroken = ({
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
      d="M19.518 9.386v1.473M5.518 6.867v4M12.518 15.85h-6.84c-.615 0-.922 0-1.169-.09a1.5 1.5 0 0 1-.903-.902c-.088-.247-.088-.554-.088-1.168v-.663c0-.614 0-.922.088-1.168a1.5 1.5 0 0 1 .903-.903c.247-.089.554-.089 1.169-.089h13.68c.614 0 .921 0 1.168.089a1.5 1.5 0 0 1 .903.903c.089.246.089.554.089 1.168v.663c0 .614 0 .921-.09 1.168a1.5 1.5 0 0 1-.902.903c-.247.089-.554.089-1.168.089h-3.42M5.523 17.395l.329-1.54M19.512 17.395l-.328-1.54M5.526 7.79H6.3c1.024 0 1.931.5 2.49 1.27"
    />
  </Svg>
);
export default IconlystBedSideViewBroken;
