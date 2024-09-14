import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareAppleWatchBulk = ({
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
      d="M6.301 6.109c.69-.657 1.655-.966 2.764-.966h5.876c1.111 0 2.077.31 2.766.966.692.66 1.041 1.61 1.038 2.756v6.332c0 1.146-.35 2.097-1.043 2.759-.69.658-1.655.97-2.768.97h-5.87c-1.111 0-2.077-.319-2.767-.987-.692-.672-1.042-1.634-1.042-2.795v-6.28c0-1.147.352-2.096 1.046-2.755"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M17.007 5.637a.75.75 0 1 1-1.468.311l-.478-2.251a1.11 1.11 0 0 0-1.084-.88h-3.955a1.11 1.11 0 0 0-1.086.88l-.478 2.251a.75.75 0 0 1-1.467-.311l.478-2.252a2.61 2.61 0 0 1 2.553-2.067h3.955a2.61 2.61 0 0 1 2.552 2.068zM17.007 18.431a.75.75 0 1 0-1.468-.311l-.478 2.251a1.11 1.11 0 0 1-1.084.879h-3.955a1.11 1.11 0 0 1-1.086-.88l-.478-2.25a.75.75 0 0 0-1.467.311l.478 2.251a2.61 2.61 0 0 0 2.553 2.068h3.955a2.61 2.61 0 0 0 2.552-2.068z" />
    </G>
  </Svg>
);
export default IconlystSquareAppleWatchBulk;
