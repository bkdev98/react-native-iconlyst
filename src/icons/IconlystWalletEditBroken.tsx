import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletEditBroken = ({
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
      d="M18.486 14.392h-1.044a2.532 2.532 0 0 1 0-5.063h3.807M17.247 11.804h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.314 3.674A4.936 4.936 0 0 1 21.25 8.61v6.75a4.936 4.936 0 0 1-4.936 4.935h-4.367M3.25 11.596V8.608a4.936 4.936 0 0 1 4.936-4.936H13.4M10.49 15.684a1.126 1.126 0 0 0-.062-1.593l-.755-.7a1.127 1.127 0 0 0-1.593.063l-3.579 3.905c-.273.307-.444.69-.489 1.1l-.091.847a.92.92 0 0 0 1.066 1.006l.821-.137c.44-.074.845-.296 1.142-.63l1.77-1.93"
    />
  </Svg>
);
export default IconlystWalletEditBroken;
