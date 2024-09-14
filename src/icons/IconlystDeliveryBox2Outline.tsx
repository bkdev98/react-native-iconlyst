import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBox2Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.257 3.975 5.58 7.253l-.056.034L7.912 8.67l6.574-3.803-1.544-.892c-.522-.3-1.164-.3-1.685 0m4.728 1.757L9.409 9.536l2.693 1.558L18.68 7.29l-.059-.036zm4.473 1.261c-.27-.42-.64-.78-1.087-1.038l-5.68-3.28a3.19 3.19 0 0 0-3.183 0l-5.68 3.28a3.19 3.19 0 0 0-1.59 2.757v6.557c0 1.137.606 2.189 1.59 2.757l5.68 3.278c.435.252.915.392 1.4.421a.75.75 0 0 0 .383 0 3.2 3.2 0 0 0 1.4-.42l5.68-3.28a3.18 3.18 0 0 0 1.59-2.756V8.712a3.2 3.2 0 0 0-.394-1.536.8.8 0 0 0-.109-.183m-1.002 1.58-6.606 3.822v7.66q.045-.023.091-.05l5.68-3.279c.52-.3.84-.856.84-1.457V8.712q0-.07-.005-.139M11.35 20.055v-7.663L8.652 10.83v1.45a.75.75 0 0 1-1.5 0V9.964L4.743 8.57a2 2 0 0 0-.006.142v6.557c0 .601.321 1.157.841 1.457l5.68 3.28z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBox2Outline;
