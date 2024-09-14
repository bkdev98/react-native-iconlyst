import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDotBarChartLineOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.09 8.394a.864.864 0 0 0-.613 1.469q.038.032.07.067a.86.86 0 0 0 1.172-.08.864.864 0 0 0-.629-1.457m2.063 2.02a2.364 2.364 0 1 0-4.12.011l-1.981 2.384a2.364 2.364 0 1 0 1.118 1.002l1.981-2.383c.288.124.606.194.94.194.338 0 .66-.072.951-.2l1.884 2.218a2.35 2.35 0 0 0-.3 1.156v.016a2.357 2.357 0 0 0 2.365 2.348h-.002v-.75l.003.75h-.001a2.364 2.364 0 0 0 2.056-3.528l1.861-2.221a2.364 2.364 0 1 0-1.1-1.023l-1.876 2.24a2.4 2.4 0 0 0-.943-.196c-.338 0-.66.07-.952.2zm2.204 3.792a1 1 0 0 0 .09-.083.86.86 0 0 1 1.173.082.864.864 0 0 1-.63 1.455h-.004a.857.857 0 0 1-.86-.854v-.01c0-.228.087-.435.231-.59m4.951-4.305-.046-.045a.864.864 0 1 1 .047.045M5.654 14.306a1 1 0 0 0 .089.08.864.864 0 1 1-.088-.081"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDotBarChartLineOutline;
