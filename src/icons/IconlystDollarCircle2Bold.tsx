import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarCircle2Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.754 15.905v.219a.75.75 0 0 1-1.5 0v-.2h-.028a2.04 2.04 0 0 1-2.033-2.04.75.75 0 0 1 1.5 0c0 .297.239.54.533.54h1.342a.74.74 0 0 0 0-1.481h-1.076a2.3 2.3 0 0 1-2.299-2.3c0-1.187.906-2.155 2.061-2.276v-.344a.75.75 0 0 1 1.5 0v.32h.021c1.121 0 2.032.912 2.032 2.03 0 .415-.336.79-.75.79s-.75-.296-.75-.71v-.08a.53.53 0 0 0-.532-.53h-1.283a.8.8 0 0 0 0 1.6h1.076a2.243 2.243 0 0 1 2.24 2.24 2.235 2.235 0 0 1-2.054 2.222M12 2.563c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarCircle2Bold;
