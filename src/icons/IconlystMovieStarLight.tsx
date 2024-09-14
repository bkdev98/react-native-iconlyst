import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieStarLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.008 21H7.995c-2.8 0-4.544-1.977-4.544-4.775v-8.45C3.451 4.979 5.195 3 7.996 3h8.012c2.8 0 4.543 1.978 4.543 4.776v8.45c0 2.797-1.75 4.774-4.543 4.774M3.457 7.476h17.086m-11.52 0V3m5.953 4.476V3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.376 11.373 13 12.62c.062.124.18.208.316.227l1.396.2a.414.414 0 0 1 .233.707l-1.01.97a.41.41 0 0 0-.121.367l.239 1.369a.42.42 0 0 1-.61.438l-1.247-.648a.43.43 0 0 0-.39 0l-1.248.648a.419.419 0 0 1-.61-.438l.24-1.368a.41.41 0 0 0-.122-.367l-1.01-.97a.414.414 0 0 1 .233-.707l1.395-.201a.42.42 0 0 0 .317-.226l.624-1.247a.424.424 0 0 1 .751 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieStarLight;
