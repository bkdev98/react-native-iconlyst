import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag4Bold = ({
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
      d="M17.23 17.626a.75.75 0 0 1-1.5 0v-5.87a.75.75 0 0 1 1.5 0zm-2.62-10.84H9.391v-.14c0-.811.659-1.47 1.469-1.47h2.281c.81 0 1.469.659 1.469 1.47zm-1.86 10.84a.75.75 0 0 1-1.5 0v-5.87a.75.75 0 0 1 1.5 0zm-4.48 0a.75.75 0 0 1-1.5 0v-5.87a.75.75 0 0 1 1.5 0zm8.934-10.84H16.11v-.14a2.973 2.973 0 0 0-2.969-2.97H10.86a2.973 2.973 0 0 0-2.969 2.97v.14H6.795c-2.569 0-4.295 1.804-4.295 4.49v6.3c0 2.685 1.726 4.49 4.295 4.49h10.408c2.57 0 4.297-1.805 4.297-4.49v-6.3c0-2.686-1.727-4.49-4.296-4.49"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag4Bold;
