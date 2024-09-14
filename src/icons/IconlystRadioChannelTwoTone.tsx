import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadioChannelTwoTone = ({
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
      d="M7.11 5.203h10.778c2.227 0 3.612 1.572 3.612 3.795V15c0 2.224-1.385 3.795-3.613 3.795H7.111C4.885 18.795 3.5 17.223 3.5 15V8.998c0-2.223 1.391-3.795 3.61-3.795"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.898 18.797.741-2.044a1.39 1.39 0 0 1 1.315-.923h3.094c.59 0 1.116.365 1.315.923l.74 2.044"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.43 10.989a1.75 1.75 0 1 0-3.502 0 1.75 1.75 0 0 0 3.502 0M18.072 10.989a1.75 1.75 0 1 0-3.502 0 1.75 1.75 0 0 0 3.502 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.68 9.238h7.64M8.68 12.74h7.64"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRadioChannelTwoTone;
