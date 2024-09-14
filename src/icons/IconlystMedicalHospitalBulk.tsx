import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedicalHospitalBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.644 13.128 18.694 12l1.947-1.126a1.45 1.45 0 0 0 .535-1.982l-.001-.002-1.893-3.278a1.455 1.455 0 0 0-1.986-.535l-1.948 1.127V3.95c0-.8-.652-1.45-1.453-1.45h-3.79c-.8 0-1.451.65-1.451 1.45v2.254L6.703 5.075a1.456 1.456 0 0 0-1.982.535L2.825 8.892a1.45 1.45 0 0 0 .532 1.98L5.307 12 3.36 13.126a1.452 1.452 0 0 0-.534 1.984l1.894 3.278a1.456 1.456 0 0 0 1.986.535l1.948-1.126v2.253c0 .8.652 1.45 1.452 1.45h3.789c.8 0 1.453-.65 1.453-1.45v-2.254l1.95 1.129a1.455 1.455 0 0 0 1.983-.535l1.895-3.282a1.45 1.45 0 0 0-.532-1.98"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMedicalHospitalBulk;
