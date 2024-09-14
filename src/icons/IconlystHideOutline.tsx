import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHideOutline = ({
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
      d="M7.045 18.913a.76.76 0 0 1-.478-.172 13.9 13.9 0 0 1-4.012-5.492.75.75 0 0 1 0-.562A14.04 14.04 0 0 1 6.6 7.173a8.784 8.784 0 0 1 11.32.018.75.75 0 1 1-.954 1.158 7.28 7.28 0 0 0-9.412-.018 12.5 12.5 0 0 0-3.491 4.64 12.36 12.36 0 0 0 3.46 4.614.75.75 0 0 1-.48 1.328z"
    />
    <Path
      fill={props.color}
      d="M4.577 21.394a.75.75 0 0 1-.53-1.28l15.35-15.35a.75.75 0 1 1 1.06 1.06l-15.35 15.35a.74.74 0 0 1-.53.22"
    />
    <Path
      fill={props.color}
      d="M10.071 15.888a.75.75 0 0 1-.528-.217 3.826 3.826 0 0 1 2.7-6.532h.006a3.8 3.8 0 0 1 2.7 1.12.75.75 0 1 1-1.06 1.06 2.3 2.3 0 0 0-1.642-.68 2.2 2.2 0 0 0-1.649.684 2.325 2.325 0 0 0 0 3.282.75.75 0 0 1-.528 1.283zM12.25 20.82c-.918 0-1.83-.149-2.7-.44a.75.75 0 1 1 .474-1.422 7 7 0 0 0 2.225.361c3.326 0 6.366-2.369 8.182-6.356a14.3 14.3 0 0 0-1.535-2.613.75.75 0 1 1 1.206-.892 15.7 15.7 0 0 1 1.838 3.214.75.75 0 0 1 0 .59c-2.042 4.732-5.664 7.557-9.69 7.557"
    />
    <Path
      fill={props.color}
      d="M12.804 16.738a.75.75 0 0 1-.135-1.488 2.335 2.335 0 0 0 1.867-1.87.75.75 0 1 1 1.476.268 3.845 3.845 0 0 1-3.07 3.078 1 1 0 0 1-.138.012"
    />
  </Svg>
);
export default IconlystHideOutline;
