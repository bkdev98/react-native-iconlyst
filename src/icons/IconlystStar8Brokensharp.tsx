import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar8Brokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m17.116 15.866 3.144.759L15.78 12l4.48-4.625-6.24 1.565-1.77-6.19-1.77 6.19M8 8.318l-3.76-.943L8.72 12l-4.48 4.625 6.24-1.565 1.77 6.19 1.77-6.19"
    />
  </Svg>
);
export default IconlystStar8Brokensharp;
