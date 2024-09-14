import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightSquareLineBold = ({
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
      d="M17.451 12.313c0 .022-.011.042-.013.066a.8.8 0 0 1-.045.222.8.8 0 0 1-.165.243l-3.049 3.04a.747.747 0 0 1-1.061-.002.75.75 0 0 1 .002-1.06l1.765-1.76h-4.807a.75.75 0 0 1 0-1.5h4.808L13.12 9.806a.75.75 0 0 1 1.059-1.062l3.051 3.037c.027.027.039.062.061.091.037.048.077.095.101.15q.058.138.059.291m-9.4 2.726a.75.75 0 0 1-1.5 0v-5.45a.75.75 0 0 1 1.5 0zm7.923-12.226H8.026C4.721 2.813 2.5 4.936 2.5 8.096v8.434c0 3.159 2.221 5.282 5.526 5.282h7.948c3.305 0 5.526-2.123 5.526-5.282V8.097c0-3.16-2.221-5.284-5.526-5.284"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightSquareLineBold;
