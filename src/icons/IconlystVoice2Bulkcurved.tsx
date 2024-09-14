import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoice2Bulkcurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.028 13.325H5.472a.75.75 0 0 0 0 1.5h.945a5.89 5.89 0 0 0 5.083 5.082v1.599a.75.75 0 0 0 1.5 0v-1.599a5.89 5.89 0 0 0 5.083-5.082h.945a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.254 2.952c-3.25 0-5.89 2.64-5.89 5.89v2.14c0 .28.22.5.5.5h10.77c.28 0 .5-.22.5-.5v-2.14c0-3.25-2.64-5.89-5.88-5.89"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.753 9.642h2.99c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.99c-.41 0-.75.34-.75.75s.34.75.75.75M12.753 5.372h-1.01c-.41 0-.75.34-.75.75s.34.75.75.75h1.01c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"
    />
  </Svg>
);
export default IconlystVoice2Bulkcurved;
