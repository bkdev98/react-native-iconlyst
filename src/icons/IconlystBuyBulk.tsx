import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M7.43 19.069a1.515 1.515 0 1 1-.01 3.03 1.515 1.515 0 0 1 .01-3.03m11.25 0a1.515 1.515 0 1 1-.01 3.03 1.515 1.515 0 0 1 .01-3.03"
        opacity={0.4}
      />
      <Path d="m2.779 2.5.102.008 2.385.36c.34.061.59.34.62.68l.19 2.24a.61.61 0 0 0 .61.561H20.19c.61 0 1.01.21 1.41.67s.47 1.12.38 1.719l-.95 6.56a2.55 2.55 0 0 1-2.53 2.19H7.59c-1.33 0-2.43-1.02-2.54-2.339L4.13 4.248l-1.51-.26a.753.753 0 0 1-.61-.86c.07-.41.46-.68.87-.62ZM16.9 10.048h-2.77c-.42 0-.75.33-.75.75 0 .41.33.75.75.75h2.77c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75" />
    </G>
  </Svg>
);
export default IconlystBuyBulk;
