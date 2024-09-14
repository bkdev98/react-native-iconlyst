import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag3Boldsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.98 6.784a3.263 3.263 0 0 1 3.26-3.24 3.234 3.234 0 0 1 3.28 3.26v.24h1.5v-.24c0-2.63-2.14-4.76-4.76-4.76h-.02c-2.61 0-4.75 2.12-4.76 4.76v.24h1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.02 7.044v3.73h-1.5v-3.73H8.98v3.73h-1.5v-3.73H2.5v5.44c0 5.38 4.37 9.75 9.75 9.75s9.75-4.37 9.75-9.75v-5.44z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag3Boldsharp;
