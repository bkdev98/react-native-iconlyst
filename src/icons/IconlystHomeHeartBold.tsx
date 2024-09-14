import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeHeartBold = ({
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
      d="M15.809 13.825a4.9 4.9 0 0 1-1.155 1.851 12.6 12.6 0 0 1-2.182 1.691 1 1 0 0 1-.51.14.7.7 0 0 1-.35-.088 12.3 12.3 0 0 1-2.261-1.747 4.8 4.8 0 0 1-1.154-1.828c-.527-1.65.238-3.304 1.735-3.78a2.78 2.78 0 0 1 2.066.147 2.77 2.77 0 0 1 2.067-.148c1.497.477 2.263 2.13 1.744 3.762m4.11-6.2-5.572-4.539a3.72 3.72 0 0 0-4.692-.001l-5.572 4.54a3.68 3.68 0 0 0-1.37 2.872v7.18a4.075 4.075 0 0 0 4.072 4.07h10.43a4.076 4.076 0 0 0 4.073-4.07v-7.18c0-1.12-.5-2.167-1.369-2.872"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.609 11.493a1.28 1.28 0 0 0-1.156.191.75.75 0 0 1-.908 0 1.27 1.27 0 0 0-1.158-.191c-.805.255-.996 1.159-.768 1.877.158.454.43.887.783 1.233.484.476 1.02.909 1.597 1.287.57-.375 1.108-.805 1.602-1.283.345-.348.62-.785.785-1.256.222-.7.03-1.602-.777-1.859"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeHeartBold;
