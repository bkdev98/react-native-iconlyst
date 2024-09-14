import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownEnterBold = ({
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
      d="M20.85 15.73v1.801a4.355 4.355 0 0 1-4.35 4.35h-9a4.354 4.354 0 0 1-4.35-4.35v-1.8a.75.75 0 0 1 1.5 0v1.8a2.85 2.85 0 0 0 2.85 2.85h9a2.85 2.85 0 0 0 2.85-2.85v-1.8a.75.75 0 0 1 1.5 0"
    />
    <Path
      fill={props.color}
      d="m11.469 18.06-2.28-2.28a.748.748 0 0 1 .448-1.276v-.006h1.613v-3.706H6.399c-1.654 0-3-1.346-3-3v-2.17c0-1.655 1.346-3 3-3H17.6c1.654 0 3 1.345 3 3v2.17c0 1.654-1.346 3-3 3h-4.85v3.706h1.495v.002a.75.75 0 0 1 .566 1.28l-2.281 2.28a.75.75 0 0 1-1.061 0"
    />
  </Svg>
);
export default IconlystDownEnterBold;
