import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunStarTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.115 8.731.085.23a5 5 0 0 0 2.954 2.954l.23.085-.23.085a5 5 0 0 0-2.954 2.954l-.085.23-.085-.23a5 5 0 0 0-2.954-2.954L8.846 12l.23-.085a5 5 0 0 0 2.954-2.954z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.114 2.75a3.022 3.022 0 0 0 4.625 1.24 3.022 3.022 0 0 0 3.386 3.385A3.022 3.022 0 0 0 21.365 12a3.022 3.022 0 0 0-1.24 4.625 3.022 3.022 0 0 0-3.386 3.386 3.022 3.022 0 0 0-4.625 1.239 3.022 3.022 0 0 0-4.625-1.24 3.022 3.022 0 0 0-3.385-3.385A3.022 3.022 0 0 0 2.864 12a3.022 3.022 0 0 0 1.24-4.625 3.022 3.022 0 0 0 3.385-3.386 3.022 3.022 0 0 0 4.625-1.239"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSunStarTwoTone;
