import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonOffOutline = ({
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
      d="M7.777 22.225c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l13.42-13.42c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-13.42 13.42c-.15.15-.34.22-.53.22"
    />
    <Path
      fill={props.color}
      d="M10.687 19.105h-.04c-3.88-.19-7.04-3.25-7.36-7.13a.76.76 0 0 1 .92-.8c1.96.44 4.17-.51 5.34-1.67 1.19-1.2 1.73-3.2 1.33-4.99a.751.751 0 0 1 .8-.91c3.89.32 6.95 3.5 7.12 7.41.02.41-.3.76-.72.78-.4.01-.76-.3-.78-.72a6.26 6.26 0 0 0-4.8-5.82c.13 1.99-.56 3.99-1.89 5.32-1.46 1.46-3.68 2.3-5.67 2.22a6.28 6.28 0 0 0 5.79 4.82.75.75 0 0 1-.04 1.5z"
    />
  </Svg>
);
export default IconlystMoonOffOutline;
