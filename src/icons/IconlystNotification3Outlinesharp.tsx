import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotification3Outlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.312 9.576A6.94 6.94 0 0 1 12.25 2.64v1.5a5.44 5.44 0 0 0-5.438 5.437v4.889l-1.613 1.634v1.647H19.3v-1.647l-1.613-1.634V9.576h1.5v4.273l1.613 1.635v3.762H3.7v-3.762l1.612-1.635z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.334 18.722v-.226h1.5v.226a2.417 2.417 0 0 0 4.833 0v-.226h1.5v.226a3.917 3.917 0 1 1-7.833 0M16.588 3.868a1.595 1.595 0 1 0 0 3.19 1.595 1.595 0 0 0 0-3.19m-3.095 1.595a3.095 3.095 0 1 1 6.19 0 3.095 3.095 0 0 1-6.19 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotification3Outlinesharp;
