import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraEditOutline = ({
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
      d="M10.303 4.887c-.538 0-1.036.293-1.297.765-.136.248-.283.505-.421.729a4.4 4.4 0 0 1-.436.61 2.65 2.65 0 0 1-1.837.815A2.31 2.31 0 0 0 4 10.114v5.643a3.356 3.356 0 0 0 3.356 3.356h9.788a3.356 3.356 0 0 0 3.356-3.356v-4.528a.75.75 0 0 1 1.5 0v4.528a4.856 4.856 0 0 1-4.856 4.856H7.356A4.856 4.856 0 0 1 2.5 15.757v-5.643a3.813 3.813 0 0 1 3.794-3.808c.29-.015.561-.137.762-.344.044-.05.13-.17.252-.369.12-.195.254-.428.384-.665l.001-.001a2.98 2.98 0 0 1 2.61-1.54h3.912a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.69 5.353 15.28 9.074a1.13 1.13 0 0 0-.277.628l-.088.807a.13.13 0 0 0 .149.14l.782-.13a1.13 1.13 0 0 0 .655-.361l.006-.007 3.376-3.685.003-.003a.325.325 0 0 0-.018-.46l-.72-.666a.326.326 0 0 0-.46.016m1.477-1.117a1.825 1.825 0 0 0-2.58.1l-3.415 3.729-.006.007c-.367.41-.594.923-.654 1.466l-.087.81a1.63 1.63 0 0 0 1.886 1.78l.784-.13a2.63 2.63 0 0 0 1.522-.837l3.372-3.68a1.825 1.825 0 0 0-.1-2.578zM11.027 10.18a.75.75 0 0 1-.061 1.06 2.32 2.32 0 0 0-.77 1.726 2.34 2.34 0 0 0 2.343 2.344c.684 0 1.31-.302 1.727-.77a.75.75 0 0 1 1.12.997 3.82 3.82 0 0 1-2.847 1.273 3.84 3.84 0 0 1-3.844-3.844c0-1.126.496-2.154 1.273-2.846a.75.75 0 0 1 1.059.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraEditOutline;
