import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightUpCircleBulk = ({
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
      d="M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m8.521 13.542-.007-4.28v-.02a.74.74 0 0 1 .205-.496l.002-.004.012-.012c.005-.003.015-.01.012-.012l.003-.001a.75.75 0 0 1 .504-.206h.014l4.277.01a.751.751 0 0 1-.003 1.5l-2.462-.007 4.19 4.19a.75.75 0 0 1-1.06 1.061l-4.191-4.19.004 2.465a.749.749 0 1 1-1.5.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightUpCircleBulk;
