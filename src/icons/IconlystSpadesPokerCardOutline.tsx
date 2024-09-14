import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpadesPokerCardOutline = ({
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
      d="M12.249 16.75a.75.75 0 0 1-.75-.75v-1.136a2.7 2.7 0 0 1-1.681.014 2.5 2.5 0 0 1-1.593-1.472 3.05 3.05 0 0 1-.1-2.022 4.04 4.04 0 0 1 1.2-1.8l2.2-1.893a1.043 1.043 0 0 1 1.442 0l2.1 1.805a4.05 4.05 0 0 1 1.307 1.9 3.04 3.04 0 0 1-.035 1.84 2.53 2.53 0 0 1-2.23 1.748 2.6 2.6 0 0 1-1.118-.172v1.193a.75.75 0 0 1-.742.746m0-7.7-1.934 1.662c-.35.297-.611.683-.758 1.118-.096.334-.077.692.056 1.014a1 1 0 0 0 .623.6 1.21 1.21 0 0 0 1.313-.347q.132-.108.256-.2a.87.87 0 0 1 .449-.141.75.75 0 0 1 .5.2l.038.027a1.98 1.98 0 0 0 1.223.51 1.02 1.02 0 0 0 .906-.725c.104-.298.113-.62.026-.923a2.55 2.55 0 0 0-.841-1.194z"
    />
    <Path
      fill={props.color}
      d="M15.25 21.75h-6A4.756 4.756 0 0 1 4.5 17V7a4.756 4.756 0 0 1 4.75-4.75h6A4.756 4.756 0 0 1 20 7v10a4.756 4.756 0 0 1-4.75 4.75m-6-18A3.254 3.254 0 0 0 6 7v10a3.254 3.254 0 0 0 3.25 3.25h6A3.254 3.254 0 0 0 18.5 17V7a3.254 3.254 0 0 0-3.25-3.25z"
    />
    <Path
      fill={props.color}
      d="M16.25 6.76A.752.752 0 1 1 17 6v.01a.75.75 0 0 1-.75.75M8.25 18.76a.753.753 0 0 1-.537-1.28A.753.753 0 0 1 9 18v.01a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystSpadesPokerCardOutline;
