import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSeenCheckmarkBold = ({
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
      d="M20.707 7.487a1 1 0 0 0-1.414 0l-7.098 7.098-3.196-3.195a1 1 0 0 0-1.414 1.414l.855.855-.928.928-2.805-2.805a.999.999 0 1 0-1.414 1.414l3.178 3.178c.278.28.648.434 1.041.434.394 0 .763-.154 1.038-.431l1.304-1.304 1.303 1.303c.278.277.647.429 1.038.429.393 0 .762-.153 1.038-.43L20.707 8.9a1 1 0 0 0 0-1.414"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.195 12.318a1 1 0 0 0 .707-.293l3.122-3.122a.999.999 0 1 0-1.414-1.414l-3.122 3.122a.999.999 0 0 0 .707 1.707"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSeenCheckmarkBold;
