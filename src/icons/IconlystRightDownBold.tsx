import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightDownBold = ({
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
      d="M8.473 10.156 5.626 7.77a1.51 1.51 0 0 1 .01-2.136 1.51 1.51 0 0 1 2.137-.01l2.384 2.847c.46.46.457 1.21-.008 1.676a1.184 1.184 0 0 1-1.676.008M17.3 18.897c-.083 0-.41.022-.698.024-1.745.07-5.414-.631-7.01-1.32-.247-.102-.84-.386-1.086-.61a2 2 0 0 1-.489-.799c-.11-.4-.087-.83.068-1.211.114-.257.558-.927.568-.937.497-.72 1.425-1.77 2.519-2.864 1.04-1.04 2.05-1.928 2.76-2.455.021 0 .825-.579 1.184-.693a1.82 1.82 0 0 1 1.834.432l.041.041c.296.316.67 1.228.661 1.238.629 1.536 1.35 5.082 1.27 6.878 0 0 0 .484-.045.74-.053.38-.24.729-.508.997-.299.299-.668.485-1.07.54"
    />
  </Svg>
);
export default IconlystRightDownBold;
