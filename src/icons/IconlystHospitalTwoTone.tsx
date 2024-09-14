import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalTwoTone = ({
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
      d="M8.692 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H8.692c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.91 5.081 5.753 3 8.692 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.514 16.568h2.79a.51.51 0 0 0 .508-.509v-2.156h2.156a.51.51 0 0 0 .509-.509v-2.79a.51.51 0 0 0-.509-.508h-2.156V7.939a.51.51 0 0 0-.509-.51h-2.79a.51.51 0 0 0-.508.51v2.157H8.849a.51.51 0 0 0-.51.508v2.79c0 .28.229.509.51.509h2.156v2.156c0 .281.227.509.509.509"
    />
  </Svg>
);
export default IconlystHospitalTwoTone;
