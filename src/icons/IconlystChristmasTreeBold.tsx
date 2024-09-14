import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasTreeBold = ({
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
      d="M15.003 8.68c.245.023.398-.248.264-.453a51 51 0 0 1-2.818-4.96.501.501 0 0 0-.895 0 55 55 0 0 1-1.93 3.535.294.294 0 0 0 .116.415c1.514.762 3.502 1.306 5.263 1.464M19.003 17.22a20 20 0 0 1-2.12-2.74.31.31 0 0 0-.412-.1c-3.042 1.68-7.954 1.864-9.909 1.864q-.352 0-.562-.006a.3.3 0 0 0-.243.112q-.37.45-.76.87a.498.498 0 0 0 .366.84h5.59a.3.3 0 0 1 .3.3v3.13a.75.75 0 0 0 1.5 0v-3.13a.3.3 0 0 1 .3-.3h5.584a.498.498 0 0 0 .366-.84M6.383 12.744h1.6a.1.1 0 0 1 .087.146 22 22 0 0 1-.813 1.37c-.13.204.015.473.257.466 2.226-.067 6.083-.39 8.38-1.744a.083.083 0 0 0 .03-.113.083.083 0 0 1 .073-.125h1.62a.498.498 0 0 0 .38-.825 32 32 0 0 1-1.257-1.577.3.3 0 0 0-.26-.121q-.23.012-.469.013c-2.266 0-5.067-.692-7.107-1.758a.307.307 0 0 0-.4.1 34 34 0 0 1-2.5 3.343.499.499 0 0 0 .38.825"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasTreeBold;
