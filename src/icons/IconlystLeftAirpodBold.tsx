import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftAirpodBold = ({
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
      d="M21.535 7.277c0-1.325-.639-2.547-1.59-3.42s-2.234-1.413-3.548-1.352h-.002a4.54 4.54 0 0 0-3.391 1.805c-.32.424-.475.947-.475 1.468v2.448c0 .519.152 1.042.474 1.466a4.85 4.85 0 0 0 3.85 1.9h.91v6.275c0 1.044.843 1.892 1.886 1.892a1.89 1.89 0 0 0 1.886-1.892zm-5.769-1.703c.433 0 .784.35.784.783v1.428a.784.784 0 1 1-1.568 0V6.357c0-.432.351-.783.784-.783"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M5.461 6.674a3.683 3.683 0 0 1 4.213-3.07 1.045 1.045 0 1 1-.328 2.063A1.593 1.593 0 0 0 7.526 7a1.045 1.045 0 1 1-2.065-.325"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.465 15.944c0-3.069 2.478-5.556 5.536-5.556 3.056 0 5.536 2.487 5.536 5.556S11.057 21.5 8.001 21.5c-3.058 0-5.536-2.488-5.536-5.556m5.363-2.36a.784.784 0 0 0-1.567 0V17.6c0 .433.35.784.784.784h2.42a.784.784 0 1 0 0-1.567H7.828z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftAirpodBold;
