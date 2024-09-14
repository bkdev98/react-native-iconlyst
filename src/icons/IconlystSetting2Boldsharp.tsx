import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSetting2Boldsharp = ({
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
      d="M12.251 15.239a3.104 3.104 0 0 1-3.1-3.1c0-1.71 1.391-3.1 3.1-3.1s3.1 1.39 3.1 3.1c0 1.709-1.39 3.1-3.1 3.1m5.288-12.26H6.961l-5.288 9.16 5.288 9.16H17.54l5.288-9.16z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSetting2Boldsharp;
