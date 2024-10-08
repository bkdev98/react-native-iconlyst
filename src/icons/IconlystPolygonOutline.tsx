import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygonOutline = ({
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
      d="M13.27 4.172a1.45 1.45 0 0 0-2.05.008l-.703.704a2.95 2.95 0 0 1-2.077.856h-1c-.801 0-1.45.65-1.45 1.45l-.002.054v.943c0 .78-.31 1.526-.857 2.079l-.002.001-.71.71v.002a1.45 1.45 0 0 0 .01 2.046l.003.003.7.701c.549.552.858 1.298.858 2.078v1.005c0 .8.649 1.45 1.45 1.45h1a2.95 2.95 0 0 1 2.076.858h.002l.707.708.001.002a1.45 1.45 0 0 0 2.049-.01l.002-.003.702-.7c.551-.55 1.299-.859 2.078-.859h1.005c.799.001 1.449-.647 1.45-1.446v-1.003c0-.779.308-1.526.858-2.078h.001l.708-.709a1.45 1.45 0 0 0-.007-2.05l-.002-.002-.7-.7-.002-.002a2.95 2.95 0 0 1-.857-2.08V7.19c0-.8-.649-1.45-1.45-1.45H16.06a2.95 2.95 0 0 1-2.079-.857V4.88l-.687-.686zm0 0 .53-.53-.313.314zM4.49 7.127A2.95 2.95 0 0 1 7.44 4.24h1c.382 0 .748-.15 1.021-.42l.697-.698a2.95 2.95 0 0 1 4.183-.002l.699.699c.27.269.637.42 1.02.42h1.002a2.95 2.95 0 0 1 2.95 2.95v1c0 .382.151.75.42 1.02l.002.002.696.696.001.001a2.95 2.95 0 0 1 .013 4.171l-.001.002-.71.709c-.268.27-.42.637-.42 1.019v1.005a2.95 2.95 0 0 1-2.951 2.944h-1.004c-.382 0-.75.152-1.02.422l-.697.695-.533-.527.53.53.002-.001a2.95 2.95 0 0 1-4.17.017l-.002-.002-.709-.71a1.45 1.45 0 0 0-1.02-.42h-.999a2.95 2.95 0 0 1-2.949-2.95v-1.005a1.45 1.45 0 0 0-.42-1.019l-.697-.697-.001-.001a2.95 2.95 0 0 1-.019-4.168l.003-.002.71-.711c.27-.273.422-.64.422-1.022V7.19z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPolygonOutline;
