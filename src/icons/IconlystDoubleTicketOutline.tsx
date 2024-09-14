import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleTicketOutline = ({
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
      d="M9.38 5.085a3.82 3.82 0 0 1 4.68-2.703l4.612 1.244a3.83 3.83 0 0 1 2.695 4.668l-2.186 8.21a3.81 3.81 0 0 1-4.67 2.697l-4.62-1.246a3.83 3.83 0 0 1-2.696-4.669zm1.449.386-2.184 8.201a2.33 2.33 0 0 0 1.636 2.835l4.62 1.245a2.31 2.31 0 0 0 2.83-1.634l2.187-8.21a2.33 2.33 0 0 0-1.637-2.834l-4.61-1.243a2.32 2.32 0 0 0-2.842 1.64"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.004 9.443A3.817 3.817 0 0 1 6.82 5.625h2.99a.75.75 0 0 1 0 1.5h-2.99a2.317 2.317 0 0 0-2.317 2.318v8.492a2.317 2.317 0 0 0 2.317 2.317h6.015c.593 0 1.074-.48 1.074-1.074v-.713a.75.75 0 0 1 1.5 0v.713a2.573 2.573 0 0 1-2.574 2.574H6.821a3.817 3.817 0 0 1-3.817-3.817z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleTicketOutline;
