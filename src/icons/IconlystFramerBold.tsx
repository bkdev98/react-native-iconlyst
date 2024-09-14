import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFramerBold = ({
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
      d="M19.15 2.891v5.853a.64.64 0 0 1-.641.641h-6.462c1.651 1.649 4.524 4.486 6.06 6.037a.64.64 0 0 1-.458 1.09h-4.975a.64.64 0 0 0-.642.641v4.972a.64.64 0 0 1-1.09.457 1035 1035 0 0 1-5.734-5.693c-.156-.157-.339-.385-.341-.582-.022-2.073-.017-4.159-.016-6.279 0-.354.287-.643.641-.643h6.555a8042 8042 0 0 0-6.055-6.04.64.64 0 0 1 .452-1.095h12.065c.354 0 .641.287.641.641"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFramerBold;
