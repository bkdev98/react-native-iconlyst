import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorBadgeOutline = ({
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
      d="M13.27 4.173a1.45 1.45 0 0 0-2.05.007l-.703.704a2.95 2.95 0 0 1-2.077.856h-1c-.801 0-1.45.65-1.45 1.45l-.002.054v.943c0 .78-.309 1.527-.858 2.08l-.694.694-.03.03c-.55.57-.54 1.476.023 2.034l.003.003.7.701c.549.552.858 1.298.858 2.078v1.005c0 .8.649 1.45 1.45 1.45h1a2.95 2.95 0 0 1 2.076.858h.002l.707.708.001.002a1.45 1.45 0 0 0 2.049-.01l.002-.003.702-.7c.551-.55 1.299-.859 2.078-.859h1.005c.8.001 1.449-.646 1.45-1.446v-1.003c0-.778.308-1.525.858-2.078l.001-.001.708-.708a1.45 1.45 0 0 0-.007-2.05l-.002-.002-.7-.7-.002-.002a2.95 2.95 0 0 1-.857-2.08V7.19c0-.8-.649-1.45-1.45-1.45H16.06a2.95 2.95 0 0 1-2.079-.857V4.88l-.687-.685zm0 0v-.001l.53-.53-.529.531M4.49 7.127A2.95 2.95 0 0 1 7.44 4.24h1c.382 0 .748-.15 1.021-.42l.697-.698a2.95 2.95 0 0 1 4.183-.002l.699.699c.27.268.637.42 1.02.42h1.002a2.95 2.95 0 0 1 2.95 2.95v1c0 .383.151.749.42 1.02l.002.002.696.696a2.95 2.95 0 0 1 .014 4.172l-.001.002-.71.708c-.268.271-.42.638-.42 1.02v1.005a2.95 2.95 0 0 1-2.951 2.944h-1.004c-.382 0-.749.152-1.02.421l-.697.696-.533-.527.53.53.002-.001a2.95 2.95 0 0 1-4.17.017l-.002-.002-.709-.71.53-.53-.531.53h.001a1.45 1.45 0 0 0-1.02-.42h-.999a2.95 2.95 0 0 1-2.949-2.95v-1.005c0-.382-.151-.748-.42-1.019l-.697-.697.528-.533-.53.53v.002a2.95 2.95 0 0 1-.018-4.168l-.021.024.021-.024.007-.006a1 1 0 0 1 .082-.07l.016-.011.006-.005.003-.002.003-.002m-.003.002a1 1 0 0 0-.107.088l.707-.708.531.53-.53-.53c.269-.272.42-.638.42-1.021V7.19l.003-.063m-1.021 2.7"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 8.242a.75.75 0 0 1 .75.75v3.015a.75.75 0 1 1-1.5 0V8.992a.75.75 0 0 1 .75-.75m-.002 6.016a.75.75 0 0 1 .75.75v.048a.75.75 0 1 1-1.5 0v-.048a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystErrorBadgeOutline;
