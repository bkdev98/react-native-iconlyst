import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadlightsLongLeftOutline = ({
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
      d="M2.5 6.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M2.5 10.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M2.5 14.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M2.5 18.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M14.274 20.241c-.76 0-1.74-.29-2.48-1.51-.45-.74-.77-1.6-1-2.71-.26-1.24-.32-2.5-.35-3.45v-.04c.05-1.45.18-3.16.78-4.8.26-.71.58-1.27.98-1.74.59-.67 1.35-1 2.21-.97 1.18.04 2.31.35 3.47.93 1.36.69 2.42 1.73 3.16 3.11 1.29 2.38 1.27 4.82-.04 7.24-.77 1.42-1.96 2.5-3.54 3.23-.86.39-1.8.62-2.96.71zm-2.33-7.69c.04 1.33.13 2.28.32 3.16.2.94.46 1.65.81 2.24.46.75.94.82 1.32.78.98-.07 1.75-.26 2.44-.57 1.3-.6 2.23-1.44 2.85-2.58 1.07-1.97 1.09-3.88.04-5.81a5.8 5.8 0 0 0-2.52-2.48c-.96-.48-1.89-.74-2.85-.78-.41 0-.74.12-1.03.45-.28.32-.51.74-.7 1.27-.53 1.44-.64 2.98-.69 4.31z"
    />
  </Svg>
);
export default IconlystHeadlightsLongLeftOutline;
