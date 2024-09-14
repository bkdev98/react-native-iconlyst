import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoadTrackBulk = ({
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
      d="M20.95 9.063c.012-.044.037-.08.042-.126.003-.022-.006-.04-.004-.063 0-.02.012-.04.012-.062 0-.049-.021-.093-.028-.14-.01-.063-.016-.125-.036-.185-.022-.06-.054-.113-.086-.169-.033-.057-.064-.11-.107-.16-.014-.016-.02-.038-.036-.053l-2.732-2.732a.999.999 0 1 0-1.414 1.414l.9.9c-3.954.108-6.382 1.693-7.782 3.151-2.728 2.842-3.264 6.791-2.96 8.612a1 1 0 1 0 1.973-.329c-.195-1.165.148-4.52 2.43-6.897 1.6-1.666 3.817-2.505 6.587-2.536l-1.148 1.15a.999.999 0 1 0 1.414 1.413l2.732-2.732c.028-.028.04-.065.064-.095.044-.057.086-.11.118-.177.029-.059.044-.12.06-.184"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M19.733 14.936a1 1 0 0 0-1.414 0l-1.343 1.342-1.342-1.342a.999.999 0 1 0-1.414 1.414l1.342 1.342-1.342 1.342a1 1 0 0 0 1.414 1.414l1.342-1.342 1.343 1.342a.999.999 0 1 0 1.414-1.414l-1.343-1.342 1.343-1.342a1 1 0 0 0 0-1.414M6.277 7.812A1.28 1.28 0 0 1 5 6.536c0-.704.573-1.277 1.277-1.277s1.276.573 1.276 1.277-.572 1.276-1.276 1.276m3.276-1.276a3.28 3.28 0 0 0-3.276-3.277A3.28 3.28 0 0 0 3 6.536a3.28 3.28 0 0 0 3.277 3.276 3.28 3.28 0 0 0 3.276-3.276" />
    </G>
  </Svg>
);
export default IconlystRoadTrackBulk;
