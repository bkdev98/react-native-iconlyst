import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalLight = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.604 16.568h2.789a.51.51 0 0 0 .509-.509v-2.156h2.156a.51.51 0 0 0 .509-.509v-2.79a.51.51 0 0 0-.509-.508h-2.156V7.939a.51.51 0 0 0-.509-.51h-2.79a.51.51 0 0 0-.508.51v2.157H7.939a.51.51 0 0 0-.51.508v2.79c0 .28.228.509.51.509h2.156v2.156c0 .281.227.509.508.509"
    />
  </Svg>
);
export default IconlystHospitalLight;
