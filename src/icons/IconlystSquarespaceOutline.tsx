import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquarespaceOutline = ({
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
      d="M6.011 15.353c-.96 0-1.93-.36-2.66-1.09a3.77 3.77 0 0 1 0-5.33l5.46-5.46c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.46 5.46c-.88.88-.88 2.33 0 3.21s2.32.88 3.2 0l5.45-5.47c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.46 5.47c-.73.73-1.7 1.1-2.66 1.1z"
    />
    <Path
      fill={props.color}
      d="M6.142 12.205c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.46-5.46c1.42-1.42 3.9-1.42 5.32 0 .29.29.29.77 0 1.06s-.77.29-1.06 0c-.85-.86-2.34-.86-3.2 0l-5.46 5.46c-.15.15-.34.22-.53.22M14.661 20.745c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l5.46-5.47c.43-.42.66-.99.66-1.59 0-.61-.23-1.18-.66-1.61-.85-.86-2.34-.86-3.2 0l-5.46 5.46c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l5.46-5.46c1.42-1.42 3.9-1.42 5.32 0 .71.71 1.1 1.66 1.1 2.67 0 1-.39 1.94-1.1 2.65l-5.45 5.47c-.15.15-.34.22-.53.22z"
    />
    <Path
      fill={props.color}
      d="M10.272 19.613c-.96 0-1.93-.36-2.66-1.09a.754.754 0 0 1 0-1.06c.29-.29.77-.3 1.06 0 .88.88 2.32.88 3.2 0l5.45-5.47c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.45 5.47c-.73.73-1.7 1.1-2.66 1.1z"
    />
  </Svg>
);
export default IconlystSquarespaceOutline;
