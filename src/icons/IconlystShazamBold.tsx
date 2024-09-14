import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShazamBold = ({
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
      d="m16.398 14.85-2.936 2.939a.75.75 0 0 1-1.061 0 .75.75 0 0 1-.001-1.06l2.938-2.94a1.9 1.9 0 0 0 .566-1.357 1.92 1.92 0 0 0-.566-1.374 1.94 1.94 0 0 0-2.729.003l-1.793 1.797a.75.75 0 1 1-1.062-1.06l1.795-1.8a3.44 3.44 0 0 1 4.849-.001 3.42 3.42 0 0 1 1.006 2.438 3.4 3.4 0 0 1-1.006 2.416m-6.374 1.167a3.42 3.42 0 0 1-3.428-3.435 3.4 3.4 0 0 1 1.006-2.416l2.937-2.937a.749.749 0 1 1 1.06 1.06l-2.938 2.94a1.9 1.9 0 0 0-.565 1.356 1.92 1.92 0 0 0 .566 1.374 1.94 1.94 0 0 0 2.729-.003l1.793-1.796a.75.75 0 1 1 1.062 1.058l-1.795 1.8a3.43 3.43 0 0 1-2.427.999M12 3.009c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShazamBold;
