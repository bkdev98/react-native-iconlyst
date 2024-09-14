import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeCircleBold = ({
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
      d="M12 17.408a3.846 3.846 0 0 1-3.842-3.84A3.845 3.845 0 0 1 12 9.728a3.845 3.845 0 0 1 3.842 3.84A3.845 3.845 0 0 1 12 17.408m7.92-9.782-5.574-4.54a3.72 3.72 0 0 0-4.691 0L4.083 7.625a3.68 3.68 0 0 0-1.37 2.872v7.18a4.075 4.075 0 0 0 4.072 4.07h10.43a4.075 4.075 0 0 0 4.073-4.07v-7.18a3.68 3.68 0 0 0-1.369-2.871"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 11.227a2.344 2.344 0 0 0-2.342 2.34 2.343 2.343 0 0 0 4.685 0c0-1.29-1.05-2.34-2.342-2.34"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeCircleBold;
