import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLike2TwoTone = ({
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
      d="M8.161 9.935c1.177 0 3.236-3.759 4.105-5.454.155-.302.232-.453.351-.57.102-.1.252-.19.388-.235.158-.053.296-.052.573-.05.208 0 .41.012.562.043 1.304.268 2.32 1.852 1.005 5.937-.047.147-.07.22-.057.277a.2.2 0 0 0 .09.123c.05.03.125.03.276.03h1.055c1.982 0 2.973 0 3.647.406.617.37 1.07.962 1.267 1.654.216.757-.042 1.713-.558 3.627l-.482 1.785c-.273 1.014-.41 1.52-.697 1.898a2.43 2.43 0 0 1-1.022.784c-.44.178-.965.178-2.014.178h-4.27c-.342 0-.512 0-.68-.023a2.4 2.4 0 0 1-.454-.109c-.16-.055-.312-.132-.617-.287l-2.468-1.253"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.906 8.719h-.15c-.781 0-1.172 0-1.471.15-.275.137-.498.36-.635.634-.15.3-.15.69-.15 1.472v7.141c0 .782 0 1.172.15 1.472.137.274.36.497.635.635.299.15.69.15 1.47.15h.15c.782 0 1.172 0 1.472-.15.275-.138.497-.36.635-.635.15-.3.15-.69.15-1.472v-7.141c0-.782 0-1.172-.15-1.472a1.42 1.42 0 0 0-.635-.635c-.3-.15-.69-.15-1.471-.15"
    />
  </Svg>
);
export default IconlystThumbLike2TwoTone;
