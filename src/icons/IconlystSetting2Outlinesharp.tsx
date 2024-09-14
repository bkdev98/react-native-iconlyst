import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSetting2Outlinesharp = ({
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
      d="M14.35 12.639a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.2 0m-2.1-3.6a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1 0-7.2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.817 3.229h10.866l5.433 9.41-5.433 9.41H6.817l-5.433-9.41zm.866 1.5-4.567 7.91 4.567 7.91h9.134l4.567-7.91-4.567-7.91z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSetting2Outlinesharp;
