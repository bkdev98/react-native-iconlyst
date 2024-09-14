import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube4Outline = ({
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
      d="M12.25 11.277a.75.75 0 0 1 .75.75v8.92a.75.75 0 0 1-1.5 0v-8.92a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.876 7.192a.75.75 0 0 1 1.025-.274l7.35 4.244 7.348-4.243a.75.75 0 0 1 .75 1.299l-7.724 4.46a.75.75 0 0 1-.75 0L4.151 8.216a.75.75 0 0 1-.275-1.025"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCube4Outline;
