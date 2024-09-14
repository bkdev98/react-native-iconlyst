import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardRecieveOutline = ({
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
      d="M3.77 5.195c.843-.904 2.04-1.406 3.445-1.406h10.07c1.407 0 2.605.502 3.448 1.407C21.57 6.095 22 7.33 22 8.706v3.491a.75.75 0 0 1-1.5 0v-3.49c0-1.067-.33-1.915-.865-2.49-.529-.567-1.313-.928-2.35-.928H7.215c-1.033 0-1.818.36-2.348.93C4.331 6.792 4 7.64 4 8.705v6.587c0 1.067.33 1.915.865 2.489.529.568 1.313.929 2.35.929h3.749a.75.75 0 0 1 0 1.5h-3.75c-1.406 0-2.605-.502-3.447-1.407-.837-.9-1.267-2.135-1.267-3.51V8.705c0-1.376.432-2.612 1.27-3.51"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 9.832a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M13.6 16.969a.75.75 0 0 1 .75-.75h6.617a.75.75 0 1 1 0 1.5H14.35a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.218 14.108a.75.75 0 0 1-.002 1.06l-1.803 1.796 1.803 1.795a.75.75 0 1 1-1.058 1.063l-2.338-2.326a.75.75 0 0 1 0-1.063l2.337-2.328a.75.75 0 0 1 1.061.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardRecieveOutline;
