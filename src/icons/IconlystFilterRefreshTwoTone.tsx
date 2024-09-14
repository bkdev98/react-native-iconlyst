import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterRefreshTwoTone = ({
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
      d="M18.229 4.89a2.523 2.523 0 0 1 2.523 2.524v1.281c0 1.004-.426 1.96-1.172 2.632l-4.628 4.578a1.45 1.45 0 0 0-.478 1.074v1.869c0 .593-.361 1.125-.91 1.344l-1.77.704a1.447 1.447 0 0 1-1.98-1.344v-3.03c0-.384-.153-.752-.425-1.023l-4.103-3.654A3.54 3.54 0 0 1 4.248 9.34V7.414A2.523 2.523 0 0 1 6.771 4.89"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.49 8.263a3.008 3.008 0 0 1-4.997-2.255M10.51 3.752a3.008 3.008 0 0 1 4.997 2.255"
    />
  </Svg>
);
export default IconlystFilterRefreshTwoTone;
