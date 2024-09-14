import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandyGame1Bulk = ({
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
      d="M4.8 11.15a.3.3 0 0 0-.3.3v5.65c0 2.632 1.688 4.4 4.2 4.4h6.6c2.512 0 4.2-1.768 4.2-4.4v-5.65a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.2 9.65a.3.3 0 0 0 .3-.3V6.9c0-2.632-1.688-4.4-4.2-4.4H8.7c-2.512 0-4.2 1.768-4.2 4.4v2.45a.3.3 0 0 0 .3.3zM16.23 17.731a.75.75 0 1 1-1.06-1.06c.28-.28.78-.28 1.06 0a.75.75 0 0 1 0 1.06m-2.03-1.88a.776.776 0 0 1-.53-.22.75.75 0 0 1 .24-1.22c.28-.11.61-.05.82.16a.75.75 0 0 1-.53 1.28m-3.1.9h-.55v.55a.75.75 0 0 1-1.5 0v-.55H8.4a.75.75 0 0 1 0-1.5h.65v-.55a.75.75 0 0 1 1.5 0v.55h.55a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHandyGame1Bulk;
