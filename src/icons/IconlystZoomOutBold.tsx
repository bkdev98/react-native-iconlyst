import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZoomOutBold = ({
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
      d="M6.091 7.767c.05.036.096.077.155.101q.147.06.301.06h2.056a.794.794 0 0 0 0-1.587h-.165l.732-.747a.795.795 0 0 0-1.135-1.111l-.694.708v-.153a.793.793 0 1 0-1.588 0v2.097l.001.004a.773.773 0 0 0 .235.559l.003.004c.03.029.066.041.099.065M5.714 8.334a.8.8 0 0 0-.172-.255l-.003-.004c-.025-.023-.056-.033-.083-.053-.055-.042-.109-.087-.175-.113-.067-.028-.14-.035-.211-.042-.03-.004-.056-.018-.087-.018H2.926a.794.794 0 0 0 0 1.587h.168l-.734.748a.794.794 0 1 0 1.134 1.11l.695-.708v.153a.794.794 0 0 0 1.588 0V8.642l-.001-.003a.8.8 0 0 0-.062-.305M21.484 11.625c-.95-2.568-4.357-2.446-6.71-2.671l-.066-4.348a1.68 1.68 0 0 0-3.362.025v9.913a.644.644 0 0 1-.966.558l-1.232-.712a1.962 1.962 0 0 0-2.896 1.273 1.87 1.87 0 0 0 .675 1.903c1.02.776 2.723 1.991 4.347 2.767 2.544 1.215 6.626.895 8.548-1.028 1.678-1.677 2.62-5.096 1.662-7.68"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystZoomOutBold;
