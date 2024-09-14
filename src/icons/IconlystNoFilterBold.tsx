import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoFilterBold = ({
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
      d="M4.362 2.596a.75.75 0 0 1 1.06 0l13.302 13.3a.749.749 0 1 1-1.061 1.06l-1.293-1.292-.452.447a1.02 1.02 0 0 0-.347.774v1.97c0 .825-.518 1.58-1.29 1.882l-1.858.74a2.013 2.013 0 0 1-1.878-.197 2.03 2.03 0 0 1-.896-1.682v-3.2c0-.274-.106-.531-.3-.724l-4.315-3.832a4.32 4.32 0 0 1-1.257-3.018v-2.03c0-1 .468-1.915 1.224-2.5l-.64-.637a.75.75 0 0 1 0-1.061M10.545 3.628h8.486a3.16 3.16 0 0 1 3.154 3.164v1.346a4.28 4.28 0 0 1-1.391 3.153l-1.582 1.419a.503.503 0 0 1-.684-.016l-8.334-8.21a.502.502 0 0 1 .35-.856"
    />
  </Svg>
);
export default IconlystNoFilterBold;
