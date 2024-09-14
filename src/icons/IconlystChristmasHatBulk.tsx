import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasHatBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M18.692 12.454c.036.152-.053.306-.193.378a1.7 1.7 0 0 0-.352.243c-.12.11-.31.19-.47.2a1.71 1.71 0 0 0-1.622 1.641c-.02.175-.22.222-.356.111-1.697-1.382-3.392-4.312-4.172-6.082a.56.56 0 0 0-.73-.29c-.28.13-.41.46-.29.74.066.142 1.186 2.659 2.81 4.75.134.17.054.424-.158.469-2.112.447-6.237.552-8.672-.1a.29.29 0 0 1-.213-.278 14.4 14.4 0 0 1 .413-3.381c.11-.42.25-.85.4-1.27.49-1.29 1.24-2.51 2.33-3.39.34-.28.71-.52 1.12-.71a6 6 0 0 1 1.73-.56c.83-.14 1.59-.17 2.27-.11.46.04.9.12 1.3.24 1.35.39 2.32 1.17 2.99 2.02.29.36.52.74.7 1.1.2.42.34.83.42 1.18z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.477 9.445c-.42.7-1.26 1.47-2.95 1.47q-.39 0-.84-.06c.11-.42.25-.85.4-1.27 1.12.11 1.89-.16 2.27-.8.45-.76.32-1.9.06-2.59.34-.28.71-.52 1.12-.71.47 1.05.65 2.75-.06 3.96M17.527 8.175c-.7.41-1.32.56-1.84.56-.54 0-.99-.16-1.33-.36-1.26-.74-1.89-2.51-1.82-3.56.46.04.9.12 1.3.24.03.61.42 1.76 1.18 2.2.49.29 1.1.23 1.81-.18.29.36.52.74.7 1.1M12.233 18.705a1.67 1.67 0 0 1-2.129 0 .37.37 0 0 0-.469 0 1.66 1.66 0 0 1-1.064.384 1.66 1.66 0 0 1-1.065-.384.365.365 0 0 0-.468 0 .65.65 0 0 1-.83-1 1.67 1.67 0 0 1 2.13 0 .37.37 0 0 0 .467 0 1.67 1.67 0 0 1 2.13 0 .37.37 0 0 0 .468 0 .65.65 0 1 1 .83 1m3.823-.56a.83.83 0 0 0-.2-.48 1.68 1.68 0 0 1-.423-1.224.35.35 0 0 0-.14-.308 7 7 0 0 1-.715-.59.32.32 0 0 0-.327-.069c-1.134.397-3.143.62-5.215.62-2.05 0-4.15-.22-5.49-.71a.55.55 0 0 1-.36-.49q-.03-.45-.02-.966c.005-.225-.226-.382-.41-.253-.736.511-.99 1.353-.99 2.92 0 3.24 1.41 3.85 8.89 3.85 2.597 0 4.459-.15 5.785-.48.28-.07.296-.521.095-.729a1.67 1.67 0 0 1-.48-1.091M21.883 15.598a.44.44 0 0 1-.107-.258 1.38 1.38 0 0 0-1.303-1.302.43.43 0 0 1-.256-.105 1.377 1.377 0 0 0-1.84 0 .43.43 0 0 1-.256.105h-.002a1.383 1.383 0 0 0-1.301 1.302.44.44 0 0 1-.107.258 1.384 1.384 0 0 0 .001 1.841.44.44 0 0 1 .106.257 1.383 1.383 0 0 0 1.302 1.301.45.45 0 0 1 .257.106c.258.235.589.351.92.351s.662-.116.92-.35a.44.44 0 0 1 .258-.107 1.38 1.38 0 0 0 1.301-1.3.44.44 0 0 1 .107-.259 1.38 1.38 0 0 0 0-1.84"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasHatBulk;