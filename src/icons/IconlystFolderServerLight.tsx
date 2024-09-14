import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderServerLight = ({
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
      d="M18.65 11.398c0 2.487-1.465 3.952-3.95 3.952H9.291c-2.493 0-3.96-1.465-3.96-3.952v-4.45c0-2.482.913-3.948 3.4-3.948h1.389c.499.001.968.235 1.268.635l.634.843c.3.399.77.634 1.269.635h1.966c2.492 0 3.412 1.268 3.412 3.805zM13.497 19.502a1.497 1.497 0 1 1-2.995 0 1.497 1.497 0 0 1 2.995 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.814 19.503h-4.319m-2.996 0H6.184M11.998 18v-2.637"
    />
  </Svg>
);
export default IconlystFolderServerLight;
