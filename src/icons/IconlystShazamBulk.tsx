import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShazamBulk = ({
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
      d="M16.216 2.5H7.782C4.622 2.5 2.5 4.723 2.5 8.031v7.939c0 3.308 2.122 5.53 5.282 5.53h8.433c3.161 0 5.285-2.222 5.285-5.53V8.031c0-3.308-2.123-5.531-5.284-5.531"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m13.487 17.412 3.017-3.02a3.47 3.47 0 0 0 1.027-2.476 3.47 3.47 0 0 0-1.027-2.476 3.514 3.514 0 0 0-4.95 0L9.71 11.28a.75.75 0 1 0 1.06 1.06l1.842-1.838a2.013 2.013 0 0 1 2.833 0c.378.376.586.878.586 1.414 0 .537-.208 1.039-.587 1.415l-3.018 3.02a.75.75 0 1 0 1.061 1.06"
    />
    <Path
      fill={props.color}
      d="M7.495 9.61c-1.365 1.359-1.366 3.58 0 4.953A3.5 3.5 0 0 0 9.97 15.58c.896 0 1.793-.34 2.477-1.02l1.843-1.84a.749.749 0 1 0-1.06-1.06l-1.842 1.838a2.01 2.01 0 0 1-2.832.003 2.004 2.004 0 0 1 0-2.831l3.017-3.02a.75.75 0 1 0-1.06-1.06z"
    />
  </Svg>
);
export default IconlystShazamBulk;
