import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdTimeOutline = ({
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
      d="M3.77 4.215c.843-.904 2.04-1.406 3.445-1.406h10.07c1.407 0 2.605.501 3.448 1.406C21.57 5.114 22 6.35 22 7.725v2.924a.75.75 0 1 1-1.5 0V7.725c0-1.066-.33-1.914-.865-2.488-.529-.568-1.313-.928-2.35-.928H7.215c-1.033 0-1.818.36-2.348.929C4.331 5.812 4 6.66 4 7.725v6.588c0 1.066.33 1.914.865 2.488.529.568 1.313.928 2.35.928h3.306a.75.75 0 0 1 0 1.5H7.215c-1.407 0-2.605-.501-3.448-1.406-.837-.899-1.267-2.134-1.267-3.51V7.725c0-1.376.432-2.612 1.27-3.51"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 8.855a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M17.362 13.617a3.037 3.037 0 1 0 .002 6.073 3.037 3.037 0 0 0-.002-6.073m-4.536 3.037a4.537 4.537 0 1 1 9.073 0 4.537 4.537 0 0 1-9.073 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.343 14.637a.75.75 0 0 1 .75.75V16.5l.831.497a.75.75 0 1 1-.77 1.288l-1.196-.715a.75.75 0 0 1-.365-.644v-1.54a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdTimeOutline;
