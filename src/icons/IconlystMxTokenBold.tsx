import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMxTokenBold = ({
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
      d="M20.04 16.17c-.28.48-.79.77-1.35.77-.54 0-1.03-.27-1.31-.73h-.01L13.1 9.39l1.12-1.8c.2-.31.53-.48.89-.48a1 1 0 0 1 .87.51l4.06 7c.28.48.28 1.06 0 1.55m1.3-2.3-4.06-7a2.53 2.53 0 0 0-2.14-1.26h-.05c-.87 0-1.67.44-2.14 1.19l-.74 1.18-.76-1.22c-.47-.76-1.3-1.19-2.18-1.19-.89.01-1.7.48-2.14 1.26l-4.54 7.82c-.46.79-.46 1.73 0 2.53a2.5 2.5 0 0 0 2.19 1.26h13.91c.05 0 .1 0 .15-.01 1.05-.04 1.97-.6 2.5-1.51.55-.96.55-2.1 0-3.05"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMxTokenBold;
