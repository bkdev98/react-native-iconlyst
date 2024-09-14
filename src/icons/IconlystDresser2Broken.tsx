import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDresser2Broken = ({
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
      d="M5.153 13.547v-7.66C5.153 4.197 6.212 3 7.9 3h8.198c1.693 0 2.748 1.196 2.748 2.888v12.221c0 1.692-1.055 2.887-2.749 2.887H7.9c-1.694 0-2.747-1.195-2.747-2.887v-1.507M14.304 10.97v2.056M9.697 10.97v2.056M11.996 21V5.913"
    />
  </Svg>
);
export default IconlystDresser2Broken;
