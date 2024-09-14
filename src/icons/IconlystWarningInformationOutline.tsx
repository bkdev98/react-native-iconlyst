import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWarningInformationOutline = ({
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
      d="M12.25 10.249a2.251 2.251 0 1 0 0 4.502 2.251 2.251 0 0 0 0-4.502M8.499 12.5a3.751 3.751 0 1 1 7.502 0 3.751 3.751 0 0 1-7.502 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.31 7.941a.75.75 0 0 1 .054 1.06 5.224 5.224 0 0 0 0 6.998.75.75 0 1 1-1.114 1.005 6.725 6.725 0 0 1 0-9.008.75.75 0 0 1 1.06-.055M16.19 7.941a.75.75 0 0 1 1.06.055 6.725 6.725 0 0 1 0 9.008.75.75 0 0 1-1.114-1.005 5.225 5.225 0 0 0 0-6.998.75.75 0 0 1 .055-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.496 8.496a5.75 5.75 0 0 1 5.75-5.75h8.008a5.75 5.75 0 0 1 5.75 5.75v8.008a5.75 5.75 0 0 1-5.75 5.75H8.246a5.75 5.75 0 0 1-5.75-5.75zm5.75-4.25a4.25 4.25 0 0 0-4.25 4.25v8.008a4.25 4.25 0 0 0 4.25 4.25h8.008a4.25 4.25 0 0 0 4.25-4.25V8.496a4.25 4.25 0 0 0-4.25-4.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWarningInformationOutline;
