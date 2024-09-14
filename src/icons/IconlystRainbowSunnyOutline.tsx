import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainbowSunnyOutline = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.864 16.16a.75.75 0 0 1 .75-.75 5.17 5.17 0 0 1 5.173 5.173.75.75 0 0 1-1.5 0 3.67 3.67 0 0 0-3.673-3.673.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.864 13.392a.75.75 0 0 1 .75-.75 7.94 7.94 0 0 1 7.941 7.94.75.75 0 0 1-1.5 0 6.44 6.44 0 0 0-6.44-6.44.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.864 10.565a.75.75 0 0 1 .75-.75c5.947 0 10.768 4.82 10.768 10.768a.75.75 0 0 1-1.5 0 9.27 9.27 0 0 0-9.268-9.268.75.75 0 0 1-.75-.75M15.777 2.667a.75.75 0 0 1 .75.75v.021a.75.75 0 0 1-1.5 0v-.02a.75.75 0 0 1 .75-.75m4.665 1.915a.75.75 0 0 1 0 1.061l-.03.03a.75.75 0 0 1-1.06-1.061l.03-.03a.75.75 0 0 1 1.06 0M11.13 4.6a.75.75 0 0 1 1.06 0l.013.013a.75.75 0 0 1-1.06 1.06l-.013-.012a.75.75 0 0 1 0-1.06M9.18 9.256a.75.75 0 0 1 .75-.75h.032a.75.75 0 0 1 0 1.5H9.93a.75.75 0 0 1-.75-.75m11.656 0a.75.75 0 0 1 .75-.75h.027a.75.75 0 1 1 0 1.5h-.027a.75.75 0 0 1-.75-.75m-1.485 3.575a.75.75 0 0 1 1.06 0l.03.03a.75.75 0 1 1-1.06 1.06l-.03-.029a.75.75 0 0 1 0-1.06m-3.575 1.485a.75.75 0 0 1 .75.75v.02a.75.75 0 0 1-1.5 0v-.02a.75.75 0 0 1 .75-.75M15.773 6.802a2.447 2.447 0 1 0 0 4.894 2.447 2.447 0 0 0 0-4.894m-3.947 2.446a3.947 3.947 0 1 1 7.894.001 3.947 3.947 0 0 1-7.894 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRainbowSunnyOutline;
