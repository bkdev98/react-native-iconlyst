import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlovesBroken = ({
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
      d="M19.321 12.569a5.664 5.664 0 1 0-8.209-7.808L9.331 6.635l.002-1.341a2.247 2.247 0 1 0-4.49.128l.312 5.26a.74.74 0 0 1-.202.555l-1.477 1.552a1.295 1.295 0 0 0 .045 1.832l6.331 6.022a1.296 1.296 0 0 0 1.832-.046l5.366-5.64M7.173 13.633l5.846 5.56"
    />
  </Svg>
);
export default IconlystGlovesBroken;
