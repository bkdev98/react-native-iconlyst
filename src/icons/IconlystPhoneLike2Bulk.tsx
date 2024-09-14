import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneLike2Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M5.31 16.352a.3.3 0 0 0 .3.3h13.733a.3.3 0 0 0 .3-.3V7.65a.3.3 0 0 0-.3-.3H5.61a.3.3 0 0 0-.3.3zM5.735 18.15a.284.284 0 0 0-.283.347c.44 1.836 1.896 3.003 3.9 3.003h6.247c2.006 0 3.463-1.167 3.903-3.003a.284.284 0 0 0-.283-.347zM19.219 5.85a.284.284 0 0 0 .283-.346c-.44-1.837-1.897-3.004-3.901-3.004H9.353c-2.005 0-3.461 1.167-3.902 3.004a.284.284 0 0 0 .284.346z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.706 10.338a2.11 2.11 0 0 0-1.328-1.241 2.2 2.2 0 0 0-1.046-.075c-.321.054-.612.246-.857.425-.235-.171-.533-.367-.856-.421a2.26 2.26 0 0 0-1.045.07c-1.341.435-1.754 1.902-1.38 3.068.584 1.874 3.099 3.065 3.206 3.115a.18.18 0 0 0 .152 0c.105-.05 2.582-1.22 3.2-3.112h.001a2.7 2.7 0 0 0-.047-1.83"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneLike2Bulk;
