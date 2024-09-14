import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotificationBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path d="M19.77 11.645c-.731-.853-1.063-1.592-1.063-2.848V8.37c0-1.636-.377-2.69-1.196-3.745C16.25 2.987 14.124 2 12.044 2h-.088c-2.037 0-4.095.942-5.379 2.513-.864 1.075-1.284 2.175-1.284 3.857v.427c0 1.256-.31 1.995-1.063 2.848-.553.629-.73 1.437-.73 2.31 0 .876.287 1.705.864 2.379a4.53 4.53 0 0 0 2.9 1.413c1.571.179 3.142.246 4.736.246s3.165-.112 4.737-.246a4.53 4.53 0 0 0 2.9-1.413 3.6 3.6 0 0 0 .863-2.378c0-.874-.177-1.682-.73-2.31" />
      <Path
        d="M14.009 19.228c-.5-.106-3.546-.106-4.046 0-.428.1-.89.329-.89.832.025.48.306.905.696 1.174h-.001a3.64 3.64 0 0 0 1.714.733q.495.066 1.008 0c.618-.09 1.21-.34 1.713-.732v-.001c.39-.27.67-.693.695-1.174 0-.503-.462-.733-.89-.832"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystNotificationBulk;
