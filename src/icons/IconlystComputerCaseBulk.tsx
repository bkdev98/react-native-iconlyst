import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystComputerCaseBulk = ({
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
      d="M14.825 2.5H9.174a3.51 3.51 0 0 0-3.506 3.507v11.987A3.51 3.51 0 0 0 9.174 21.5h5.651a3.51 3.51 0 0 0 3.507-3.506V6.007A3.51 3.51 0 0 0 14.825 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.646 8.43h4.71a.75.75 0 0 0 0-1.5h-4.71a.75.75 0 0 0 0 1.5M9.646 11.943h4.71a.75.75 0 0 0 0-1.5h-4.71a.75.75 0 0 0 0 1.5M11.018 17.38a.982.982 0 0 0 1.962 0 .982.982 0 0 0-1.962 0"
    />
  </Svg>
);
export default IconlystComputerCaseBulk;
