import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftOnenoteBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.616 16.871v.835c0 1.588.998 2.718 2.596 2.718h7.952c1.598 0 2.586-1.13 2.586-2.718V6.293c0-1.589-.988-2.719-2.586-2.719h-2.622M8.616 7.127v-.835c0-1.588.998-2.718 2.597-2.718H13.2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.748 8.021h-3.602a.877.877 0 0 0-.876.877v9.351M17.27 16.47h4.478M19.551 12.113H17.27M3.75 14.148c0 1.595.993 2.72 2.588 2.72h4.564c1.596 0 2.589-1.125 2.589-2.72v-4.3c0-1.595-.993-2.721-2.589-2.721H6.338c-1.591 0-2.588 1.126-2.588 2.72v1.698"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.063 13.77v-3.604l3.106 3.66v-3.66"
    />
  </Svg>
);
export default IconlystMicrosoftOnenoteBroken;
