import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplay2Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4 12.265c0-2.757 2.243-5 5-5h1.929v1.392a1 1 0 0 0 1.614.79l3.072-2.393c.015-.012.02-.03.035-.043a1 1 0 0 0 .183-.225c.023-.037.054-.068.072-.108a1 1 0 0 0 .088-.377c0-.012.008-.023.008-.036 0-.01-.007-.02-.007-.03a1 1 0 0 0-.088-.383c-.02-.04-.051-.072-.075-.11a1 1 0 0 0-.178-.22c-.014-.013-.02-.033-.036-.045l-3.072-2.402a1.002 1.002 0 0 0-1.616.788v1.402h-1.93c-3.858 0-7 3.14-7 7 0 2.152.975 4.155 2.672 5.495a.997.997 0 0 0 1.404-.165 1 1 0 0 0-.166-1.405 4.98 4.98 0 0 1-1.91-3.925"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.329 6.772a1 1 0 0 0-1.238 1.569A4.98 4.98 0 0 1 20 12.267c0 2.756-2.243 5-5 5h-2.044v-1.423a1 1 0 0 0-1.616-.787l-3.073 2.402a1 1 0 0 0 .002 1.576l3.073 2.393a1 1 0 0 0 1.053.109 1 1 0 0 0 .561-.898v-1.372H15c3.859 0 7-3.141 7-7a6.96 6.96 0 0 0-2.671-5.495"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystReplay2Bulk;
