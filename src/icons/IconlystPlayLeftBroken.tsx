import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayLeftBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.107 18.696a25 25 0 0 0 2.711 1.314c2.272.737 3.58-.232 3.993-2.79.18-1.6.264-3.263.257-4.972a43 43 0 0 0-.257-4.974c-.399-2.567-1.723-3.51-3.993-2.79-2.791 1.125-6.465 3.484-8.495 5.323q-2.778 2.44 0 4.882a25 25 0 0 0 2.137 1.7"
    />
  </Svg>
);
export default IconlystPlayLeftBroken;
