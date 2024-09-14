import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouseCursorBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M21.686 11.75H20.64a.75.75 0 0 0 0 1.5h1.045a.75.75 0 0 0 0-1.5M6.655 7.553a.75.75 0 0 0 1.061-.001.75.75 0 0 0 0-1.061l-1-.998a.75.75 0 1 0-1.06 1.06zM6.679 17.49l-1 1a.75.75 0 1 0 1.06 1.062l1-1a.75.75 0 1 0-1.06-1.061M12.685 5.25a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-1.5 0v1c0 .414.336.75.75.75M4.73 11.75H3.687a.75.75 0 0 0 0 1.5H4.73a.75.75 0 0 0 0-1.5M18.185 7.75a.75.75 0 0 0 .53-.22l1-1a.75.75 0 0 0-1.06-1.061l-1 1a.75.75 0 0 0 .53 1.28M12.685 19.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75M18.737 17.469a.751.751 0 0 0-1.061 1.062l1.001 1a.751.751 0 0 0 1.061-1.062z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.345 11.773-4.367-2.604a1.37 1.37 0 0 0-1.548.038 1.37 1.37 0 0 0-.561 1.435l.985 4.89c.126.56.554.969 1.12 1.068q.128.023.252.023c.47 0 .9-.234 1.163-.644l.816-1.276 1.71-.384a1.37 1.37 0 0 0 1.07-1.12 1.38 1.38 0 0 0-.64-1.426"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMouseCursorBulk;
