import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpod1Broken = ({
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
      d="M10.364 15.086v3.541a1.41 1.41 0 0 1-2.821 0v-5.576H6.526a3.99 3.99 0 0 1-3.16-1.554A1.87 1.87 0 0 1 3 10.365V8.248c0-.407.122-.81.367-1.133A3.71 3.71 0 0 1 6.14 5.643c2.143-.099 4.223 1.759 4.223 3.901v2.27M5.584 8.748v1.234M13.637 11.447v4.541a1.41 1.41 0 0 0 2.82 0v-5.576h1.017c1.273 0 2.442-.609 3.16-1.554.246-.324.366-.726.366-1.131V5.609c0-.406-.121-.81-.366-1.133a3.72 3.72 0 0 0-2.774-1.472c-2.144-.099-4.223 1.758-4.223 3.901v1.271M18.418 6.109v1.235"
    />
  </Svg>
);
export default IconlystAirpod1Broken;
