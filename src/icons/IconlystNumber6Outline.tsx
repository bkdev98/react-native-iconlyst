import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber6Outline = ({
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
      d="M7.714 15.855a.75.75 0 0 1-.75-.75V10.59a6.96 6.96 0 0 1 6.957-6.957h1.459a.75.75 0 0 1 0 1.5H13.92a5.46 5.46 0 0 0-5.457 5.457v4.515a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 19.633a4.035 4.035 0 1 0 0-8.071 4.035 4.035 0 0 0 0 8.07m5.536-4.036a5.535 5.535 0 1 1-11.07 0 5.535 5.535 0 0 1 11.07 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNumber6Outline;
