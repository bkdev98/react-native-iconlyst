import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlueberryLight = ({
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
      d="M13.212 15.967c0 2.687-2.286 4.865-5.106 4.865S3 18.654 3 15.967s2.286-4.865 5.106-4.865 5.106 2.178 5.106 4.865M15.71 9.339c.417-1.594-.03-3.402-1.324-4.696-1.902-1.902-4.914-1.975-6.726-.162-1.712 1.712-1.742 4.495-.135 6.401"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.624 16.637c1.745 1.745 4.508 1.812 6.171.149s1.596-4.426-.149-6.171-4.508-1.812-6.171-.15a4.1 4.1 0 0 0-1.167 2.38M12.41 6.345c-.514.19-.919.596-1.109 1.11a1.88 1.88 0 0 0-1.109-1.11c.514-.19.919-.595 1.11-1.109.19.514.595.92 1.108 1.11M7.904 13.828a1.97 1.97 0 0 0 0 1.645 1.97 1.97 0 0 0-1.645 0c.24-.522.24-1.123 0-1.645.522.24 1.123.24 1.645 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.656 14.855c.37-.137.661-.428.798-.798.137.37.429.661.799.798a1.35 1.35 0 0 0-.799.799 1.35 1.35 0 0 0-.798-.799"
    />
  </Svg>
);
export default IconlystBlueberryLight;
