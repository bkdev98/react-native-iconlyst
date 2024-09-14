import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDataBrainOutline = ({
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
      d="M9.76 3.85c-.784 0-1.434.615-1.486 1.402a.75.75 0 0 1-.975.666 2.1 2.1 0 0 0-.64-.099c-1.174 0-2.134.96-2.134 2.153 0 .542.197 1.034.523 1.412a.75.75 0 0 1-.334 1.202 1.41 1.41 0 0 0-.964 1.344c0 .632.411 1.165.974 1.346a.75.75 0 0 1 .335 1.208c-.333.38-.534.877-.534 1.425 0 1.193.96 2.152 2.133 2.152q.336-.001.637-.097a.75.75 0 0 1 .975.704c.013.825.68 1.482 1.49 1.482.818 0 1.49-.67 1.49-1.505V17.63a.75.75 0 1 1 1.5 0v1.015a3 3 0 0 1-2.99 3.005 2.99 2.99 0 0 1-2.85-2.097 4 4 0 0 1-.252.008c-2.011 0-3.633-1.64-3.633-3.652 0-.592.14-1.151.389-1.646A2.91 2.91 0 0 1 2.25 11.93c0-.95.453-1.796 1.156-2.328a3.66 3.66 0 0 1-.381-1.63c0-2.012 1.622-3.653 3.633-3.653q.147 0 .29.012A2.99 2.99 0 0 1 9.76 2.35c1.656 0 2.99 1.35 2.99 3.005v1.047a.75.75 0 0 1-1.5 0V5.355c0-.836-.672-1.505-1.49-1.505"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.24 20.15c.784 0 1.434-.615 1.486-1.402a.75.75 0 0 1 .975-.666q.304.098.64.099c1.174 0 2.134-.96 2.134-2.153 0-.542-.197-1.034-.523-1.412a.75.75 0 0 1 .334-1.202c.558-.184.964-.714.964-1.344 0-.632-.411-1.165-.974-1.346a.75.75 0 0 1-.335-1.208c.333-.38.534-.877.534-1.424 0-1.194-.96-2.153-2.134-2.153q-.335.001-.636.097a.75.75 0 0 1-.975-.704 1.497 1.497 0 0 0-1.49-1.482c-.818 0-1.49.67-1.49 1.506a.75.75 0 0 1-1.5 0 3 3 0 0 1 2.99-3.006c1.34 0 2.468.884 2.85 2.097q.125-.008.252-.008c2.011 0 3.633 1.64 3.633 3.653 0 .59-.14 1.15-.389 1.645a2.91 2.91 0 0 1 1.164 2.333c0 .95-.453 1.796-1.156 2.328.244.491.381 1.045.381 1.63 0 2.012-1.622 3.653-3.634 3.653q-.146 0-.29-.012a2.99 2.99 0 0 1-2.811 1.981 3 3 0 0 1-2.99-3.005.75.75 0 0 1 1.5 0c0 .836.672 1.505 1.49 1.505"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.598 9.383a.75.75 0 0 1 .75-.75h.346a.75.75 0 0 1 0 1.5h-.346a.75.75 0 0 1-.75-.75m2.666 0a.75.75 0 0 1 .75-.75h2.638a.75.75 0 0 1 0 1.5h-2.638a.75.75 0 0 1-.75-.75M7.544 12a.75.75 0 0 1 .75-.75h7.412a.75.75 0 0 1 0 1.5H8.294a.75.75 0 0 1-.75-.75m1.054 2.618a.75.75 0 0 1 .75-.75h2.362a.75.75 0 0 1 0 1.5H9.348a.75.75 0 0 1-.75-.75m4.97 0a.75.75 0 0 1 .75-.75h.334a.75.75 0 0 1 0 1.5h-.334a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDataBrainOutline;