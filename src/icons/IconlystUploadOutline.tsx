import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUploadOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.368 8.794a.75.75 0 0 1 0 1.5h-.933A2.937 2.937 0 0 0 3.5 13.228v4.875a2.94 2.94 0 0 0 2.935 2.935h11.13a2.94 2.94 0 0 0 2.935-2.935V13.22a2.93 2.93 0 0 0-2.924-2.925h-.943a.75.75 0 0 1 0-1.5h.943A4.43 4.43 0 0 1 22 13.22v4.884a4.44 4.44 0 0 1-4.435 4.435H6.435A4.44 4.44 0 0 1 2 18.103v-4.875a4.44 4.44 0 0 1 4.435-4.434zm5.163-6.572 2.916 2.928a.75.75 0 0 1-1.062 1.058l-1.636-1.642.001 10.975h-1.5V4.566L9.615 6.208a.747.747 0 0 1-1.06.002.75.75 0 0 1-.002-1.06l2.915-2.928a.77.77 0 0 1 1.062 0"
    />
  </Svg>
);
export default IconlystUploadOutline;
