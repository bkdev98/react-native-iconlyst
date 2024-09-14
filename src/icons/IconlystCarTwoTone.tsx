import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.862 21c.758-.544.758-1.427 0-1.971-.76-.544-.76-1.427 0-1.971M14.638 21c.758-.544.758-1.427 0-1.971-.76-.544-.76-1.427 0-1.971M15.185 10.634h1.491M7.816 10.634h1.491M4.785 7.159c4.946.701 9.967.701 14.914 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.787 14.744a.83.83 0 0 0 .83.832h1.644a.83.83 0 0 0 .83-.83v-.34a.83.83 0 0 1 .83-.83h6.65a.83.83 0 0 1 .829.83v.34c0 .459.371.83.83.83h1.655a.83.83 0 0 0 .83-.83V10.41c0-.673-.215-1.328-.613-1.871l-.967-1.298a1.5 1.5 0 0 1-.186-.355l-.87-2.418a1.86 1.86 0 0 0-1.435-1.201 21.8 21.8 0 0 0-6.78 0 1.86 1.86 0 0 0-1.427 1.201l-.87 2.418a1.4 1.4 0 0 1-.186.339l-.984 1.354a3.14 3.14 0 0 0-.596 1.846z"
    />
  </Svg>
);
export default IconlystCarTwoTone;
