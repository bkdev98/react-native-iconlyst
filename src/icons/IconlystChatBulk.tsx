import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatBulk = ({
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
        d="M12.02 2C6.21 2 2 6.74 2 12c0 1.68.49 3.41 1.35 4.99.16.26.18.59.07.9l-.67 2.24c-.15.54.31.94.82.78l2.02-.6c.55-.18.98.05 1.491.36 1.46.86 3.279 1.3 4.919 1.3 4.96 0 10-3.83 10-10C22 6.65 17.7 2 12.02 2"
        opacity={0.4}
      />
      <Path d="M7.37 10.73c.71 0 1.28.57 1.28 1.28 0 .7-.57 1.27-1.28 1.28-.7 0-1.28-.58-1.28-1.28 0-.71.57-1.28 1.28-1.28m4.61 0c.71 0 1.28.57 1.28 1.28 0 .7-.57 1.28-1.28 1.28-.71-.01-1.28-.58-1.28-1.29 0-.7.58-1.28 1.28-1.27m4.61 0c.71 0 1.28.57 1.28 1.28 0 .7-.57 1.28-1.28 1.28s-1.28-.58-1.28-1.28c0-.71.57-1.28 1.28-1.28" />
    </G>
  </Svg>
);
export default IconlystChatBulk;
