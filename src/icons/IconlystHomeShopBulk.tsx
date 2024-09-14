import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeShopBulk = ({
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
      d="M22.207 9.829a1.004 1.004 0 0 1-1.41.16l-.12-.1v.803a.5.5 0 0 1-.506.5 501 501 0 0 0-4.944-.043c-2.2 0-3.73 1.6-3.73 3.88 0 1.356.06 3.886.087 4.968a.5.5 0 0 1-.5.512H7.976c-2.1 0-3.81-1.71-3.81-3.81v-6.81l-.13.1a1 1 0 0 1-1.4-.16c-.34-.44-.27-1.06.16-1.41l7.53-5.96a3.38 3.38 0 0 1 4.19 0l7.52 5.96c.44.35.51.97.17 1.41"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.883 18.379a2.46 2.46 0 0 1-2.422-2.004.75.75 0 1 1 1.476-.272.944.944 0 0 0 .946.776.955.955 0 0 0 .946-.776.75.75 0 0 1 1.476.272 2.456 2.456 0 0 1-2.422 2.004m2.031-5.78h-4.063c-1.65 0-2.803 1.205-2.803 2.93v3.82c0 1.719 1.153 2.92 2.803 2.92h4.063c1.651 0 2.804-1.201 2.804-2.92v-3.82c0-1.725-1.153-2.93-2.804-2.93M10.328 2.46a3.38 3.38 0 0 1 4.188 0l7.526 5.957a1 1 0 1 1-1.241 1.568l-7.525-5.957a1.38 1.38 0 0 0-1.708 0L4.042 9.985a1 1 0 0 1-1.241-1.568z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeShopBulk;
