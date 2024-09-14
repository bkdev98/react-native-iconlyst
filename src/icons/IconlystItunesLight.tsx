import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystItunesLight = ({
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
      d="M19.748 7.063c-3.405.692-6.813 1.37-10.217 2.065"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.742 13.507c-.007.452-.408.604-.773.692-1.129.252-2.503.05-3.515.707a2.18 2.18 0 0 0-.982 1.941 2.14 2.14 0 0 0 1.507 1.87c1.184.36 2.814-.203 3.428-1.274.298-.541.358-1.176.338-1.783 0-3.3-.005-9.136-.008-11.661a1 1 0 0 0-1.202-.978l-8.207 1.664a1 1 0 0 0-.804.984c.001 2.26.005 8.639.005 12.157.02.607-.04 1.242-.339 1.783-.64 1.117-2.213 1.642-3.427 1.274a2.14 2.14 0 0 1-1.507-1.87c-.047-.759.34-1.532.982-1.94 1.011-.657 2.386-.456 3.515-.708.364-.088.766-.24.773-.692"
    />
  </Svg>
);
export default IconlystItunesLight;
