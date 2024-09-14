import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoteLockBold = ({
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
      d="M7.564 9.725a.75.75 0 0 1 0-1.5h5.082a.75.75 0 0 1 0 1.5zm2.652 4.44H7.562a.75.75 0 1 1 0-1.5h2.654a.75.75 0 0 1 0 1.5m3.176 1.57a.33.33 0 0 0 .1-.212c.146-1.935 1.692-3.414 3.622-3.435.644.001 1.25.175 1.784.473.218.122.512-.024.512-.275V7.268a4.625 4.625 0 0 0-4.62-4.62H7.693a4.624 4.624 0 0 0-4.619 4.62v9.761a4.624 4.624 0 0 0 4.62 4.62h4.668c.24 0 .389-.274.29-.493a3.4 3.4 0 0 1-.306-1.408v-1.58c0-.957.406-1.816 1.046-2.434"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.426 19.85a.643.643 0 0 1-.65.65h-2.82a.64.64 0 0 1-.65-.65v-1.58a.65.65 0 0 1 .65-.65h2.82c.358 0 .65.292.65.65zm-2.993-3.986a.94.94 0 0 1 .921-.924c.498-.029.94.407.946.91v.27h-1.867zm3.367.527v-.55a2.44 2.44 0 0 0-2.436-2.4h-.026c-1.303.013-2.382 1.088-2.405 2.41v.54a2.14 2.14 0 0 0-1.127 1.88v1.58a2.15 2.15 0 0 0 2.15 2.148h2.82c1.186 0 2.15-.963 2.15-2.149v-1.58c0-.813-.459-1.514-1.126-1.879"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNoteLockBold;
