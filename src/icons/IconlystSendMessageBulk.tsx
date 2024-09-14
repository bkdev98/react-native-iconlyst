import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendMessageBulk = ({
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
      d="M21.538 18.59 14.156 5.032l-.001-.003-.002-.002a2.09 2.09 0 0 0-1.852-1.1c-.784 0-1.478.413-1.855 1.103L3.063 18.59a2.1 2.1 0 0 0 .177 2.303 2.09 2.09 0 0 0 2.165.773l5.856-1.395c.846-.198 1.31-.206 2.114.009l5.822 1.386q.25.06.5.059c.645 0 1.254-.297 1.662-.831a2.1 2.1 0 0 0 .18-2.304"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.28 11.11v7.034"
    />
  </Svg>
);
export default IconlystSendMessageBulk;
