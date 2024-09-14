import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMountaineerBold = ({
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
      d="M9.186 16.09a1 1 0 0 0-1.32.507L6.2 20.344a1 1 0 0 0 1.827.813l1.666-3.747a1 1 0 0 0-.507-1.32M11.024 7.158a2.457 2.457 0 0 0 2.455-2.453 2.457 2.457 0 0 0-2.455-2.455 2.457 2.457 0 0 0-2.455 2.455 2.457 2.457 0 0 0 2.455 2.453M16.886 7.047a1 1 0 0 0-1 1v.872q-.038.02-.075.041c-.562.317-1.045.585-1.514.565-.31-.019-.666-.134-1.043-.257-.707-.229-1.587-.512-2.555-.25-1.378.373-2.321 1.566-2.403 3.04-.096 1.738 1.03 2.743 1.935 3.552.457.407.888.793 1.13 1.22.57 1.008.596 2.363.62 3.673l.005.265a1 1 0 0 0 1 .98h.02c.553-.012.99-.469.98-1.02l-.005-.263c-.028-1.486-.06-3.17-.88-4.62-.403-.714-1.006-1.253-1.538-1.727-.84-.749-1.311-1.209-1.27-1.95.016-.296.139-1.006.929-1.22.397-.107.869.046 1.415.223.458.148.977.316 1.542.351.643.038 1.204-.134 1.707-.358v9.586a1 1 0 0 0 2 0V8.047a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMountaineerBold;
