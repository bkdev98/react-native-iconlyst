import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLike2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.884 17.512c-.274 1.013-.41 1.52-.697 1.898a2.44 2.44 0 0 1-1.023.783c-.44.179-.965.179-2.014.179h-4.27c-.34 0-.512 0-.679-.024a2.5 2.5 0 0 1-.455-.108c-.16-.055-.312-.133-.616-.287L7.661 18.7M7.661 9.938c1.178 0 3.236-3.759 4.105-5.454.155-.302.232-.453.351-.569.103-.1.253-.19.388-.236.158-.052.297-.05.574-.05.207.001.41.012.561.043 1.304.268 2.32 1.852 1.005 5.938-.047.147-.07.22-.057.276a.2.2 0 0 0 .09.123c.05.031.125.031.276.031h1.055c1.982 0 2.973 0 3.647.405.617.371 1.07.962 1.268 1.654.172.607.041 1.342-.284 2.596"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 14.634v3.483c0 .78 0 1.17.15 1.47.137.275.36.498.635.636.299.149.69.149 1.471.149h.15c.781 0 1.171 0 1.471-.15.275-.137.497-.36.635-.634.149-.3.149-.69.149-1.471v-7.143c0-.781 0-1.171-.149-1.471a1.42 1.42 0 0 0-.635-.635c-.3-.15-.69-.15-1.471-.15h-.15c-.781 0-1.172 0-1.471.15-.275.138-.498.36-.635.635-.15.3-.15.69-.15 1.47"
    />
  </Svg>
);
export default IconlystThumbLike2Broken;
