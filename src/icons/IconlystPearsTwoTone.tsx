import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPearsTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.89 11.929c1.324-.983 1.43-2.257 1.43-3.042 0-2.059 1.092-3.072 2.686-3.072 1.745 0 2.594 1.175 2.686 3.072 0 1.843 1.6 2.949 2.203 3.83 2.574 3.766-.495 8.331-4.89 8.202-.838.025-2.078-.349-2.79-.628"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.006 5.815c-.054-1.198.617-2.304.617-2.304M9.803 20.8c3.366-.797 4.77-4.893 2.045-7.232-.638-.547-2.08-1.062-2.455-2.463-.456-1.423-1.34-2.144-2.667-1.788-1.212.325-1.836 1.318-1.416 2.882.348 1.301-.616 2.568-.895 3.361-1.19 3.387 2.073 6.233 5.388 5.24M6.597 9.346c-.17-.77-.784-1.358-.784-1.358M9.363 15.662l.4.931M7.614 16.13l.12 1.007"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.554 5.72c-.573-2.14-1.481-2.665-3.62-2.091.583 2.178 1.625 2.625 3.62 2.09"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPearsTwoTone;
