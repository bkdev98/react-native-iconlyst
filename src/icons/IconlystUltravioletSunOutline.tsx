import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUltravioletSunOutline = ({
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
      d="M12.614 2.25a.75.75 0 0 1 .75.75v1.372a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m6.894 2.855a.75.75 0 0 1 0 1.061l-.97.97a.75.75 0 0 1-1.06-1.06l.97-.97a.75.75 0 0 1 1.06 0M5.72 5.106a.75.75 0 0 1 1.06 0l.97.97a.75.75 0 0 1-1.06 1.06l-.97-.97a.75.75 0 0 1 0-1.06M2.864 12a.75.75 0 0 1 .75-.75h1.372a.75.75 0 0 1 0 1.5H3.614a.75.75 0 0 1-.75-.75m16.628 0a.75.75 0 0 1 .75-.75h1.372a.75.75 0 0 1 0 1.5h-1.372a.75.75 0 0 1-.75-.75M7.751 16.863a.75.75 0 0 1 0 1.061l-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97a.75.75 0 0 1 1.06 0m9.727 0a.75.75 0 0 1 1.06 0l.97.97a.75.75 0 0 1-1.06 1.061l-.97-.97a.75.75 0 0 1 0-1.06m-4.864 2.015a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.372a.75.75 0 0 1 .75-.75M8.232 9.006a.75.75 0 0 1 .75.75v3.01a.728.728 0 1 0 1.457 0v-3.01a.75.75 0 0 1 1.5 0v3.01a2.228 2.228 0 1 1-4.457 0v-3.01a.75.75 0 0 1 .75-.75M13.224 9.057a.75.75 0 0 1 .971.427l1.051 2.696 1.052-2.696a.75.75 0 0 1 1.397.545l-1.75 4.488a.75.75 0 0 1-1.398 0l-1.75-4.489a.75.75 0 0 1 .427-.97"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUltravioletSunOutline;
