import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEuroBold = ({
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
      d="M15.71 17.058c-1.822.04-3.483-.79-4.5-2.24h4.038a1 1 0 1 0 0-2h-4.864a4.7 4.7 0 0 1 .001-1.52h4.863a1 1 0 1 0 0-2h-4.037c1.017-1.449 2.683-2.283 4.499-2.232.517.042 1.016-.407 1.037-.96a1 1 0 0 0-.961-1.038 7.25 7.25 0 0 0-6.592 3.66c-.104.184-.187.377-.273.57h-.669a1 1 0 1 0 0 2h.122a7 7 0 0 0 0 1.52h-.122a1 1 0 1 0 0 2h.669c.086.193.171.387.276.574a7.24 7.24 0 0 0 6.589 3.664 1 1 0 0 0 .961-1.037c-.021-.553-.52-1.012-1.037-.96"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEuroBold;
