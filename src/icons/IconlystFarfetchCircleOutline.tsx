import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFarfetchCircleOutline = ({
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
      d="M7.65 13.352a.75.75 0 0 1 .75-.75h7.2a.75.75 0 1 1 0 1.5H8.4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.35 11.548c0-.91.738-1.65 1.65-1.65h3.6a.75.75 0 1 1 0 1.5H12a.15.15 0 0 0-.15.15v4.5a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.2 8.7c-.58 0-1.05.47-1.05 1.05v6.3a.75.75 0 0 1-1.5 0v-6.3A2.55 2.55 0 0 1 10.2 7.2h5.4a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFarfetchCircleOutline;
