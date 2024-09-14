import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSupportOutline = ({
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
      d="M2.5 12.283a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75c0 5.384-4.365 9.75-9.75 9.75s-9.75-4.366-9.75-9.75m9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.252 8.904a3.379 3.379 0 1 0 0 6.757 3.379 3.379 0 0 0 0-6.757m-4.879 3.378a4.879 4.879 0 1 1 9.757.001 4.879 4.879 0 0 1-9.757 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.865 14.667a.75.75 0 0 1 0 1.06l-3.448 3.449a.75.75 0 1 1-1.06-1.061l3.447-3.448a.75.75 0 0 1 1.061 0M14.64 14.67a.75.75 0 0 1 1.06 0l3.446 3.447a.75.75 0 1 1-1.06 1.06l-3.446-3.445a.75.75 0 0 1 0-1.061M5.356 5.39a.75.75 0 0 1 1.061 0l3.447 3.447a.75.75 0 1 1-1.06 1.06L5.355 6.45a.75.75 0 0 1 0-1.06M19.145 5.39a.75.75 0 0 1 0 1.06L15.7 9.895a.75.75 0 1 1-1.06-1.06l3.445-3.445a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSupportOutline;
