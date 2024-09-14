import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst360Outline = ({
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
      d="M3.688 5.524c.79-.848 1.912-1.317 3.222-1.317h10.68c1.313 0 2.435.469 3.225 1.317.784.842 1.185 1.998 1.185 3.28v6.392c0 1.282-.4 2.437-1.185 3.28-.79.848-1.913 1.317-3.226 1.317H6.91c-1.313 0-2.435-.469-3.225-1.317-.784-.843-1.185-1.998-1.185-3.28V8.803c0-1.282.403-2.438 1.188-3.28m1.097 1.023C4.302 7.065 4 7.832 4 8.803v6.393c0 .972.301 1.74.783 2.257.476.512 1.184.84 2.127.84H17.59c.943 0 1.652-.328 2.128-.84.482-.517.783-1.285.783-2.257V8.803c0-.972-.301-1.74-.783-2.257-.476-.511-1.184-.839-2.127-.839H6.91c-.939 0-1.647.327-2.125.84"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.423 9.809a.75.75 0 0 1 .75-.75h2.692a.75.75 0 0 1 .584 1.22l-.868 1.075a2.291 2.291 0 0 1-1.263 4.207 2.29 2.29 0 0 1-1.623-.673.75.75 0 1 1 1.063-1.06.793.793 0 1 0 .56-1.353.75.75 0 0 1-.584-1.22l.562-.696H6.173a.75.75 0 0 1-.75-.75M13.506 9.218a.75.75 0 0 1 .12 1.053l-2.034 2.56a.75.75 0 0 1-1.174-.934l2.034-2.559a.75.75 0 0 1 1.054-.12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.991 13.217a2.26 2.26 0 1 1 4.52 0 2.26 2.26 0 0 1-4.52 0m2.26-.76a.76.76 0 1 0 0 1.52.76.76 0 0 0 0-1.52M16.981 10.559a.596.596 0 0 0-.596.595v2.231a.597.597 0 0 0 1.193 0v-2.23a.596.596 0 0 0-.597-.596m-2.096.595a2.096 2.096 0 0 1 4.193 0v2.231a2.097 2.097 0 0 1-4.193 0zM18.538 7.207a.75.75 0 0 1 .75.75v.039a.75.75 0 0 1-1.5 0v-.039a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst360Outline;
