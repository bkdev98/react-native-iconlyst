import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacNotebookAiOutline = ({
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
      d="M2.25 16.416a1.3 1.3 0 0 1 1.3-1.3h16.9a1.3 1.3 0 0 1 1.3 1.3v.507a3.18 3.18 0 0 1-3.178 3.179H5.429a3.18 3.18 0 0 1-3.179-3.179zm1.5.2v.307a1.68 1.68 0 0 0 1.679 1.679h13.143a1.68 1.68 0 0 0 1.678-1.679v-.306z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.578 7.66A3.76 3.76 0 0 1 7.34 3.899h9.317a3.76 3.76 0 0 1 3.761 3.763v8.206a.75.75 0 0 1-1.5 0V7.66a2.26 2.26 0 0 0-2.261-2.263H7.34a2.26 2.26 0 0 0-2.262 2.263v8.206a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.154 6.786a.75.75 0 0 1 .704.49l.084.229c.243.656.76 1.173 1.414 1.416l.228.085a.75.75 0 0 1 0 1.406l-.228.085a2.4 2.4 0 0 0-1.414 1.416l-.084.228a.75.75 0 0 1-1.407 0l-.085-.228a2.4 2.4 0 0 0-1.414-1.416l-.228-.085a.75.75 0 0 1 0-1.406l.228-.085a2.4 2.4 0 0 0 1.414-1.416l.085-.229a.75.75 0 0 1 .703-.49m0 2.331a4 4 0 0 1-.591.592q.328.264.591.592.264-.328.592-.592a4 4 0 0 1-.592-.592M14.971 10.09a.75.75 0 0 1 .718.532c.08.26.282.463.54.542a.75.75 0 0 1 0 1.435.81.81 0 0 0-.54.542.75.75 0 0 1-1.435 0 .81.81 0 0 0-.541-.542.75.75 0 0 1 0-1.435.81.81 0 0 0 .54-.542.75.75 0 0 1 .718-.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMacNotebookAiOutline;
