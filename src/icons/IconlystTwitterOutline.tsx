import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitterOutline = ({
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
      d="M9.148 20.727c-2.29 0-5.18-.64-6.72-2.49a.749.749 0 0 1 .6-1.23c1.31.03 2.56-.23 3.71-.8-3.23-2.34-4.38-6.08-3.49-11.37.05-.28.25-.51.51-.59.27-.09.56-.01.76.19 1.73 1.76 3.97 2.97 6.38 3.47.15-1.68 1.12-3.79 3.27-4.44 2.4-.73 4.17.77 4.85 1.49l1.87-.28c.3-.04.58.09.74.34s.16.57 0 .82l-1.45 2.2c.44 7.18-3.7 12.26-10.3 12.67-.24.01-.48.02-.74.02zm-4.15-2.37c1.56.78 3.59.93 4.8.85 5.71-.36 9.29-4.82 8.89-11.09l-.02-.2c-.02-.17.02-.35.12-.49l.67-1.02-.62.09a.75.75 0 0 1-.71-.29c-.06-.08-1.49-1.93-3.51-1.3-1.67.51-2.36 2.57-2.21 3.8a.75.75 0 0 1-.22.63c-.17.16-.4.24-.63.21-2.57-.35-5.02-1.42-7.02-3.06-.57 5.79 1.96 7.96 3.99 9.1.23.13.37.36.38.62s-.11.51-.32.65c-1.1.76-2.32 1.26-3.61 1.5z"
    />
  </Svg>
);
export default IconlystTwitterOutline;
