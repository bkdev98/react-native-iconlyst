import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperSendBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.312 19.05H6.189C4.223 19.05 3 17.663 3 15.7V12M21 10.299V8.3c0-1.963-1.229-3.35-3.188-3.35H6.188C4.223 4.95 3 6.336 3 8.3v1.03M18.809 14.39l2.136 2.137-2.136 2.136M20.944 16.525h-5.05M6.213 8.451h1.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9.715a2.287 2.287 0 1 0 2.289 2.287"
    />
  </Svg>
);
export default IconlystMoneyPaperSendBroken;
