import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaylistLight = ({
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
      d="M6.108 20.02h5.953a3.11 3.11 0 0 0 3.108-3.108V7.088a3.11 3.11 0 0 0-3.108-3.108H6.108A3.11 3.11 0 0 0 3 7.088v9.824a3.11 3.11 0 0 0 3.108 3.108M21 8.922v6.155M18.082 6.543v10.915"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.214 13.732a1.73 1.73 0 1 1-3.46 0 1.73 1.73 0 0 1 3.46 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.215 13.73V8.538s.45 1.17 1.659 1.416"
    />
  </Svg>
);
export default IconlystPlaylistLight;
