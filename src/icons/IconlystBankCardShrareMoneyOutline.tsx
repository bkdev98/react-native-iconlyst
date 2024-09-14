import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardShrareMoneyOutline = ({
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
      d="M3.77 4.828c.843-.904 2.04-1.406 3.445-1.406h10.07c1.407 0 2.605.502 3.447 1.407C21.57 5.727 22 6.963 22 8.339v3.293a.75.75 0 0 1-1.5 0V8.34c0-1.066-.33-1.914-.864-2.488-.53-.568-1.314-.93-2.35-.93H7.215c-1.033 0-1.818.361-2.348.93C4.331 6.426 4 7.274 4 8.339v6.587c0 1.066.33 1.914.865 2.488.529.568 1.313.929 2.35.929h3.326a.75.75 0 0 1 0 1.5H7.215c-1.408 0-2.606-.502-3.448-1.407-.837-.899-1.267-2.134-1.267-3.51V8.339c0-1.377.432-2.612 1.27-3.51"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 9.469a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M19.513 13.512a.75.75 0 0 1 .75.75v5.565a.75.75 0 0 1-1.5 0v-5.565a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.236 17.628a.75.75 0 0 1 1.06-.02l1.217 1.174 1.216-1.173a.75.75 0 1 1 1.041 1.08l-1.736 1.675a.75.75 0 0 1-1.041 0l-1.738-1.676a.75.75 0 0 1-.02-1.06M14.914 13.016a.75.75 0 0 1 .75.75v5.565a.75.75 0 0 1-1.5 0v-5.565a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.393 13.226a.75.75 0 0 1 1.041 0l1.738 1.675a.75.75 0 1 1-1.041 1.08l-1.217-1.173-1.216 1.173a.75.75 0 0 1-1.042-1.08z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardShrareMoneyOutline;
