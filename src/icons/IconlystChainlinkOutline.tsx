import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChainlinkOutline = ({
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
      d="M12.25 3.75A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25A8.25 8.25 0 0 0 20.5 12a8.25 8.25 0 0 0-8.25-8.25M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.375 7.836a1.75 1.75 0 0 1 1.75 0l2.294 1.325c.541.312.875.89.875 1.515v2.65a1.75 1.75 0 0 1-.875 1.515l-2.294 1.325a1.75 1.75 0 0 1-1.75 0L9.08 14.841a1.75 1.75 0 0 1-.875-1.515v-2.65c0-.625.334-1.203.875-1.515zm1 1.3a.25.25 0 0 0-.25 0L9.83 10.46a.25.25 0 0 0-.125.216v2.65c0 .09.048.172.125.216l2.295 1.325a.25.25 0 0 0 .25 0l2.294-1.325a.25.25 0 0 0 .125-.216v-2.65a.25.25 0 0 0-.125-.216z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChainlinkOutline;
