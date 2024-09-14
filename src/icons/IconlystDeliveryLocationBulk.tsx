import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryLocationBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.475 10.563c.392 0 .779.038 1.152.115.196.04.387-.104.387-.304l-.01-2.911c0-1.64-.55-3.08-1.54-4.07-.95-.94-2.23-1.43-3.72-1.43h-.339a.3.3 0 0 0-.3.3l.02 7.83c0 .24-.12.47-.31.61a.77.77 0 0 1-.67.11l-2.6-.85-2.62.87c-.07.02-.15.03-.23.03a.7.7 0 0 1-.44-.14.72.72 0 0 1-.31-.6l-.01-7.85a.3.3 0 0 0-.3-.3h-.34c-3.15.02-5.26 2.23-5.26 5.52v.02l.01 7.94c.01 1.59.5 2.95 1.43 3.95.95 1.02 2.28 1.56 3.84 1.56h.02l7.36-.028c.244 0 .387-.277.256-.482-.857-1.346-1.406-2.836-1.406-3.96 0-3.27 2.66-5.93 5.93-5.93"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.305 8.466a.75.75 0 0 1 .467 0l1.848.6-.012-6.802a.3.3 0 0 0-.301-.3l-3.574.009a.3.3 0 0 0-.3.3l.008 6.808zM19.478 20.5c-.701-.365-2.688-2.204-2.688-4.002a2.688 2.688 0 0 1 5.376 0c0 1.798-1.987 3.637-2.688 4.003m0-8.182a4.19 4.19 0 0 0-4.187 4.18c0 2.723 3.109 5.54 4.187 5.54s4.187-2.817 4.187-5.54a4.19 4.19 0 0 0-4.187-4.18"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.506 15.427a1.011 1.011 0 1 0 0 2.023 1.011 1.011 0 0 0 0-2.023"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryLocationBulk;
