import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystController1Bulk = ({
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
      d="M13.35 6.525h2.75c2.98 0 5.4 2.42 5.4 5.4v4.3c0 2.98-2.42 5.4-5.4 5.4H7.9c-2.98 0-5.4-2.42-5.4-5.4v-4.3c0-2.98 2.42-5.4 5.4-5.4h5.45"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.63 16.506a.764.764 0 1 1 .76-.76c0 .42-.34.76-.76.76m-1.73-3.21a.77.77 0 0 1 0-1.54c.42 0 .77.35.77.77 0 .43-.35.77-.77.77m-4 1.58h-.95v.95c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.95H7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.95v-.95c0-.41.34-.75.75-.75s.75.34.75.75v.95h.95c.41 0 .75.34.75.75s-.34.75-.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.845 6.528h1.5v-.303c0-1.511-1.14-2.65-2.65-2.65h-1c-.188 0-.45-.171-.45-.45a.75.75 0 0 0-1.5 0c0 1.057.893 1.95 1.95 1.95h1c.687 0 1.15.462 1.15 1.15z"
    />
  </Svg>
);
export default IconlystController1Bulk;
