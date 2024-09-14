import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSetting2Bulksharp = ({
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
      d="M17.54 2.979H6.96l-5.288 9.16 5.288 9.16H17.54l5.288-9.16z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.151 12.139c0 1.709 1.391 3.1 3.1 3.1s3.1-1.391 3.1-3.1-1.39-3.1-3.1-3.1a3.104 3.104 0 0 0-3.1 3.1"
    />
  </Svg>
);
export default IconlystSetting2Bulksharp;
