import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDown3Boldsharp = ({
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
      d="M17.91 13.34c-1.774 0-3.439.778-4.66 1.999V3h-2v12.339c-1.222-1.221-2.887-1.999-4.66-1.999h-1v2h1c2.438 0 4.66 2.221 4.66 4.66v1h2v-1c0-2.439 2.222-4.66 4.66-4.66h1v-2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDown3Boldsharp;
