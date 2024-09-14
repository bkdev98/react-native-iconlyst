import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftWordBroken = ({
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
      d="M8.615 7.129v-.835c0-1.588.998-2.718 2.596-2.718h7.952c1.598 0 2.585 1.13 2.585 2.718v11.412c0 1.588-.987 2.718-2.585 2.718h-.786M8.615 16.871v.835c0 1.588.998 2.718 2.596 2.718h3.976"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 14.15c0 1.594.993 2.72 2.588 2.72h4.564c1.595 0 2.588-1.126 2.588-2.72v-4.3c0-1.595-.993-2.721-2.588-2.721H6.338c-1.591 0-2.588 1.126-2.588 2.72v1.618"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.961 10.33-.943 3.34-1.4-3.34-1.397 3.34-.944-3.34M15.736 15.972h6.013M19.079 11.996h-5.587M16.33 8.023h5.42"
    />
  </Svg>
);
export default IconlystMicrosoftWordBroken;
