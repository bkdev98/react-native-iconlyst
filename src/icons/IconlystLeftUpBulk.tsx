import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftUpBulk = ({
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
      d="m15.643 13.958 2.847 2.384a1.51 1.51 0 0 1-.01 2.136 1.51 1.51 0 0 1-2.137.01l-2.384-2.846c-.46-.461-.457-1.211.008-1.676a1.184 1.184 0 0 1 1.676-.008"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M6.817 5.215c.082 0 .409-.022.697-.023 1.745-.07 5.414.63 7.011 1.32.246.1.84.386 1.085.61a2 2 0 0 1 .489.798c.111.4.087.83-.068 1.211-.114.257-.558.927-.568.937-.497.72-1.425 1.77-2.518 2.864-1.041 1.04-2.05 1.928-2.76 2.455-.022 0-.825.58-1.185.693a1.81 1.81 0 0 1-1.834-.432l-.04-.04c-.297-.317-.672-1.23-.662-1.239-.628-1.536-1.35-5.082-1.27-6.878 0 0 0-.484.046-.739.053-.38.239-.73.507-.998.299-.299.669-.485 1.07-.539"
    />
  </Svg>
);
export default IconlystLeftUpBulk;