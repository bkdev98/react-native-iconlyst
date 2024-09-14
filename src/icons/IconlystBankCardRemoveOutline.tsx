import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardRemoveOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.072 4.64a.75.75 0 0 1-.362.997C4.672 6.122 4 7.2 4 8.723v6.595c0 1.066.33 1.912.863 2.485.528.566 1.311.926 2.347.926h10.07c.486 0 .914-.081 1.29-.223a.75.75 0 1 1 .529 1.404 5.1 5.1 0 0 1-1.818.32H7.21c-1.406 0-2.602-.501-3.444-1.405-.836-.898-1.266-2.132-1.266-3.507V8.723c0-1.986.908-3.666 2.575-4.445a.75.75 0 0 1 .997.362M9.964 4.563a.75.75 0 0 1 .75-.75h6.567c1.406 0 2.604.5 3.448 1.403.838.898 1.27 2.132 1.27 3.509v6.593a.75.75 0 0 1-1.5 0V8.725c0-1.065-.33-1.911-.866-2.485-.53-.567-1.316-.928-2.352-.928h-6.567a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.96 9.86a.75.75 0 0 1 .75-.75h5.54a.75.75 0 0 1 0 1.5h-5.54a.75.75 0 0 1-.75-.75M2.5 9.86a.75.75 0 0 1 .75-.75h6.76a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M6.673 15.195a.75.75 0 0 1 .75-.75h2.968a.75.75 0 0 1 0 1.5H7.423a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.61 3.072a.75.75 0 0 1 1.06.03l15.815 16.766a.75.75 0 0 1-1.092 1.03L3.578 4.131a.75.75 0 0 1 .031-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardRemoveOutline;
