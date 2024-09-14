import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPauseBulk = ({
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
      d="M8.003 3.5a2.66 2.66 0 0 0-2.657 2.657v11.686A2.66 2.66 0 0 0 8.003 20.5a2.66 2.66 0 0 0 2.657-2.657V6.157A2.66 2.66 0 0 0 8.003 3.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.138 3.5a2.66 2.66 0 0 0-2.658 2.657v11.686a2.66 2.66 0 0 0 2.657 2.657 2.66 2.66 0 0 0 2.657-2.657V6.157A2.66 2.66 0 0 0 17.138 3.5"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPauseBulk;
