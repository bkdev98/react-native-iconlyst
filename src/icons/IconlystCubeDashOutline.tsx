import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCubeDashOutline = ({
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
      d="M10.658 2.677a3.19 3.19 0 0 1 3.185 0l5.686 3.282a3.19 3.19 0 0 1 1.592 2.758v6.565c0 1.138-.607 2.19-1.592 2.759l-5.685 3.281c-.986.57-2.201.57-3.187 0l-5.685-3.281a3.19 3.19 0 0 1-1.592-2.759V8.717c0-1.138.607-2.19 1.592-2.758zm2.435 1.299c-.521-.301-1.164-.301-1.685 0L5.722 7.258c-.52.3-.842.857-.842 1.459v6.565c0 .602.321 1.159.842 1.46l5.686 3.282c.52.3 1.164.301 1.684 0l5.687-3.283c.52-.3.842-.857.842-1.459V8.717c0-.602-.321-1.158-.842-1.46z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 11.277a.75.75 0 0 1 .75.75v2.92a.75.75 0 0 1-1.5 0v-2.92a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.071 10.193a.75.75 0 0 1 1.025-.275l2.154 1.243 2.154-1.243a.75.75 0 1 1 .75 1.3l-2.53 1.459a.75.75 0 0 1-.75 0l-2.528-1.46a.75.75 0 0 1-.275-1.024M12.25 17.276a.75.75 0 0 1 .75.75v2.92a.75.75 0 0 1-1.5 0v-2.92a.75.75 0 0 1 .75-.75M20.624 7.194a.75.75 0 0 1-.275 1.024l-2.529 1.46a.75.75 0 0 1-.75-1.3l2.53-1.46a.75.75 0 0 1 1.024.276M3.876 7.193A.75.75 0 0 1 4.9 6.918l2.53 1.46a.75.75 0 0 1-.75 1.298L4.15 8.217a.75.75 0 0 1-.274-1.024"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCubeDashOutline;
