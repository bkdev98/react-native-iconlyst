import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardRecieveBold = ({
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
      d="M6.777 9.99a.75.75 0 0 1 0-1.5h10.33a.75.75 0 0 1 0 1.5zm5.898 9.013c-.017-.023-.038-.043-.054-.066-.063-.093-.111-.195-.16-.295-.023-.046-.052-.087-.072-.134a2.5 2.5 0 0 1-.12-.385c-.006-.028-.018-.054-.024-.082a2.5 2.5 0 0 1 0-1.005l.008-.026q.048-.227.137-.44c.02-.048.05-.09.073-.136q.134-.27.332-.503c.045-.053.083-.11.132-.159l.005-.007 2.056-2.04a2.5 2.5 0 0 1 4.16 1.073c.04.139.163.242.307.242h1.56q.129 0 .253.016c.195.023.382-.118.382-.314v-6.32c0-2.85-1.831-4.766-4.556-4.766H6.79c-2.724 0-4.555 1.915-4.555 4.766v6.732c0 2.851 1.83 4.766 4.555 4.766h6.024a.3.3 0 0 0 .212-.512l-.098-.098a2.5 2.5 0 0 1-.253-.307"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.015 16.79h-4.502l.764-.758a.749.749 0 1 0-1.056-1.064l-2.057 2.04a.75.75 0 0 0 0 1.063l2.056 2.05a.745.745 0 0 0 1.06-.002.75.75 0 0 0-.002-1.06l-.77-.769h4.507a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardRecieveBold;
