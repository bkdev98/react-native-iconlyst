import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVerticalScrollPointLight = ({
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
      stroke="#141B34"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 13.945a1.946 1.946 0 1 1 0-3.892 1.946 1.946 0 0 1 0 3.892M8.594 17.595 12 21l3.405-3.405M15.405 6.406 12 3 8.594 6.406"
    />
  </Svg>
);
export default IconlystVerticalScrollPointLight;
