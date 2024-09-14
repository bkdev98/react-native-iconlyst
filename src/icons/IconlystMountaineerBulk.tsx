import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMountaineerBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.886 7.047a1 1 0 0 0-1 1v.872l-.075.04c-.562.318-1.045.586-1.514.566-.309-.02-.666-.134-1.043-.257-.707-.23-1.587-.512-2.555-.25-1.378.373-2.321 1.566-2.403 3.039-.096 1.739 1.03 2.744 1.935 3.553.457.407.888.793 1.13 1.22.57 1.008.596 2.363.62 3.673l.005.265a1 1 0 0 0 1 .98h.021c.552-.012.99-.47.979-1.021l-.005-.262c-.028-1.486-.059-3.171-.879-4.62-.404-.714-1.007-1.253-1.539-1.727-.839-.75-1.311-1.21-1.27-1.95.016-.296.139-1.006.929-1.22.397-.107.869.046 1.415.223.458.148.977.316 1.542.35.643.039 1.204-.133 1.707-.357v9.586a1 1 0 0 0 2 0V8.047a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M9.186 16.09a1 1 0 0 0-1.32.507L6.2 20.344a1 1 0 0 0 1.827.813l1.666-3.747a1 1 0 0 0-.507-1.32M11.024 7.158a2.457 2.457 0 0 0 2.455-2.453 2.457 2.457 0 0 0-2.455-2.455A2.457 2.457 0 0 0 8.57 4.705a2.457 2.457 0 0 0 2.455 2.453" />
    </G>
  </Svg>
);
export default IconlystMountaineerBulk;
