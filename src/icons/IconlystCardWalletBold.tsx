import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardWalletBold = ({
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
      d="M14.091 7.311H9.907c-1.017 0-1.624.65-1.624 1.739v.841h7.433V9.05c0-1.089-.608-1.739-1.625-1.739"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.32 11.391H5.679a.75.75 0 0 1 0-1.5h1.105V9.05c0-1.907 1.285-3.239 3.124-3.239h4.183c1.84 0 3.125 1.332 3.125 3.239v.841h1.104a.75.75 0 0 1 0 1.5m-3.987 6.049H9.666a.75.75 0 0 1 0-1.5h4.667a.75.75 0 0 1 0 1.5M16.216 2.5H7.782C4.622 2.5 2.5 4.722 2.5 8.03v7.941c0 3.308 2.122 5.529 5.282 5.529h8.434c3.16 0 5.284-2.221 5.284-5.529V8.03c0-3.308-2.123-5.53-5.284-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCardWalletBold;
