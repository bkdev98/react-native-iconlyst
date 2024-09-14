import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraBold = ({
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
      d="M17.923 10.188a.75.75 0 0 1-1.5 0c0-.415.336-.78.75-.78s.75.306.75.72zm-5.924 7.06a3.847 3.847 0 0 1-3.843-3.843 3.847 3.847 0 0 1 3.843-3.842 3.847 3.847 0 0 1 3.843 3.842 3.847 3.847 0 0 1-3.843 3.844m5.958-10.397a1.38 1.38 0 0 1-.944-.42c-.044-.048-.222-.27-.637-1.048a2.73 2.73 0 0 0-2.411-1.445h-3.912c-.994 0-1.911.54-2.391 1.41-.437.792-.618 1.024-.667 1.079a1.39 1.39 0 0 1-.933.43A3.567 3.567 0 0 0 2.5 10.415v5.642a4.61 4.61 0 0 0 4.606 4.607h9.788a4.61 4.61 0 0 0 4.606-4.608v-5.644c0-1.964-1.598-3.56-3.543-3.56"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 11.063a2.346 2.346 0 0 0-2.344 2.342A2.346 2.346 0 0 0 12 15.75a2.346 2.346 0 0 0 2.343-2.344A2.346 2.346 0 0 0 12 11.064"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraBold;
