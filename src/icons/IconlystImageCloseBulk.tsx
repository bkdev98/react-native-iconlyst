import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageCloseBulk = ({
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
      d="M19.56 11.348a7.206 7.206 0 0 1-7.206-7.207q0-.253.021-.502a.526.526 0 0 0-.513-.576H7.787c-3.163 0-5.287 2.219-5.287 5.52v6.261a.2.2 0 0 0 .317.162l3.353-2.433a4.914 4.914 0 0 1 6.164.287l2.872 2.577a.2.2 0 0 0 .241.02c.456-.29 1.078-.67 1.799-1.06 1.61-.87 2.94-.404 3.926.257.137.092.328-.003.328-.169v-2.75c0-.331-.316-.57-.642-.51a7 7 0 0 1-1.298.123"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.35 7.515a.75.75 0 0 0 1.06 0L18.726 6.2l1.314 1.314a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.061L19.786 5.14l1.313-1.312a.75.75 0 1 0-1.061-1.061L18.725 4.08l-1.313-1.312a.749.749 0 1 0-1.06 1.06l1.312 1.313-1.314 1.313a.75.75 0 0 0 0 1.06M7.02 13.8l-4.326 3.14-.003.002c-.114.08-.209.196-.194.335.314 2.859 2.319 4.74 5.22 4.74h8.435c1.065 0 2.009-.257 2.795-.72.167-.098.18-.328.037-.457l-7.628-6.843A3.46 3.46 0 0 0 7.02 13.8M18.03 15.745c-.425.23-.82.46-1.162.668a.297.297 0 0 0-.043.476l3.26 2.926a.285.285 0 0 0 .433-.05c.517-.797.83-1.774.887-2.893a.3.3 0 0 0-.096-.231c-1.052-.954-1.983-1.592-3.279-.896"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageCloseBulk;
