import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystController1Bold = ({
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
      fillRule="evenodd"
      d="M16.63 16.505a.764.764 0 1 1 .76-.76c0 .42-.34.76-.76.76m-1.73-3.21a.77.77 0 0 1 0-1.54c.42 0 .77.35.77.77 0 .43-.35.77-.77.77m-4 1.58h-.95v.95c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.95H7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.95v-.95c0-.41.34-.75.75-.75s.75.34.75.75v.95h.95c.41 0 .75.34.75.75s-.34.75-.75.75m5.2-8.35h-2.75v-.3c0-1.46-1.19-2.65-2.65-2.65h-1c-.19 0-.45-.17-.45-.45 0-.41-.34-.75-.75-.75s-.75.34-.75.75c0 1.06.89 1.95 1.95 1.95h1c.55 0 1.15.44 1.15 1.15v.3H7.9c-2.98 0-5.4 2.42-5.4 5.4v4.3c0 2.98 2.42 5.4 5.4 5.4h8.2c2.98 0 5.4-2.42 5.4-5.4v-4.3c0-2.98-2.42-5.4-5.4-5.4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystController1Bold;
