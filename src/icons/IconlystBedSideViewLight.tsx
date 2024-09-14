import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBedSideViewLight = ({
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
      d="M19 9.386v1.473M5 6.867v4M3 13.027c0-.614 0-.922.089-1.168a1.5 1.5 0 0 1 .903-.903c.246-.089.553-.089 1.168-.089h13.68c.614 0 .922 0 1.168.089a1.5 1.5 0 0 1 .903.903c.089.246.089.554.089 1.168v.663c0 .614 0 .921-.089 1.168a1.5 1.5 0 0 1-.903.903c-.246.089-.553.089-1.168.089H5.16c-.615 0-.922 0-1.168-.09a1.5 1.5 0 0 1-.903-.902C3 14.61 3 14.304 3 13.69zM5.006 17.395l.328-1.54M18.994 17.395l-.328-1.54M8.857 10.866A3.076 3.076 0 0 0 5.781 7.79H5.01"
    />
  </Svg>
);
export default IconlystBedSideViewLight;
