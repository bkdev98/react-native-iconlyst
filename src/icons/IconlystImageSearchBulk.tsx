import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageSearchBulk = ({
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
      d="M16.645 3.027h-6.34c-.26 0-.404.315-.256.528.56.81.895 1.785.895 2.841a5 5 0 0 1-.407 1.984l.383.383a1.998 1.998 0 0 1-1.412 3.416c-.51 0-1.022-.195-1.412-.584l-.467-.466a5 5 0 0 1-1.748.33c-.893 0-1.728-.24-2.456-.65-.213-.12-.494.026-.494.27v3.167c0 .249.288.393.5.261.964-.6 2.232-.967 3.752-.147.689.372 1.287.735 1.737 1.02.114.072.262.06.363-.03l2.808-2.52a4.92 4.92 0 0 1 6.171-.292l3.193 2.319a.3.3 0 0 0 .476-.243V8.548c0-3.302-2.124-5.52-5.286-5.52"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.882 4.085a2.315 2.315 0 0 1 2.313 2.312A2.316 2.316 0 0 1 5.882 8.71a2.316 2.316 0 0 1-2.313-2.313 2.315 2.315 0 0 1 2.313-2.312m0 6.125c.739 0 1.424-.22 2.008-.586l1.09 1.086a.75.75 0 1 0 1.058-1.061L8.984 8.598c.444-.623.71-1.38.71-2.201a3.816 3.816 0 0 0-3.812-3.812 3.816 3.816 0 0 0-3.813 3.812 3.817 3.817 0 0 0 3.813 3.813M17.407 13.8l4.326 3.14.003.002c.114.08.209.196.194.335-.314 2.859-2.319 4.74-5.22 4.74H8.276c-1.065 0-2.009-.257-2.795-.72-.167-.098-.18-.328-.037-.457l7.628-6.843a3.46 3.46 0 0 1 4.336-.197M6.397 15.745c.425.23.82.46 1.162.668a.297.297 0 0 1 .043.476l-3.26 2.926a.285.285 0 0 1-.433-.05c-.517-.797-.83-1.774-.887-2.893a.3.3 0 0 1 .096-.231c1.052-.954 1.984-1.592 3.28-.896"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageSearchBulk;
