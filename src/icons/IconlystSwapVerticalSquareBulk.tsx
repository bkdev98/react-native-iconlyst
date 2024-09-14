import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapVerticalSquareBulk = ({
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
      d="M16.217 2.688H7.782c-3.16 0-5.282 2.22-5.282 5.525v7.948c0 3.305 2.122 5.526 5.282 5.526h8.434c3.16 0 5.284-2.22 5.284-5.527V8.215c0-3.306-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.323 7.949q.146 0 .275.057a.8.8 0 0 1 .236.155l.01.01 1.74 1.75a.75.75 0 0 1-.003 1.062.75.75 0 0 1-1.061-.003l-.46-.462v4.97a.75.75 0 0 1-1.5 0v-4.971l-.46.463a.75.75 0 1 1-1.063-1.058L8.779 8.17l.005-.006v-.001l.004-.002a.735.735 0 0 1 .512-.213zm6.122.936v4.974l.46-.463a.749.749 0 1 1 1.064 1.058l-1.742 1.75a.75.75 0 0 1-1.064 0l-1.74-1.75a.75.75 0 0 1 1.063-1.058l.459.462V8.885a.75.75 0 0 1 1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapVerticalSquareBulk;
