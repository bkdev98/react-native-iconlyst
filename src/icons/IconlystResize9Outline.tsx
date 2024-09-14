import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize9Outline = ({
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
      d="M4.597 4.74c.893-.957 2.162-1.49 3.654-1.49h1.98a.75.75 0 0 1 0 1.5h-1.98c-1.12 0-1.977.392-2.557 1.014-.585.627-.944 1.55-.944 2.704v7.064c0 1.154.358 2.078.942 2.705.578.621 1.434 1.013 2.559 1.013h7.497c1.125 0 1.981-.392 2.56-1.013.584-.628.942-1.55.942-2.705v-1.547a.75.75 0 0 1 1.5 0v1.547c0 1.464-.458 2.775-1.344 3.727-.893.958-2.163 1.491-3.658 1.491H8.25c-1.496 0-2.765-.533-3.657-1.491-.887-.952-1.344-2.263-1.344-3.727V8.468c0-1.465.46-2.776 1.347-3.727"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.046 4.75a.75.75 0 1 1 0-1.5h3.953a.75.75 0 0 1 .75.75v3.953a.75.75 0 0 1-1.5 0V5.811l-6.067 6.067h2.143a.75.75 0 0 1 0 1.5H11.37a.75.75 0 0 1-.75-.75V8.675a.75.75 0 0 1 1.5 0v2.143L18.19 4.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize9Outline;
