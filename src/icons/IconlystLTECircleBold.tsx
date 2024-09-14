import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLTECircleBold = ({
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
      d="M16.917 11.14a.75.75 0 0 1 0 1.5h-.976v.721h1.408a.75.75 0 0 1 0 1.5h-2.158a.75.75 0 0 1-.75-.75V9.68a.75.75 0 0 1 .75-.75h2.158a.75.75 0 0 1 0 1.5h-1.408v.71zm-3.939-.71h-.726v3.681a.75.75 0 0 1-1.5 0V10.43h-.727a.75.75 0 0 1 0-1.5h2.953a.75.75 0 0 1 0 1.5m-4.153 4.431H7.039a.75.75 0 0 1-.75-.75V9.68a.75.75 0 0 1 1.5 0v3.681h1.036a.75.75 0 0 1 0 1.5M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLTECircleBold;
