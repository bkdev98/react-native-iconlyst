import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftWordTwoTone = ({
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
      d="M7.865 16.87v.835c0 1.588.998 2.718 2.596 2.718h7.951c1.599 0 2.586-1.13 2.586-2.718V6.292c0-1.588-.987-2.718-2.586-2.718h-7.95c-1.6 0-2.597 1.13-2.597 2.718v.835"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.588 7.129h4.564c1.595 0 2.588 1.126 2.588 2.72v4.3c0 1.595-.993 2.72-2.588 2.72H5.588C3.993 16.87 3 15.745 3 14.15v-4.3c0-1.594.997-2.72 2.588-2.72"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.211 10.328-.943 3.34-1.4-3.34-1.397 3.34-.944-3.34M12.179 15.973h8.82M20.999 11.996h-8.257M12.17 8.023H21"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMicrosoftWordTwoTone;
