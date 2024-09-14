import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDragBroken = ({
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
      d="M14.41 20.842c-2.516.446-5.497-.037-6.772-1.623-1.243-1.545-2.208-3.42-2.817-5.1-.326-.901.153-1.873 1.048-2.216a1.836 1.836 0 0 1 2.17.672l1.202 1.745V4.68a1.68 1.68 0 0 1 3.361-.025l.067 4.347c2.352.225 5.757.103 6.708 2.67.957 2.583.015 6.002-1.662 7.679M5.74 4l-1.5 1.5L5.74 7M19.24 5.5a1.5 1.5 0 1 1-1.5-1.5M12.74 5.5h3.5M4.24 5.5h5"
    />
  </Svg>
);
export default IconlystDragBroken;
