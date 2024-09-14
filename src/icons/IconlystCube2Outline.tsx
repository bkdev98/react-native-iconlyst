import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube2Outline = ({
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
      d="M13.093 3.976c-.521-.301-1.164-.301-1.685 0L5.722 7.258c-.52.3-.842.857-.842 1.459v6.565c0 .602.321 1.159.842 1.46l5.686 3.282c.52.3 1.164.301 1.684 0l5.687-3.283c.52-.3.842-.857.842-1.459V8.717c0-.602-.321-1.158-.842-1.46zm.75-1.3a3.19 3.19 0 0 0-3.185 0L4.972 5.96A3.19 3.19 0 0 0 3.38 8.717v6.565c0 1.138.607 2.19 1.592 2.759l5.685 3.281c.986.57 2.2.57 3.186 0l5.686-3.281a3.19 3.19 0 0 0 1.592-2.759V8.717c0-1.138-.607-2.19-1.592-2.758z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.765 13.436a.75.75 0 0 1-.274 1.024l-1.5.866a.75.75 0 0 1-.75-1.3l1.5-.865a.75.75 0 0 1 1.024.275M14.737 13.436a.75.75 0 0 1 1.025-.275l1.5.866a.75.75 0 1 1-.75 1.3l-1.5-.867a.75.75 0 0 1-.275-1.024M12.25 5.898a.75.75 0 0 1 .75.75v1.733a.75.75 0 0 1-1.5 0V6.648a.75.75 0 0 1 .75-.75M12.25 11.277a.75.75 0 0 1 .75.75v8.92a.75.75 0 0 1-1.5 0v-8.92a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.624 7.192a.75.75 0 0 1-.275 1.025l-7.724 4.46a.75.75 0 0 1-.75-1.299l7.724-4.46a.75.75 0 0 1 1.024.274"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.876 7.193a.75.75 0 0 1 1.025-.274l7.723 4.46a.75.75 0 0 1-.75 1.298L4.151 8.218a.75.75 0 0 1-.275-1.025"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCube2Outline;
