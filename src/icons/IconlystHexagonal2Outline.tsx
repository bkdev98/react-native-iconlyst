import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonal2Outline = ({
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
      d="m13.842 2.677 5.686 3.281a3.19 3.19 0 0 1 1.592 2.76v6.564c0 1.138-.607 2.19-1.592 2.758l-5.686 3.283c-.985.57-2.2.57-3.185 0L4.971 18.04a3.19 3.19 0 0 1-1.592-2.758V8.717c0-1.137.607-2.19 1.592-2.758l5.686-3.282a3.19 3.19 0 0 1 3.185 0m-.75 1.299c-.521-.301-1.164-.301-1.685 0L5.721 7.258c-.52.3-.842.857-.842 1.46v6.564c0 .602.321 1.158.842 1.46l5.686 3.282c.521.301 1.164.301 1.685 0l5.686-3.283c.521-.3.842-.857.842-1.459V8.717c0-.602-.321-1.159-.842-1.46z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHexagonal2Outline;
