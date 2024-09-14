import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightUpBold = ({
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
      d="m8.473 13.958-2.847 2.385a1.51 1.51 0 0 0 .01 2.136 1.51 1.51 0 0 0 2.137.01l2.384-2.847c.46-.46.457-1.21-.008-1.676a1.184 1.184 0 0 0-1.676-.008M17.3 5.216c-.083 0-.41-.022-.698-.024-1.745-.07-5.414.631-7.011 1.32-.246.102-.84.386-1.085.61a2 2 0 0 0-.489.8c-.11.398-.087.83.068 1.21.114.257.558.927.568.937.497.72 1.425 1.77 2.519 2.864 1.04 1.04 2.05 1.928 2.76 2.455.021 0 .825.579 1.184.693a1.82 1.82 0 0 0 1.834-.432l.04-.041c.297-.316.672-1.228.662-1.238.628-1.536 1.35-5.082 1.27-6.878 0 0 0-.484-.046-.74-.053-.38-.239-.729-.507-.997-.299-.299-.669-.485-1.07-.54"
    />
  </Svg>
);
export default IconlystRightUpBold;
