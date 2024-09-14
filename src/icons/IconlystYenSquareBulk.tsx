import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYenSquareBulk = ({
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
      d="M16.217 2.563H7.783c-3.16 0-5.283 2.222-5.283 5.53v7.95c0 3.302 2.123 5.52 5.283 5.52h8.433c3.161 0 5.284-2.218 5.284-5.52v-7.95c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m13.56 11.423 1.885-2.352a.749.749 0 1 0-1.17-.937l-2.276 2.839-2.273-2.84a.751.751 0 0 0-1.172.937l1.883 2.353h-.938a.75.75 0 0 0 0 1.5h1.751v3.54a.75.75 0 0 0 1.5 0v-3.54h1.755a.75.75 0 0 0 0-1.5z"
    />
  </Svg>
);
export default IconlystYenSquareBulk;
