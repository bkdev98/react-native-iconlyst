import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsInTheHeart3Outline = ({
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
      d="M12.703 20.79a.75.75 0 0 1-.359-.091c-.28-.153-6.89-3.8-8.508-8.827-1.02-3.186.118-7.188 3.787-8.37a6.12 6.12 0 0 1 5.082.625 6.084 6.084 0 0 1 9.163 6.43.75.75 0 1 1-1.486-.2 4.776 4.776 0 0 0-3.068-5.426 4.67 4.67 0 0 0-4.164.705.75.75 0 0 1-.9 0 4.62 4.62 0 0 0-4.172-.7c-2.88.927-3.6 4.032-2.817 6.483 1.233 3.83 6.073 6.944 7.44 7.759a26 26 0 0 0 1.291-.83.749.749 0 1 1 .847 1.238c-1.025.7-1.747 1.1-1.778 1.117a.76.76 0 0 1-.358.087"
    />
    <Path
      fill={props.color}
      d="M18.069 17.999a.75.75 0 0 1-.05-1.5l2.077-.139-.475-2.022a.751.751 0 1 1 1.46-.344l.677 2.882a.75.75 0 0 1-.68.92l-2.957.2zM5.57 6.464a.75.75 0 0 1-.442-.145L2.743 4.564a.75.75 0 0 1 .887-1.21l2.385 1.749a.75.75 0 0 1-.444 1.354z"
    />
    <Path
      fill={props.color}
      d="M21.027 17.797a.75.75 0 0 1-.443-.144l-6.673-4.889a.751.751 0 0 1 .886-1.211l6.674 4.89a.75.75 0 0 1-.444 1.355z"
    />
  </Svg>
);
export default IconlystArrowsInTheHeart3Outline;
