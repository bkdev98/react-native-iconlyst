import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesCloseBold = ({
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
      d="M14.516 13.707a.747.747 0 0 1-1.061-.002l-1.153-1.158-1.151 1.154a.749.749 0 1 1-1.062-1.058l1.154-1.158-1.156-1.16a.75.75 0 0 1 .002-1.06.75.75 0 0 1 1.06.002l1.153 1.155 1.151-1.154a.75.75 0 0 1 1.06-.002.75.75 0 0 1 .002 1.06l-1.155 1.16 1.158 1.16a.75.75 0 0 1-.002 1.061m6.4-2.925c-.399-4.057-3.596-7.329-7.601-7.78-2.382-.266-4.683.425-6.477 1.954C4.936 6.577 3.776 9 3.654 11.601c-.242 5.197 3.962 9.15 8.239 10.366a.98.98 0 0 0 .87-.163c.255-.193.408-.499.408-.819L13.17 19.5s.005-.007.019-.009c4.995-.602 8.173-4.182 7.727-8.708"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesCloseBold;
