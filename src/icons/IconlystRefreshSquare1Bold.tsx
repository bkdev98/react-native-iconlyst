import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshSquare1Bold = ({
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
      d="m17.633 10.27-.964 2.279a.75.75 0 0 1-.982.398l-2.266-.958a.75.75 0 0 1-.398-.984.753.753 0 0 1 .982-.399l.806.341c-.537-1.244-1.78-2.126-3.207-2.126a3.497 3.497 0 0 0-3.494 3.492 3.5 3.5 0 0 0 3.494 3.496 3.5 3.5 0 0 0 2.579-1.136.75.75 0 0 1 1.105 1.015 5.02 5.02 0 0 1-3.684 1.62 5 5 0 0 1-4.994-4.994 5 5 0 0 1 4.994-4.993 4.95 4.95 0 0 1 4.471 2.783l.177-.418a.75.75 0 1 1 1.381.585m-1.416-7.457H7.782C4.623 2.813 2.5 5.034 2.5 8.339v7.949c0 3.305 2.123 5.525 5.282 5.525h8.434c3.16 0 5.284-2.22 5.284-5.525V8.339c0-3.304-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshSquare1Bold;
