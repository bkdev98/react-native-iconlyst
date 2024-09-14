import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextAiLight = ({
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
      d="M13.27 4.485H7.783C4.842 4.485 3 6.566 3 9.511v5.616c0 2.946 1.834 5.027 4.782 5.027h8.434c2.949 0 4.784-2.081 4.784-5.027v-2.67M7.041 11.402h1.92m-1.92 3.76h7.23M18.404 9.045l.101-.273a3.76 3.76 0 0 1 2.222-2.225L21 6.446l-.273-.101a3.76 3.76 0 0 1-2.222-2.225l-.1-.274-.102.274a3.76 3.76 0 0 1-2.221 2.225l-.273.1.273.102a3.76 3.76 0 0 1 2.221 2.225z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.902 11.402a1.77 1.77 0 0 1 1.176-1.178 1.77 1.77 0 0 1-1.176-1.179 1.77 1.77 0 0 1-1.177 1.179 1.77 1.77 0 0 1 1.177 1.178"
    />
  </Svg>
);
export default IconlystTextAiLight;
