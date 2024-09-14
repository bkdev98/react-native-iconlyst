import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle4Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M10.418 20.15h-.01a.995.995 0 0 0-.995 1c0 .553.453 1 1.005 1a1 1 0 1 0 0-2M6.263 17.937a1 1 0 0 0-1.36.404 1 1 0 1 0 1.756.957l.006-.01a.994.994 0 0 0-.402-1.35M9.822 4.021l.005-.01A.99.99 0 0 0 9.43 2.66a1.004 1.004 0 0 0-.966 1.757.996.996 0 0 0 1.358-.395M5.945 6.684l.006-.01a.995.995 0 0 0-.346-1.367 1.006 1.006 0 0 0-1.375.348 1 1 0 1 0 1.715 1.03M3.019 11.37a1 1 0 0 0 .896-.553l.004-.009a.995.995 0 0 0-.45-1.337 1.007 1.007 0 0 0-1.344.452 1 1 0 0 0 .894 1.447M3.783 14.128a1.004 1.004 0 0 0-1.375.348 1 1 0 1 0 1.715 1.029l.006-.01a.995.995 0 0 0-.346-1.367" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.598 19.922a1 1 0 0 0-1.383.294l-.007.01a.996.996 0 0 0 .838 1.539c.329 0 .653-.163.845-.46a1 1 0 0 0-.293-1.383M19.427 17.272a1 1 0 0 0-1.372.343l-.006.01a.995.995 0 0 0 .855 1.508c.343 0 .677-.175.866-.489a1 1 0 0 0-.343-1.372M19.075 5.995a1 1 0 1 0-1.715-1.029l-.006.01a.996.996 0 0 0 .856 1.508c.342 0 .677-.176.865-.489M14.587 3.15c0-.553-.453-1-1.005-1a1 1 0 1 0 0 2h.01a.995.995 0 0 0 .994-1M20.727 10.313c.357 0 .704-.19.886-.525a1 1 0 0 0-1.756-.957l-.006.01a.994.994 0 0 0 .402 1.351 1 1 0 0 0 .474.121M21.495 13.073a1 1 0 0 0-1.372.343l-.006.01a.995.995 0 0 0 .856 1.508c.342 0 .677-.175.865-.489a1 1 0 0 0-.343-1.372"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoadingCircle4Bulk;
