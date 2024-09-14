import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterEditBold = ({
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
      d="M10.723 9.105a1.32 1.32 0 0 1-.408-1.107l.082-.76c.052-.474.247-.912.564-1.267l3.215-3.51a1.517 1.517 0 0 1 2.14-.085l.677.628c.296.274.468.647.483 1.051s-.127.79-.402 1.086L13.9 8.604a2.26 2.26 0 0 1-1.312.721l-.736.123a1.315 1.315 0 0 1-1.129-.343"
    />
    <Path
      fill={props.color}
      d="M18.54 6.502c.673-.726.99-1.685.915-2.651-.015-.194.138-.369.33-.335a3.244 3.244 0 0 1 2.695 3.19v1.399a4.38 4.38 0 0 1-1.442 3.242l-5.032 4.976c-.242.22-.373.512-.373.817v2.038c0 .856-.512 1.614-1.307 1.93l-1.93.769a2.07 2.07 0 0 1-1.935-.211 2.08 2.08 0 0 1-.91-1.72v-3.304c0-.284-.116-.562-.317-.763L4.78 11.915A4.35 4.35 0 0 1 3.48 8.808V6.707a3.256 3.256 0 0 1 3.252-3.252h3.141a.3.3 0 0 1 .221.502l-.624.682a4.24 4.24 0 0 0-1.06 2.386l-.083.758A3.3 3.3 0 0 0 9.35 10.56a3.3 3.3 0 0 0 2.833.86h.001l.732-.122a4.26 4.26 0 0 0 2.46-1.343z"
    />
  </Svg>
);
export default IconlystFilterEditBold;
