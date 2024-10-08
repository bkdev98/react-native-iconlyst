import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScaleDashBold = ({
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
      d="M20.438 8.856c0 .72-.55 1.29-1.26 1.34-.03.01-.07.01-.1.01h-3.08c-.74 0-1.35-.6-1.35-1.35v-3.08c0-.74.61-1.35 1.35-1.35h3.08c.75 0 1.36.61 1.36 1.35zm-1.36-5.93h-3.08c-1.57 0-2.85 1.28-2.85 2.85v.25h-3.88c-2.2 0-3.58 1.56-3.58 3.76v5.96c0 2.21 1.37 3.77 3.58 3.77h6.32c2.22 0 3.59-1.56 3.59-3.77v-4.04a2.85 2.85 0 0 0 2.76-2.85v-3.08c0-1.57-1.28-2.85-2.86-2.85M21.184 13.387a.75.75 0 0 0-.75.75v2.257a.75.75 0 0 0 1.5 0v-2.257a.75.75 0 0 0-.75-.75M3.934 16.2v-2.063a.75.75 0 0 0-1.5 0V16.2a.75.75 0 0 0 1.5 0M3.184 11.97a.75.75 0 0 0 .75-.75V8.97a.75.75 0 0 0-1.5 0v2.248c0 .414.336.75.75.75M10.724 20.928H8.467a.75.75 0 0 0 0 1.5h2.257a.75.75 0 0 0 0-1.5M8.65 4.428h2.072a.75.75 0 0 0 0-1.5H8.65a.75.75 0 0 0 0 1.5M15.705 20.928h-2.062a.75.75 0 0 0 0 1.5h2.062a.75.75 0 0 0 0-1.5M5.814 20.381a3.3 3.3 0 0 1-1.37-1.469.75.75 0 1 0-1.352.65 4.78 4.78 0 0 0 1.996 2.131.746.746 0 0 0 1.019-.293.75.75 0 0 0-.293-1.019M20.872 18.743a.75.75 0 0 0-1.018.299 3.4 3.4 0 0 1-1.439 1.426.75.75 0 0 0 .693 1.33 4.97 4.97 0 0 0 2.063-2.037.75.75 0 0 0-.299-1.018M3.487 6.624a.747.747 0 0 0 1.017-.3A3.5 3.5 0 0 1 5.95 4.886a.75.75 0 0 0-.705-1.325 4.97 4.97 0 0 0-2.057 2.046.75.75 0 0 0 .3 1.017"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScaleDashBold;
