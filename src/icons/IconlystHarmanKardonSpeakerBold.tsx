import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHarmanKardonSpeakerBold = ({
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
      d="M12 4.116c2.427 0 5.04.611 5.04 1.953S14.427 8.022 12 8.022s-5.04-.611-5.04-1.953S9.575 4.116 12 4.116M8.365 15.185a.2.2 0 0 0 .198-.083 4.24 4.24 0 0 1 3.434-1.736c1.382 0 2.647.652 3.442 1.736a.2.2 0 0 0 .198.083 23.7 23.7 0 0 0 4.208-1.103.2.2 0 0 0 .13-.187V9.328c.003-1.969-.096-3.842-1.364-5.112C17.427 3.029 15.392 2.5 12.015 2.5c-7.415 0-7.99 2.83-7.99 6.827v4.568c0 .083.053.158.131.187 1.399.507 2.802.869 4.208 1.103"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.573 15.28c-.078.05-.046.164.046.17q1.38.087 2.76 0c.092-.006.124-.12.045-.17a2.7 2.7 0 0 0-1.429-.414c-.518 0-1.001.155-1.422.415M12 17.011c-2.611 0-5.222-.462-7.819-1.345a.1.1 0 0 0-.132.099c.148 3.409 1.246 5.735 7.965 5.735 3.378 0 5.412-.529 6.595-1.715 1.031-1.033 1.288-2.466 1.346-4.023a.1.1 0 0 0-.132-.098c-2.598.884-5.21 1.347-7.823 1.347"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHarmanKardonSpeakerBold;
