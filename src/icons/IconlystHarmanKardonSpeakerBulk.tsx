import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHarmanKardonSpeakerBulk = ({
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
      d="M8.364 15.185a.2.2 0 0 0 .198-.083 4.24 4.24 0 0 1 3.434-1.736c1.382 0 2.647.652 3.442 1.736a.2.2 0 0 0 .198.083 23.7 23.7 0 0 0 4.208-1.103.2.2 0 0 0 .13-.187V9.328c.003-1.969-.096-3.842-1.364-5.112C17.427 3.029 15.392 2.5 12.015 2.5c-7.415 0-7.99 2.83-7.99 6.827v4.568c0 .083.053.158.131.187 1.399.507 2.802.869 4.208 1.103"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.04 6.07c0-1.343-2.613-1.954-5.04-1.954s-5.04.611-5.04 1.953S9.575 8.022 12 8.022s5.04-.61 5.04-1.953M10.573 15.281c-.078.049-.046.163.046.169q1.38.087 2.76 0c.092-.006.124-.12.045-.169a2.7 2.7 0 0 0-1.429-.415 2.7 2.7 0 0 0-1.422.415M4.181 15.665c2.597.884 5.208 1.346 7.82 1.346s5.225-.463 7.822-1.347a.1.1 0 0 1 .133.098c-.059 1.557-.316 2.99-1.347 4.023-1.183 1.186-3.217 1.715-6.595 1.715-6.719 0-7.817-2.326-7.965-5.735a.1.1 0 0 1 .132-.1"
    />
  </Svg>
);
export default IconlystHarmanKardonSpeakerBulk;
