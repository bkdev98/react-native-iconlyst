import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudsLoadingLight = ({
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
      d="M4.834 6.635a9 9 0 0 1 1.452-1.552M17.617 19.087a8.96 8.96 0 0 1-4.878 1.887 9 9 0 0 1-2.645-.193M6.904 19.36a9 9 0 0 1-3.119-3.78M3.38 9.544a9 9 0 0 0-.3 3.033M19.7 16.724a8.9 8.9 0 0 0 1.345-5.06 9.01 9.01 0 0 0-9.348-8.657"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.154 10.867c-1.26.01-2.279.857-2.279 2.3a2.3 2.3 0 0 0 1.354 2.096c.335.137.67.189.924.189h5.44c.255 0 .59-.05.93-.186a2.3 2.3 0 0 0 1.352-2.1c0-1.442-1.018-2.288-2.279-2.3 0-.906-.712-2.72-2.721-2.72s-2.72 1.814-2.72 2.72"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudsLoadingLight;
