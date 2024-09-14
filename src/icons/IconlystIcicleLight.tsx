import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIcicleLight = ({
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
      d="m16.055 7.706-2.457 4.064-1.203 6.326-3.28-8.39"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.88 5.941 2.823 4.294.294 4.765 3.058-4.765-1.588-2.647L21.055 3l-16.94.353-.941 6 2.47 1 1.824 4.411 2.015-7.176m.396-1.412-.396 1.412m0 0-3.24-1.412M18.478 18.617l-2.316-1.323-.728 2.051L16.757 21zM3.173 17.487l2.317-1.522.728 2.36-1.324 1.902z"
    />
  </Svg>
);
export default IconlystIcicleLight;
