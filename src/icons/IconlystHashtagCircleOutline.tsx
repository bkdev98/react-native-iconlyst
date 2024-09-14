import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHashtagCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.778 7.25a.75.75 0 0 1 .75.75v1.028h2.944V8a.75.75 0 0 1 1.5 0v1.028H16a.75.75 0 0 1 0 1.5h-1.028v2.944H16a.75.75 0 0 1 0 1.5h-1.028V16a.75.75 0 0 1-1.5 0v-1.028h-2.944V16a.75.75 0 0 1-1.5 0v-1.028H8a.75.75 0 0 1 0-1.5h1.028v-2.944H8a.75.75 0 0 1 0-1.5h1.028V8a.75.75 0 0 1 .75-.75m.75 3.278v2.944h2.944v-2.944z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHashtagCircleOutline;
