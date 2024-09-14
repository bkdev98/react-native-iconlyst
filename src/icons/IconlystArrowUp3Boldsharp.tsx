import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUp3Boldsharp = ({
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
      d="M17.91 8.66c-2.438 0-4.66-2.221-4.66-4.66V3h-2v1c0 2.439-2.222 4.66-4.66 4.66h-1v2h1c1.773 0 3.438-.778 4.66-1.999V21h2V8.661c1.221 1.221 2.886 1.999 4.66 1.999h1v-2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUp3Boldsharp;
