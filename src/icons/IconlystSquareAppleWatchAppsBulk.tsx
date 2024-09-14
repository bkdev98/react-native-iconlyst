import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareAppleWatchAppsBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M17.007 5.637a.75.75 0 1 1-1.468.311l-.478-2.251a1.11 1.11 0 0 0-1.084-.88h-3.955a1.11 1.11 0 0 0-1.086.88l-.478 2.251a.75.75 0 0 1-1.467-.311l.478-2.252a2.61 2.61 0 0 1 2.553-2.067h3.955a2.61 2.61 0 0 1 2.552 2.068zM17.007 18.431a.75.75 0 1 0-1.468-.311l-.478 2.251a1.11 1.11 0 0 1-1.084.879h-3.955a1.11 1.11 0 0 1-1.086-.88l-.478-2.25a.75.75 0 0 0-1.467.311l.478 2.251a2.61 2.61 0 0 0 2.553 2.068h3.955a2.61 2.61 0 0 0 2.552-2.068z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.065 5.143c-1.11 0-2.074.31-2.764.966-.694.66-1.046 1.609-1.046 2.755v6.28c0 1.161.35 2.123 1.042 2.795.69.668 1.656.986 2.768.986h5.87c1.112 0 2.077-.311 2.767-.97.693-.661 1.043-1.612 1.043-2.758V8.865c.003-1.146-.346-2.096-1.038-2.756-.69-.657-1.655-.966-2.766-.966zm4.868 4.023c-.47 0-.87.42-.87.92a.875.875 0 1 0 1.75 0v-.08c0-.48-.38-.84-.88-.84m.88 4.65c0-.47-.38-.83-.88-.83-.47 0-.87.42-.87.92 0 .48.39.87.87.87.49 0 .88-.39.88-.87zm-4.69-4.65c-.47 0-.87.42-.87.92a.875.875 0 1 0 1.75 0v-.08c0-.48-.38-.84-.88-.84m.88 4.65c0-.47-.38-.83-.88-.83-.47 0-.87.42-.87.92 0 .48.39.87.87.87.49 0 .88-.39.88-.87z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareAppleWatchAppsBulk;
