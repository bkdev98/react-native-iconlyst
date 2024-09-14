import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHDDisplayBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.33 19.462H8.337a.75.75 0 0 0 0 1.5h8.991a.75.75 0 0 0 0-1.5M15.271 8.662h-.082v3.49h.082a1.744 1.744 0 1 0 0-3.49"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.271 13.652h-.832a.75.75 0 0 1-.75-.75v-4.99a.75.75 0 0 1 .75-.75h.832a3.245 3.245 0 0 1 3.245 3.24 3.25 3.25 0 0 1-3.245 3.25m-2.577-.75a.75.75 0 0 1-1.5 0v-1.75H9.367v1.75a.75.75 0 0 1-1.5 0v-4.99a.75.75 0 0 1 1.5 0v1.74h1.827v-1.74a.75.75 0 0 1 1.5 0zm5.111-9.87H7.862a4.534 4.534 0 0 0-4.528 4.53v5.45a4.535 4.535 0 0 0 4.528 4.53h9.943a4.536 4.536 0 0 0 4.529-4.53v-5.45a4.535 4.535 0 0 0-4.529-4.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHDDisplayBold;
