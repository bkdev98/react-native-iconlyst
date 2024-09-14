import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightAirpodBold = ({
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
      d="M2.465 7.277c0-1.325.639-2.547 1.59-3.42S6.29 2.444 7.604 2.505h.002a4.54 4.54 0 0 1 3.391 1.805c.32.424.475.947.475 1.468v2.448c0 .519-.152 1.042-.474 1.466a4.85 4.85 0 0 1-3.85 1.9h-.91v6.275a1.89 1.89 0 0 1-1.886 1.892 1.89 1.89 0 0 1-1.886-1.892zm5.769-1.703a.784.784 0 0 0-.784.783v1.428a.784.784 0 0 0 1.568 0V6.357a.784.784 0 0 0-.784-.783"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M18.539 6.674a3.683 3.683 0 0 0-4.213-3.07 1.045 1.045 0 1 0 .328 2.063A1.593 1.593 0 0 1 16.474 7a1.045 1.045 0 1 0 2.065-.325M15.615 14.701v.915h.75a.457.457 0 0 0 0-.915z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16 10.388c3.057 0 5.535 2.487 5.535 5.556S19.057 21.5 16 21.5c-3.056 0-5.536-2.488-5.536-5.556s2.48-5.556 5.536-5.556m-1.135 2.813a.75.75 0 0 0-.75.75v4.231a.75.75 0 0 0 1.5 0v-1.066h.055l.936 1.47a.75.75 0 0 0 1.265-.806l-.573-.9a1.957 1.957 0 0 0-.933-3.679z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightAirpodBold;
