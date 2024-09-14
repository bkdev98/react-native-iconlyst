import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReels3Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.238 7.238a.3.3 0 0 0 .29.222h2.565a.3.3 0 0 0 .29-.38c-.392-1.414-1-3.653-1.192-4.359A.3.3 0 0 0 9.9 2.5h-2.25q-.172.001-.336.02a.3.3 0 0 0-.254.376zM14.953 2.721a.3.3 0 0 0-.29-.221H12.06a.3.3 0 0 0-.29.38l1.215 4.36a.3.3 0 0 0 .29.22h2.582a.3.3 0 0 0 .29-.38c-.393-1.415-1.002-3.653-1.193-4.359M17.747 7.24a.3.3 0 0 0 .288.22h2.819a.29.29 0 0 0 .293-.304c-.15-2.633-1.828-4.426-4.319-4.63a.285.285 0 0 0-.293.367zM6.351 7.46a.3.3 0 0 0 .29-.38L5.613 3.29a.283.283 0 0 0-.407-.183c-1.377.758-2.247 2.192-2.353 4.049a.29.29 0 0 0 .294.303zM11.365 12.284a.7.7 0 0 0-.271-.06.4.4 0 0 0-.191.046q-.146.085-.178.327a15.7 15.7 0 0 0 .002 3.345c.011.08.049.252.172.324.106.062.276.054.469-.023a8 8 0 0 0 2.406-1.508c.115-.105.252-.272.251-.472 0-.201-.136-.365-.249-.467a8 8 0 0 0-2.411-1.512"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.783 15.844a9.6 9.6 0 0 1-2.857 1.791 2.3 2.3 0 0 1-.854.174c-.334 0-.652-.084-.935-.251-.5-.295-.82-.809-.9-1.446a17.3 17.3 0 0 1-.001-3.696c.085-.645.41-1.153.918-1.446.523-.301 1.172-.326 1.782-.073a9.5 9.5 0 0 1 2.848 1.788c.475.429.74.988.74 1.573.003.586-.261 1.149-.741 1.586M3.136 8.959a.3.3 0 0 0-.3.3v7.2c0 3.015 1.936 5.04 4.816 5.04h8.695c2.882 0 4.817-2.025 4.817-5.04v-7.2a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReels3Bold;
