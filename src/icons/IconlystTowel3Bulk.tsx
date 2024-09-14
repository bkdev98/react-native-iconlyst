import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel3Bulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M17.991 6.317a3 3 0 0 0-2.552-2.966h5.414c.333 0 .577.333.477.65a4 4 0 0 1-.316.694c-.195.367-.387.727-.387 1.18 0 .554.151.806.342 1.124.311.518.491 1.042.491 1.654 0 .53-.212.975-.422 1.417-.206.433-.41.862-.41 1.362 0 .558.151.812.342 1.131l.003.005c.224.375.487.818.487 1.65 0 .829-.263 1.27-.487 1.643l-.003.004c-.19.318-.343.572-.343 1.13 0 .408.117.755.324 1.098.126.21.296.492.395.83a.505.505 0 0 1-.48.64h-2.875z" />
      <Path d="M2.54 19.235V6.465c0 .628.315 1.154.732 1.557.416.401.977.728 1.61.986 1.27.519 2.971.822 4.812.822s3.543-.303 4.812-.822c.633-.258 1.194-.585 1.61-.986.409-.395.719-.908.732-1.519v12.732c0 .628-.315 1.154-.733 1.557-.415.401-.977.728-1.61.986-1.269.518-2.97.821-4.811.821s-3.543-.303-4.812-.821c-.633-.258-1.195-.585-1.61-.986-.418-.403-.733-.93-.733-1.557" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.694 3.1c-1.841 0-3.543.303-4.812.822-.633.258-1.195.585-1.61.986-.418.403-.733.93-.733 1.557 0 .628.315 1.154.733 1.557.415.401.977.728 1.61.987 1.27.518 2.97.821 4.812.821 1.841 0 3.543-.303 4.812-.821.632-.259 1.194-.586 1.61-.987.417-.403.732-.93.732-1.557 0-.628-.315-1.154-.733-1.557-.415-.401-.977-.728-1.61-.986-1.268-.519-2.97-.822-4.811-.822m1.726 3.01a.75.75 0 0 1-.524.923 4.96 4.96 0 0 1-2.656 0 .75.75 0 1 1 .394-1.447c.631.172 1.248.17 1.864 0a.75.75 0 0 1 .922.525"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTowel3Bulk;