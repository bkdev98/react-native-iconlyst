import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle4Bold = ({
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
      d="M10.418 20.871h-.01a.995.995 0 0 0-.995 1c0 .553.453 1 1.005 1a1 1 0 1 0 0-2M15.598 20.643a1 1 0 0 0-1.383.293l-.007.01a.996.996 0 0 0 .838 1.54c.329 0 .653-.163.845-.46a1 1 0 0 0-.293-1.384M6.263 18.658a1 1 0 0 0-1.36.404 1 1 0 1 0 1.756.957l.006-.01a.994.994 0 0 0-.402-1.35M19.427 17.993a1 1 0 0 0-1.372.343l-.006.01a.995.995 0 0 0 .856 1.508c.342 0 .677-.175.865-.489a1 1 0 0 0-.343-1.372M9.822 4.742l.005-.01A.99.99 0 0 0 9.43 3.38a1.004 1.004 0 0 0-.966 1.757.996.996 0 0 0 1.358-.395M5.945 7.405l.006-.01a.995.995 0 0 0-.346-1.367 1.006 1.006 0 0 0-1.375.348 1 1 0 1 0 1.715 1.03M19.075 6.716a1 1 0 1 0-1.715-1.03l-.006.01a.996.996 0 0 0 .856 1.509c.342 0 .677-.176.865-.49M14.587 3.871c0-.553-.453-1-1.005-1a1 1 0 1 0 0 2h.01a.995.995 0 0 0 .995-1M20.727 11.034c.357 0 .704-.19.886-.525a1 1 0 0 0-1.756-.957l-.006.01a.994.994 0 0 0 .402 1.351 1 1 0 0 0 .474.121M3.019 12.09a1 1 0 0 0 .896-.552l.004-.01a.995.995 0 0 0-.45-1.336 1.007 1.007 0 0 0-1.344.452 1 1 0 0 0 .894 1.447M3.783 14.849a1.004 1.004 0 0 0-1.375.348 1 1 0 1 0 1.715 1.029l.006-.01a.995.995 0 0 0-.346-1.367M21.495 13.794a1 1 0 0 0-1.372.343l-.006.01a.995.995 0 0 0 .856 1.508c.342 0 .677-.175.865-.49a1 1 0 0 0-.343-1.371"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoadingCircle4Bold;
