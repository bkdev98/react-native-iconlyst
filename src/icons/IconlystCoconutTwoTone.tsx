import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoconutTwoTone = ({
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
      d="M19.82 13.233C19.82 17.689 16.32 21 12 21s-7.82-3.311-7.82-7.767S7.68 5.465 12 5.465s7.82 3.311 7.82 7.768"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M12 21c2.085 0 3.818-2.915 4.173-6.755M9.271 8.893c-.156 1.827.036 3.811.547 5.56" />
      <Path d="M18.98 9.773c-1.413.472-3.249.006-4.148-1.125-1.155 1.873-4.334 1.61-5.614 0-.82 1.33-2.662 1.583-4.119 1.04M12.145 3.468c.24.483.65 1.844.36 3.426M14.126 3c-.346.234-1.276.614-2.223.266-.694-.255-1.205-.214-1.502-.117" />
    </G>
  </Svg>
);
export default IconlystCoconutTwoTone;
