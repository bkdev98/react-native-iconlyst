import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClipboardChartsLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.823 6.405h-4.646c-.75 0-1.357-.607-1.357-1.357v-.573c0-.749.607-1.356 1.357-1.356h4.646c.75 0 1.357.607 1.357 1.356v.573c0 .75-.607 1.357-1.357 1.357"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.18 4.713a3.755 3.755 0 0 1 3.755 3.754v8.898a3.755 3.755 0 0 1-3.755 3.755H8.821a3.755 3.755 0 0 1-3.755-3.755V8.467a3.755 3.755 0 0 1 3.755-3.754M16.464 17.144V15.05M11.235 17.144v-2.86M13.85 17.143v-.773M8.545 17.143v-.773"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.198 13.182 2.758-2.99 3.147 2.06 2.699-2.905"
    />
  </Svg>
);
export default IconlystClipboardChartsLight;
