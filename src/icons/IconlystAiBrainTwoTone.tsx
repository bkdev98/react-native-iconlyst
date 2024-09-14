import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M18.514 6.256c1.371.405 1.995 1.61 2.279 2.412.772.777 2.279 2.737 0 4.906 1.255.642 1.912 4.297-3.206 4.601v1.723a.08.08 0 0 1-.077.082h-1.688a.08.08 0 0 1-.07-.049l-.829-2.581c-.693.346-2.16.472-2.762-.696-1.274 1.237-3.901.783-3.998-1.391-.82.584-2.41.682-3.534 0-1.69-1.027-2.178-3.877-.927-5.742M7.486 5.545c1.177-.693 3.63-2.207 6.76-1.173" />
      <Path d="M18.348 7.11c.696-2.2-2.675-4.378-4.86-1.943M5.776 11.382c-3.9-.993-1.235-7.724 3.457-5.291" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.373 13.252 1.997-4.565 2.054 4.565"
    />
    <Path stroke={props.color} strokeWidth={1.5} d="M9.907 12.078h2.981" />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.627 13.252V8.855"
    />
  </Svg>
);
export default IconlystAiBrainTwoTone;
