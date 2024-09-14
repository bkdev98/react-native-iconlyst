import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessengerBold = ({
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
      d="m16.395 10.831-2.548 4.34a.5.5 0 0 1-.72.155l-2.494-1.765-2.596 1.323a.502.502 0 0 1-.659-.699l2.548-4.349a.5.5 0 0 1 .723-.154l2.493 1.774 2.595-1.323a.501.501 0 0 1 .658.698m4.936-.135c-.71-3.787-3.735-6.809-7.522-7.519a9.5 9.5 0 0 0-7.857 2.018 9.49 9.49 0 0 0-3.45 7.314c0 1.423.323 2.837.961 4.196a.55.55 0 0 1 .044.347c-.155.71-.482 2.135-.72 3.156a1.242 1.242 0 0 0 1.52 1.485c.947-.239 2.251-.558 3.07-.75a.52.52 0 0 1 .35.052 9.56 9.56 0 0 0 4.275 1.014 9.48 9.48 0 0 0 7.309-3.449 9.52 9.52 0 0 0 2.02-7.864"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessengerBold;
