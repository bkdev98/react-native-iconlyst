import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaySquareBulk = ({
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
      d="M16.787 2.5H8.352c-3.16 0-5.282 2.221-5.282 5.526v7.948c0 3.306 2.122 5.526 5.282 5.526h8.434c3.16 0 5.284-2.22 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.65 13.724-.005.004a10.9 10.9 0 0 1-3.206 2.03c-.316.126-.63.188-.932.188-.363 0-.707-.091-1.012-.271-.54-.321-.885-.88-.97-1.572a19.8 19.8 0 0 1 0-4.201c.09-.708.446-1.266 1.002-1.585.566-.323 1.267-.35 1.923-.07a10.7 10.7 0 0 1 3.198 2.029c.515.47.802 1.08.804 1.713.003.635-.282 1.252-.803 1.735m-4.118-4.17q.16.001.338.077a9.2 9.2 0 0 1 2.763 1.75c.145.132.318.346.32.614 0 .27-.175.49-.323.628a9.4 9.4 0 0 1-2.75 1.744c-.25.098-.472.106-.62.017-.178-.105-.23-.336-.245-.45a18 18 0 0 1-.003-3.852c.02-.155.082-.36.261-.463a.5.5 0 0 1 .26-.064"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaySquareBulk;
