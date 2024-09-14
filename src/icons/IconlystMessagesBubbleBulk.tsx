import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesBubbleBulk = ({
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
      d="M11.087 12.306a6.9 6.9 0 0 1 5.45-2.65c.936 0 1.835.184 2.666.527.16.066.33-.078.277-.242a8.9 8.9 0 0 0-1.473-2.756 8.99 8.99 0 0 0-6.53-3.43c-2.55-.14-5.06.81-6.87 2.62-2.65 2.66-3.37 6.74-1.81 10.13.13.33.58 1.13.93 1.75.09.14.08.31-.02.44-.21.3-.47.68-.68.99-.27.41-.29.93-.06 1.36s.67.7 1.16.7h6.82q.214 0 .43-.011c.176-.009.253-.229.13-.356a5 5 0 0 1-.27-.302c-2.11-2.51-2.17-6.2-.15-8.77"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.053 19.76c.192-.333.437-.77.504-.937a5.08 5.08 0 0 0-1.008-5.687 5 5 0 0 0-3.848-1.467 5.04 5.04 0 0 0-3.554 8.276 5.03 5.03 0 0 0 3.85 1.797h.015c.45-.002 2.448 0 3.629 0 .346 0 .662-.19.826-.494a.95.95 0 0 0-.047-.97 12 12 0 0 0-.367-.517"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMessagesBubbleBulk;
