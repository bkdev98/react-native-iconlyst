import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHDRBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.745 7.941a1 1 0 0 0-1 1v2.36H3.263v-2.36a1 1 0 0 0-2 0v6.718a1 1 0 1 0 2 0v-2.358h2.482v2.358a1 1 0 1 0 2 0V8.941a1 1 0 0 0-1-1M11.223 14.66h-.12V9.94h.12a2.36 2.36 0 0 1 2.359 2.358 2.36 2.36 0 0 1-2.359 2.36m0-6.719h-1.12a1 1 0 0 0-1 1v6.718a1 1 0 0 0 1 1h1.12a4.364 4.364 0 0 0 4.359-4.36 4.363 4.363 0 0 0-4.359-4.358M18.455 9.98h1.292a.992.992 0 0 1 0 1.983h-1.292zm2.67 3.631a2.99 2.99 0 0 0 1.612-2.64 2.994 2.994 0 0 0-2.99-2.99h-2.292a1 1 0 0 0-1 1v6.637a1 1 0 0 0 2 0v-1.655h.544l1.316 2.17a1 1 0 0 0 1.71-1.036z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHDRBold;
