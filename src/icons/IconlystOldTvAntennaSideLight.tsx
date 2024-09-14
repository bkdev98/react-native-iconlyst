import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntennaSideLight = ({
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
      d="M7.03 20.794h9.942A4.03 4.03 0 0 0 21 16.764v-5.456a4.03 4.03 0 0 0-4.028-4.029H7.029A4.03 4.03 0 0 0 3 11.31v5.456a4.03 4.03 0 0 0 4.03 4.029"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.035 3.203-2.773 4.075-2.701-4.075M6.978 7.28h3.724a4.03 4.03 0 0 1 4.03 4.03v5.456a4.03 4.03 0 0 1-4.03 4.029H6.978"
    />
  </Svg>
);
export default IconlystOldTvAntennaSideLight;
