import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUranusOutline = ({
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
      d="M2.864 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75m9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.356 4.57a.75.75 0 0 1-.698.798c-2.259.15-3.79 1.51-5.627 3.143q-.195.175-.397.352c-1.974 1.745-4.277 3.598-7.966 3.598a.75.75 0 1 1 0-1.5c3.099 0 5.038-1.512 6.973-3.222l.453-.402c1.76-1.573 3.67-3.28 6.464-3.466a.75.75 0 0 1 .798.699M20.498 6.633a.75.75 0 0 1-.579.889c-1.132.24-2.141.91-3.143 1.88-.863.835-1.671 1.84-2.53 2.907l-.444.552c-1.998 2.468-4.343 5.18-7.932 5.594a.75.75 0 0 1-.172-1.49c2.902-.335 4.894-2.523 6.938-5.048l.431-.535c.854-1.063 1.73-2.152 2.666-3.058 1.102-1.066 2.355-1.948 3.875-2.27a.75.75 0 0 1 .89.579M22.332 12.081a.75.75 0 0 1-.645.843c-1.93.256-6.933 2.228-10.401 8.145a.75.75 0 1 1-1.294-.759c3.708-6.326 9.12-8.558 11.498-8.873a.75.75 0 0 1 .842.644M8.99 12.956a.75.75 0 0 1-.219 1.038c-.51.334-1.34.812-2.19 1.175a7.6 7.6 0 0 1-1.3.437c-.413.091-.887.141-1.321.023a.75.75 0 0 1 .395-1.447c.087.024.278.03.6-.04a6 6 0 0 0 1.038-.353c.75-.32 1.502-.753 1.958-1.051a.75.75 0 0 1 1.038.218"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.623 16.965c-.855.366-1.71.858-2.23 1.197a.75.75 0 0 1-.82-1.256 17 17 0 0 1 2.461-1.32 8.5 8.5 0 0 1 1.454-.489c.461-.102.979-.155 1.447-.027a.75.75 0 1 1-.395 1.447c-.121-.033-.356-.038-.726.045a7 7 0 0 0-1.19.403"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUranusOutline;