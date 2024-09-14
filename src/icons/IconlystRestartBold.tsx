import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRestartBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.056 13.599a.75.75 0 1 1-1.428-.458 3.787 3.787 0 0 0-1.045-3.933 3.77 3.77 0 0 0-2.736-1.012c-.406.034-.762-.306-.777-.721a.75.75 0 0 1 .72-.778 5.33 5.33 0 0 1 3.813 1.41 5.28 5.28 0 0 1 1.697 3.695 5.2 5.2 0 0 1-.244 1.797m-1.777 2.58a5.3 5.3 0 0 1-3.653 1.114.75.75 0 0 1 .11-1.496q.271.02.553-.001a3.8 3.8 0 0 0 2.066-.799.75.75 0 1 1 .924 1.182m-5.271-.023a.747.747 0 0 1-1.044.188 5.3 5.3 0 0 1-1.435-1.486.75.75 0 1 1 1.259-.814c.274.423.621.783 1.032 1.068a.75.75 0 0 1 .188 1.044M6.709 12.35a5.2 5.2 0 0 1 .081-1.381.75.75 0 0 1 1.473.283c-.063.33-.083.661-.058.983a.75.75 0 0 1-.749.808.75.75 0 0 1-.747-.693m1.407-3.969q.223-.243.48-.459a.75.75 0 1 1 .965 1.148 4 4 0 0 0-.342.327.75.75 0 1 1-1.103-1.016M16.217 2.5H7.783C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.123 5.526 5.283 5.526h8.433c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRestartBold;
