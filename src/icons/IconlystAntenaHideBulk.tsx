import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaHideBulk = ({
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
      d="M21.717 20.466a1 1 0 0 0-.1-.12l-.57-.56v-.01L9.257 7.986a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.49 1.49-6.83 6.83c-.68.68-.88 1.67-.51 2.56.37.9 1.21 1.45 2.17 1.45h14.3c.49 0 .94-.15 1.31-.4l.43.43c.15.15.34.22.53.22s.38-.07.53-.22c.25-.25.29-.65.1-.94"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.167 4.726c0-.97-.56-1.8-1.45-2.17-.9-.37-1.88-.17-2.56.52l-5.218 5.209a.2.2 0 0 0 0 .283l8.887 8.887a.2.2 0 0 0 .341-.142z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAntenaHideBulk;
