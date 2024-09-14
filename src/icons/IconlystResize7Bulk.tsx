import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize7Bulk = ({
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
      d="M5 20.251a1 1 0 0 1-.706-.293A1 1 0 0 1 4 19.249l.012-5.501a1 1 0 0 1 1-.998h.002a1 1 0 0 1 .998 1.002l-.01 4.497 4.496-.01h.002a1 1 0 0 1 .002 2l-5.5.012z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.987 11.75h-.002a1 1 0 0 1-.998-1.002l.01-4.496-4.496.01H13.5a1 1 0 0 1-.002-2l5.5-.012H19a1 1 0 0 1 1 1.002l-.012 5.5a1 1 0 0 1-1 .998"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystResize7Bulk;
