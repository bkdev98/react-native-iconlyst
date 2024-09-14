import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdGemOutline = ({
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
      d="M14.138 13.457a.75.75 0 0 1 .654-.383h4.924a.75.75 0 0 1 .654.383l1.23 2.194a.75.75 0 0 1-.096.869l-3.693 4.103a.75.75 0 0 1-1.114 0l-3.693-4.103a.75.75 0 0 1-.097-.869zm1.094 1.117-.753 1.342L17.254 19l2.775-3.084-.753-1.342z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.77 4.54c.843-.905 2.04-1.407 3.445-1.407h10.07c1.407 0 2.605.502 3.448 1.406C21.57 5.44 22 6.674 22 8.05v2.924a.75.75 0 0 1-1.5 0V8.049c0-1.066-.33-1.913-.865-2.487-.529-.568-1.313-.93-2.35-.93H7.215c-1.033 0-1.818.361-2.348.93C4.331 6.136 4 6.984 4 8.049v6.588c0 1.066.33 1.914.865 2.488.529.568 1.313.928 2.35.928h3.557a.75.75 0 1 1 0 1.5H7.215c-1.407 0-2.605-.501-3.448-1.406-.837-.898-1.267-2.134-1.267-3.51V8.05c0-1.376.432-2.612 1.27-3.51"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 9.18a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdGemOutline;
