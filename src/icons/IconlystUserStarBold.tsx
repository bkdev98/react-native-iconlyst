import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserStarBold = ({
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
      d="m15.679 17.119.215.207c.314.278.463.743.36 1.186l-.043.244.285-.149c.369-.198.82-.199 1.197.005l.264.138-.051-.291c-.094-.393.058-.861.406-1.166l.179-.173-.306-.045a1.27 1.27 0 0 1-.96-.69l-.14-.285-.138.278a1.28 1.28 0 0 1-.968.697zm-.442 4.233a1.26 1.26 0 0 1-1.118-.666 1.24 1.24 0 0 1-.133-.823l.24-1.367-1.01-.977a1.26 1.26 0 0 1 0-1.819c.167-.163.395-.283.637-.335l1.47-.215.62-1.253c.134-.281.392-.516.699-.63.35-.121.716-.095 1.023.066.202.091.404.28.539.522q.012.02.022.042l.62 1.253 1.399.204c.336.041.646.226.85.517.383.451.329 1.212-.171 1.668l-.982.958.242 1.372c.1.711-.368 1.353-1.04 1.465a1.3 1.3 0 0 1-.811-.128l-1.243-.653-1.256.658a1.35 1.35 0 0 1-.597.141M10.237 2.648c-2.606 0-4.718 2.144-4.718 4.786 0 2.644 2.112 4.786 4.718 4.786s4.718-2.142 4.718-4.786c0-2.642-2.112-4.786-4.718-4.786M11.5 13.572H7.879c-2.667 0-4.923 2.29-4.923 4.994 0 .504 0 1.105.093 1.614q.007.052.013.102c.03.19.227.365.509.365h5.723a.78.78 0 0 0 .722-.488l2.213-5.51a.784.784 0 0 0-.727-1.077"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserStarBold;
