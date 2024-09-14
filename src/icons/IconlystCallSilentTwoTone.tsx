import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSilentTwoTone = ({
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
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path
        d="M6.585 14.205C.154 6.918 3.37 4.74 3.654 4.385c3.069-3.112 3.545-1.695 5.956.752 2.03 2.07-.602 3.058.477 5.516"
        opacity={0.4}
      />
      <Path d="M12.49 13.382c3.28 2.694 4.206-1.159 6.53 1.202 2.396 2.447 3.774 2.941.735 6.043-.357.31-2.66 3.842-10.555-3.885M4.5 21.5l15-16" />
    </G>
  </Svg>
);
export default IconlystCallSilentTwoTone;
