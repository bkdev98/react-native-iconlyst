import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle2Bold = ({
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
      d="M4.423 15.77a7.8 7.8 0 0 1-.433-1.61 1 1 0 1 0-1.977.302c.104.684.288 1.367.546 2.031a1 1 0 0 0 1.294.571 1 1 0 0 0 .57-1.294M2.865 12.38q.079.01.154.011a1 1 0 0 0 .987-.848 7.6 7.6 0 0 1 .48-1.738 1 1 0 0 0-1.846-.768 9.5 9.5 0 0 0-.61 2.201 1 1 0 0 0 .835 1.141M5.034 8.001a1 1 0 0 0 .771-.363 8.4 8.4 0 0 1 1.08-1.07A1 1 0 0 0 5.6 5.033c-.514.432-.963.88-1.337 1.33a1 1 0 0 0 .771 1.637M8.736 5.36a1 1 0 0 0 .37-.07 6.8 6.8 0 0 1 1.593-.418 1 1 0 1 0-.281-1.981 9 9 0 0 0-2.053.54.999.999 0 0 0 .37 1.93M15.346 3.336a9.6 9.6 0 0 0-1.765-.444 1.01 1.01 0 0 0-1.136.842 1 1 0 0 0 .843 1.136c.448.067.906.183 1.39.351 4.177 1.511 6.35 6.14 4.842 10.32-1.509 4.178-6.14 6.35-10.32 4.841a8.2 8.2 0 0 1-2.552-1.49 6.7 6.7 0 0 1-.924-.947 1 1 0 0 0-1.56 1.252c.371.462.777.877 1.196 1.224a10.2 10.2 0 0 0 3.16 1.841c1.124.406 2.276.6 3.41.6 4.12-.002 7.993-2.55 9.471-6.64 1.882-5.219-.829-10.997-6.055-12.886"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoadingCircle2Bold;
