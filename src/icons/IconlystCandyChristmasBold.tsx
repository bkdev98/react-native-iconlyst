import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandyChristmasBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.278 9.257a.2.2 0 0 0 .073-.156 6.3 6.3 0 0 0-.68-2.732.194.194 0 0 0-.305-.053l-4.292 3.88a.2.2 0 0 0-.066.148v2.77a.2.2 0 0 0 .326.155zM12.632 8.433c0 .018.008.036.024.045a.08.08 0 0 0 .088-.007l3.77-3.408a.195.195 0 0 0 .01-.282 6.33 6.33 0 0 0-3.672-1.849.195.195 0 0 0-.22.196zM13.008 18.355a.2.2 0 0 0 .326.156l4.946-4.016a.2.2 0 0 0 .074-.155v-2.794a.2.2 0 0 0-.326-.155l-4.946 4.014a.2.2 0 0 0-.074.155zM6.53 6.536a.194.194 0 0 0-.306.06 6.3 6.3 0 0 0-.578 2.633A2.676 2.676 0 0 0 8.319 11.9a2.67 2.67 0 0 0 2.378-1.46.19.19 0 0 0-.046-.23zM13.291 20.477a.19.19 0 0 0-.058.223 2.67 2.67 0 0 0 2.448 1.623 2.676 2.676 0 0 0 2.672-2.673v-2.863a.2.2 0 0 0-.326-.155zM10.799 8.335a.2.2 0 0 0 .333-.15V3.17a.195.195 0 0 0-.227-.194 6.35 6.35 0 0 0-3.598 1.98.195.195 0 0 0 .016.277z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCandyChristmasBold;
