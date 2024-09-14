import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerAdapterChargeOutputBulk = ({
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
      d="M17.914 11.945h-7.83c-1.6 0-2.9 1.3-2.9 2.91v.94a2.774 2.774 0 0 1-2.498-2.751 2.99 2.99 0 0 1 2.987-2.987h6.302a3.15 3.15 0 0 0 3.05-2.402h-1.588a1.65 1.65 0 0 1-1.462.902H7.673a4.49 4.49 0 0 0-4.487 4.487c0 2.263 1.772 4.103 3.998 4.25v1.43c0 1.6 1.3 2.9 2.9 2.9h7.83c1.6 0 2.9-1.3 2.9-2.9v-3.87c0-1.61-1.3-2.91-2.9-2.91"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.025 7.655h.089c1.1 0 1.99-.89 1.99-1.98v-1.49c0-.37-.26-.67-.6-.74v-.32a.749.749 0 1 0-1.5 0v.31h-1.5v-.31a.749.749 0 1 0-1.5 0v.32c-.35.06-.63.36-.63.74v1.49c0 1.09.89 1.98 1.98 1.98h1.671m-2.151-2.72v.74c0 .26.22.48.48.48h1.76c.27 0 .49-.22.49-.48v-.74z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.154 17.155c.13.23.38.37.64.37h.88l-.34.63a.745.745 0 0 0 .66 1.1c.26 0 .52-.14.66-.39l.94-1.73c.12-.23.12-.51-.02-.74a.74.74 0 0 0-.64-.37h-.88l.34-.62a.747.747 0 1 0-1.31-.72l-.95 1.73a.75.75 0 0 0 .02.74"
    />
  </Svg>
);
export default IconlystPowerAdapterChargeOutputBulk;
