import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpSquareBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M16.34 2C19.729 2 22 4.38 22 7.92v8.17c0 3.53-2.271 5.91-5.66 5.91H7.67C4.28 22 2 19.62 2 16.09V7.92C2 4.38 4.28 2 7.67 2Zm-3.81 5.38a.774.774 0 0 0-1.06 0l-3.75 3.77c-.29.29-.29.77 0 1.06.3.29.77.29 1.07 0l2.46-2.48v6.35c0 .42.34.75.75.75.42 0 .75-.33.75-.75V9.73l2.47 2.48c.14.14.34.22.53.22.189 0 .38-.08.53-.22.29-.29.29-.77 0-1.06Z"
    />
  </Svg>
);
export default IconlystArrowUpSquareBold;
