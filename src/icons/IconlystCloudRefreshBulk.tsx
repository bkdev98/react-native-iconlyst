import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudRefreshBulk = ({
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
      d="M18.016 8.361a.21.21 0 0 1-.183-.18c-.295-2.107-2.01-4.74-5.331-4.74-3.572 0-5.04 2.91-5.325 4.743a.21.21 0 0 1-.183.177c-2.36.289-3.957 2.097-3.957 4.582a4.64 4.64 0 0 0 2.74 4.222c.348.142.667.225.95.277.128.023.239-.085.23-.215a5.51 5.51 0 0 1 5.5-5.845l.036.002h.01a5.47 5.47 0 0 1 5.465 5.463l-.002.017.002.028q0 .178-.013.352c-.008.129.1.237.227.216.31-.051.669-.138 1.067-.298a4.64 4.64 0 0 0 2.715-4.219c0-2.483-1.593-4.29-3.948-4.582"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.804 18.4-1.459-.74A.75.75 0 0 0 12.667 19l.093.048c-1.285.146-2.47-.893-2.47-2.2a.75.75 0 0 0-1.5 0 3.72 3.72 0 0 0 3.714 3.714c.907 0 1.78-.33 2.458-.93a.75.75 0 0 0-.158-1.23M12.502 13.133c-.907 0-1.779.33-2.458.928a.75.75 0 0 0 .157 1.23l1.46.742a.75.75 0 1 0 .68-1.337l-.096-.048c1.29-.155 2.472.892 2.472 2.199a.75.75 0 0 0 1.5 0 3.72 3.72 0 0 0-3.715-3.714"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudRefreshBulk;
