import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaySquareBold = ({
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
      d="M11.3 9.63a.9.9 0 0 0-.338-.075.5.5 0 0 0-.259.064c-.179.103-.24.308-.26.463a18 18 0 0 0 .002 3.853c.014.113.067.344.245.449.148.089.37.08.62-.017a9.4 9.4 0 0 0 2.75-1.744c.148-.138.323-.358.322-.628 0-.268-.174-.482-.319-.614A9.2 9.2 0 0 0 11.3 9.63"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.079 13.724-.004.004a10.9 10.9 0 0 1-3.206 2.03c-.316.126-.63.188-.932.188-.363 0-.707-.091-1.012-.271-.54-.321-.885-.879-.971-1.572a19.8 19.8 0 0 1 0-4.201c.091-.708.447-1.266 1.003-1.585.566-.323 1.267-.349 1.923-.07a10.7 10.7 0 0 1 3.198 2.029c.515.47.802 1.08.804 1.713.003.635-.282 1.252-.803 1.735M16.217 2.5H7.782C4.622 2.5 2.5 4.721 2.5 8.026v7.948c0 3.306 2.122 5.526 5.282 5.526h8.434c3.16 0 5.284-2.22 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaySquareBold;
