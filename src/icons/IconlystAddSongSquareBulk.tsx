import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddSongSquareBulk = ({
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
      d="M14.328 4.447c0-.349.034-.689.093-1.02a.314.314 0 0 0-.303-.372H7.58c-3.16 0-5.282 2.22-5.282 5.526v7.948c0 3.305 2.122 5.526 5.282 5.526h8.434c3.16 0 5.284-2.221 5.284-5.526v-5.854a.31.31 0 0 0-.35-.304q-.323.04-.654.04a5.966 5.966 0 0 1-5.966-5.964"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.092 4.28h-1.586V2.695a.75.75 0 0 0-1.5 0V4.28H17.42a.75.75 0 0 0 0 1.5h1.586v1.587a.75.75 0 0 0 1.5 0V5.78h1.586a.75.75 0 0 0 0-1.5M15.114 11.248a.75.75 0 0 1-.948.476 3.4 3.4 0 0 1-1.104-.616l-.534 4.427q-.002.005-.003.009a2.916 2.916 0 0 1-3.235 2.532 2.89 2.89 0 0 1-1.94-1.092 2.9 2.9 0 0 1-.6-2.144 2.89 2.89 0 0 1 1.092-1.941 2.9 2.9 0 0 1 2.144-.6c.5.06.96.256 1.355.545l.474-3.924a.749.749 0 0 1 1.472-.093c.011.04.313 1.128 1.351 1.473a.75.75 0 0 1 .476.948m-5.48 2.53q.086 0 .173.01c.374.045.708.233.94.529a1.409 1.409 0 1 1-1.979-.238c.25-.197.554-.301.867-.301"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAddSongSquareBulk;
