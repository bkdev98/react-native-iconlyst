import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZoomInBold = ({
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
      d="M4.97 9.91h-.129l2.953-2.955v.179a.794.794 0 0 0 1.588 0V5.037q-.002-.005-.003-.014a.794.794 0 0 0-.488-.719.8.8 0 0 0-.232-.046c-.024-.002-.045-.015-.07-.015H6.532a.794.794 0 0 0 0 1.588h.14L3.708 8.797v-.154a.794.794 0 0 0-1.588 0v2.06c0 .335.21.62.505.736.005.002.013 0 .02.004.084.03.173.054.269.054H4.97a.794.794 0 0 0 0-1.588M21.495 11.625c-.95-2.568-4.356-2.446-6.709-2.671l-.067-4.348a1.68 1.68 0 0 0-3.361.025v9.913a.644.644 0 0 1-.967.558L9.16 14.39a1.962 1.962 0 0 0-2.896 1.273 1.87 1.87 0 0 0 .676 1.903c1.019.776 2.722 1.991 4.347 2.767 2.543 1.215 6.626.895 8.548-1.028 1.677-1.677 2.62-5.096 1.661-7.68"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystZoomInBold;
