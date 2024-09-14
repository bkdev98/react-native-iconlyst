import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordUnlockOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.99 4.507c.985-1.056 2.387-1.648 4.042-1.648h8.435c1.66 0 3.062.591 4.046 1.648C21.49 5.557 22 7.008 22 8.635v2.24a.75.75 0 0 1-1.5 0v-2.24c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17C4.41 6.256 4 7.32 4 8.635v4.055c0 1.318.409 2.381 1.085 3.107.67.72 1.658 1.17 2.947 1.17h2.984a.75.75 0 0 1 0 1.5H8.032c-1.66 0-3.062-.59-4.046-1.648C3.008 15.77 2.5 14.318 2.5 12.69V8.635c0-1.628.511-3.078 1.49-4.128M16.996 17.29a.66.66 0 0 0-.66.66v1.595c0 .365.297.661.66.661h2.843a.66.66 0 0 0 .66-.66v-1.597a.66.66 0 0 0-.66-.66zm-2.16.66a2.16 2.16 0 0 1 2.16-2.16h2.843a2.16 2.16 0 0 1 2.16 2.16v1.595a2.16 2.16 0 0 1-2.16 2.161h-2.843a2.16 2.16 0 0 1-2.16-2.16z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.163 14.954a.945.945 0 0 0-1.69.565v1.05a.75.75 0 0 1-1.5 0v-1.07a2.445 2.445 0 0 1 2.415-2.405 2.44 2.44 0 0 1 1.95.93.75.75 0 0 1-1.175.93M11.24 10.605a1.01 1.01 0 1 1 2.021-.002 1.01 1.01 0 0 1-2.02.002M15.147 10.605a1.011 1.011 0 1 1 2.022 0 1.011 1.011 0 0 1-2.023 0M7.334 10.605a1.011 1.011 0 1 1 2.022 0 1.011 1.011 0 0 1-2.022 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordUnlockOutline;
