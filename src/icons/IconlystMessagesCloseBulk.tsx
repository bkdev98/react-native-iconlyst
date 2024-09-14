import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesCloseBulk = ({
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
      d="M20.916 10.782c-.398-4.057-3.596-7.329-7.603-7.78-2.376-.267-4.683.426-6.477 1.955-1.9 1.621-3.06 4.043-3.182 6.644-.243 5.2 3.961 9.15 8.24 10.367q.134.038.27.038c.212 0 .421-.07.598-.203a1.03 1.03 0 0 0 .408-.818l.018-1.495c4.996-.602 8.173-4.183 7.728-8.708"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.516 13.707a.747.747 0 0 1-1.061-.002l-1.153-1.158-1.151 1.154a.749.749 0 1 1-1.062-1.058l1.154-1.158-1.156-1.16a.75.75 0 0 1 .002-1.06.75.75 0 0 1 1.06.002l1.153 1.155 1.15-1.154a.75.75 0 0 1 1.06-.002.75.75 0 0 1 .003 1.06l-1.155 1.159 1.158 1.161a.75.75 0 0 1-.002 1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesCloseBulk;
