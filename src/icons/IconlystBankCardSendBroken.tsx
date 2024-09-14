import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardSendBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.976 5.297H6.812c-2.196 0-3.562 1.55-3.562 3.744v5.917c0 2.194 1.366 3.743 3.562 3.743h1.262M19.42 14.957c0 2.194-1.365 3.743-3.56 3.743h-4.524M14.187 10.056H3.25M7.165 14.848h2.667M7.165 14.848h2.667M19.42 5.897v5.344M17.592 7.734l1.829-1.837 1.829 1.837"
    />
  </Svg>
);
export default IconlystBankCardSendBroken;
