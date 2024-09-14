import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopCircleOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 8.25 8.249 8.25 8.25 0 0 0-8.25-8.249M2.5 11.999c0-5.384 4.366-9.749 9.75-9.749S22 6.615 22 11.999s-4.366 9.75-9.75 9.75-9.75-4.366-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.366 9.189c.407-.437.975-.666 1.606-.666h2.554c.632 0 1.2.229 1.608.666.402.431.591 1.005.591 1.606v2.407c0 .601-.19 1.176-.59 1.607-.408.437-.977.665-1.609.665h-2.554c-.632 0-1.2-.228-1.608-.665-.402-.432-.59-1.006-.59-1.607v-2.407c0-.601.19-1.176.592-1.606m1.097 1.023c-.1.107-.19.294-.19.583v2.407c0 .291.09.478.189.584.094.101.249.188.51.188h2.554c.261 0 .417-.087.51-.188.1-.107.19-.293.19-.584v-2.407c0-.29-.09-.477-.19-.584-.093-.1-.249-.188-.51-.188h-2.554c-.259 0-.415.087-.51.189"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopCircleOutline;
