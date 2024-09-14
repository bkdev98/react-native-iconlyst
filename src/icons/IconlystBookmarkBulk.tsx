import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkBulk = ({
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
        d="M11.991 18.622 5.5 21.864a1.02 1.02 0 0 1-1.376-.4A1.1 1.1 0 0 1 4 20.967v-7.258c0 .72.406 1.164 1.473 1.661z"
        opacity={0.4}
      />
      <Path d="M15.07 2c2.707 0 4.904 1.066 4.93 3.793v15.174c-.001.17-.043.338-.123.488a1.008 1.008 0 0 1-1.402.409l-6.484-3.242-6.518-3.252C4.406 14.873 4 14.428 4 13.71V5.793C4 3.066 6.196 2 8.895 2Zm.679 6.041H8.225a.79.79 0 0 0-.785.79c0 .437.351.791.785.791h7.524a.79.79 0 0 0 .785-.79.79.79 0 0 0-.785-.791" />
    </G>
  </Svg>
);
export default IconlystBookmarkBulk;
