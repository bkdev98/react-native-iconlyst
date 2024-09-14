import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTeaPotBulk = ({
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
      d="M12.02 6.951a2.01 2.01 0 0 0-1.82 2.867A6.74 6.74 0 0 0 6.722 12.1l.006.008c-.22.281-.477.687-.716 1.184a7.7 7.7 0 0 0-.75 2.739c-.032.436-.021.887.046 1.346l.014.023q.092.588.281 1.138l.06.155.008.021q.066.16.117.303a6.8 6.8 0 0 0 1.517 2.2c.53.511 1.237.783 1.959.783h5.518a2.8 2.8 0 0 0 1.944-.77 6.8 6.8 0 0 0 1.622-2.437c1.103-.412 2.106-1.251 2.755-2.268.722-1.131 1.059-2.575.484-3.964-.5-1.207-1.557-1.822-2.65-1.957a4.2 4.2 0 0 0-2.585.532 6.8 6.8 0 0 0-2.515-1.313 2.012 2.012 0 0 0-1.818-2.872m-4.563 6.531a5.34 5.34 0 0 1 3.387-2.376c1.903-.4 3.682.198 4.905 1.37a.7.7 0 0 0 .105.104q.407.411.718.902zm11.347 2.868a6.74 6.74 0 0 0-1.426-4.158 2.8 2.8 0 0 1 1.387-.196c.688.086 1.254.445 1.526 1.102.353.852.18 1.81-.37 2.672-.302.473-.702.89-1.146 1.21q.03-.31.03-.63m-7.392-7.388a.608.608 0 1 1 1.215 0 .608.608 0 0 1-1.215 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M4.277 15.715c.122-1.083.466-2.074.82-2.851.116-.257.234-.49.345-.697l-1.289-.67a.5.5 0 0 0-.216-.053h-1.47a.468.468 0 0 0-.397.714z"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M7.849 3.198a.702.702 0 1 0-.993-.993 2.05 2.05 0 0 0 0 2.903.65.65 0 0 1 0 .918.702.702 0 0 0 .993.992 2.05 2.05 0 0 0 0-2.902.65.65 0 0 1 0-.918M4.435 6.026a.702.702 0 0 0-.992.992.65.65 0 0 1 0 .918.702.702 0 0 0 .992.992c.802-.802.802-2.1 0-2.902" />
    </G>
  </Svg>
);
export default IconlystTeaPotBulk;
