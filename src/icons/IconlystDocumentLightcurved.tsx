import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentLightcurved = ({
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
      d="M15.596 15.696h-7.22M15.596 11.937h-7.22M11.131 8.177H8.376"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.61 12c0 6.937 2.098 9.25 8.391 9.25s8.391-2.313 8.391-9.25-2.097-9.25-8.391-9.25C5.708 2.75 3.61 5.063 3.61 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentLightcurved;
