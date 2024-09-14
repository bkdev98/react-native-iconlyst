import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdRefreshOutline = ({
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
      d="M13.971 14.964a3.9 3.9 0 0 1 7.383 1.752 3.899 3.899 0 0 1-7.235 2.018.75.75 0 1 1 1.283-.777 2.399 2.399 0 1 0-.091-2.318.75.75 0 1 1-1.34-.676"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.64 12.816a.75.75 0 0 1 .75.75v.984h.994a.75.75 0 0 1 0 1.5h-1.743a.75.75 0 0 1-.75-.75v-1.734a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.77 4.79c.843-.905 2.04-1.407 3.445-1.407h10.07c1.407 0 2.605.502 3.448 1.407C21.57 5.688 22 6.924 22 8.3v3.294a.75.75 0 0 1-1.5 0V8.3c0-1.066-.33-1.914-.865-2.488-.529-.568-1.313-.93-2.35-.93H7.215c-1.033 0-1.818.361-2.348.93C4.331 6.387 4 7.235 4 8.3v6.587c0 1.066.33 1.914.865 2.488.529.569 1.313.93 2.35.93h3.326a.75.75 0 0 1 0 1.5H7.215c-1.407 0-2.606-.503-3.448-1.407-.837-.9-1.267-2.135-1.267-3.51V8.3c0-1.377.432-2.612 1.27-3.51"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 9.434a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdRefreshOutline;
