import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.091 4.214a4.9 4.9 0 0 1 3.48-1.43 4.904 4.904 0 0 1 4.902 4.905v.75h-1.5v-.75a3.404 3.404 0 0 0-3.404-3.404h-.003a3.404 3.404 0 0 0-3.419 3.404v.75h-1.5v-.75c0-1.305.52-2.555 1.444-3.475M14.626 11.268h1.544v1.5h-1.544zM9.019 11.268h1.544v1.5H9.019z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.693 23.285h19.114l-.98-16.135H3.674zM5.085 8.65h14.331l.798 13.135H4.287z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBagOutlinesharp;
