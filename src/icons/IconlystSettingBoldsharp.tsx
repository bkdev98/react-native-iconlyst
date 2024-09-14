import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingBoldsharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 15.937A3.94 3.94 0 0 1 8.313 12a3.94 3.94 0 0 1 3.937-3.938A3.943 3.943 0 0 1 16.188 12a3.94 3.94 0 0 1-3.938 3.937m9.718-6.81-2.8-1.12.43-2.987-4.976-2.872-2.371 1.866-2.372-1.866L4.903 5.02l.43 2.987-2.801 1.12v5.746l2.802 1.121-.43 2.985 4.976 2.873 2.371-1.865 2.37 1.865 4.976-2.873-.43-2.986 2.801-1.12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSettingBoldsharp;
