import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationRightOutline = ({
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
      d="M16.065 21.756q-.24 0-.474-.046l-3.942-.767h-.49l-3.94.767a2.412 2.412 0 0 1-2.063-4.17l4.232-3.762a3.036 3.036 0 0 1 4.033 0l4.232 3.761a2.414 2.414 0 0 1-1.588 4.217m-4.977-2.313h.633a1 1 0 0 1 .144.013l4.012.781a.912.912 0 0 0 .78-1.577l-4.232-3.76a1.54 1.54 0 0 0-2.041 0l-4.231 3.76a.912.912 0 0 0 .779 1.577l4.012-.78a1 1 0 0 1 .144-.014M16.788 8.866a.749.749 0 0 1-.524-1.286l2.064-2.017-2.064-2.017a.75.75 0 1 1 1.047-1.072l2.614 2.553a.75.75 0 0 1 0 1.072l-2.614 2.554a.75.75 0 0 1-.523.213"
    />
    <Path
      fill={props.color}
      d="M11.402 10.883a.75.75 0 0 1-.75-.75 5.13 5.13 0 0 1 5.321-5.32h3.43a.75.75 0 1 1 0 1.5h-3.43a3.67 3.67 0 0 0-3.82 3.82.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystNavigationRightOutline;
