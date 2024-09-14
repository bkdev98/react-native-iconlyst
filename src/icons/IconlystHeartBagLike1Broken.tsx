import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBagLike1Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.476 20.57H7.27c-2.339 0-3.794-1.65-3.794-3.988v-6.306c0-2.338 1.462-3.989 3.794-3.989h10.41c2.339 0 3.796 1.651 3.796 3.99v6.305c0 2.337-1.457 3.988-3.797 3.988h-1.802M15.837 6.272v-.623c0-1.226-.994-2.22-2.22-2.22h-2.28c-1.226 0-2.22.994-2.22 2.22v.623"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.523 16s2.168-1.01 2.688-2.6c.318-.99-.052-2.128-1.09-2.463a1.76 1.76 0 0 0-.832-.058c-.278.047-.54.239-.766.408-.227-.168-.49-.359-.768-.405a1.8 1.8 0 0 0-.83.055c-1.04.338-1.412 1.472-1.094 2.464.152.49.472.927.838 1.297M6.803 16.802v-6.734M18.152 16.802v-6.734"
    />
  </Svg>
);
export default IconlystHeartBagLike1Broken;
