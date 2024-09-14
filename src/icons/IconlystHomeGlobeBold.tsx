import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeGlobeBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.66 20.955c-.03.45-.25.85-.61 1.12-.4.29-.92.29-1.97.29H8.92c-1.04 0-1.57 0-1.96-.29-.37-.27-.59-.67-.62-1.12-.03-.49.26-.93.82-1.81a.41.41 0 0 1 .345-.19h8.99c.14 0 .27.072.345.19.57.88.85 1.32.82 1.81M12.19 11.195a.3.3 0 0 0-.38 0l-2.83 2.32.575 4.181a.3.3 0 0 0 .297.26h1.098a.3.3 0 0 0 .3-.3v-1.74c0-.41.34-.75.75-.75s.75.34.75.75v1.74a.3.3 0 0 0 .3.3h1.127a.3.3 0 0 0 .298-.262l.546-4.179z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.137 9.396a.755.755 0 0 1-.755-.75c0-.414.331-.75.745-.75h.01a.75.75 0 0 1 0 1.5m-4.612-1.949a.755.755 0 0 1-.756-.75c0-.414.331-.75.745-.75h.011a.75.75 0 0 1 0 1.5m-4.683 3.05a.755.755 0 0 1-.755-.75c0-.414.331-.75.745-.75h.01a.75.75 0 0 1 0 1.5M12 2.865c-4.6 0-8.34 3.74-8.34 8.33a8.33 8.33 0 0 0 3.32 6.664.5.5 0 0 0 .292.096h.645a.135.135 0 0 0 .133-.16l-.44-3.25a.77.77 0 0 1-.76-.25.75.75 0 0 1 .1-1.06l1.42-1.16v-1.5c0-.42.33-.76.75-.76.41 0 .75.34.75.76v.27l.99-.81c.66-.55 1.62-.55 2.28 0l3.91 3.2c.32.27.37.74.1 1.06a.73.73 0 0 1-.58.27c-.06 0-.11-.01-.17-.03l-.44 3.27c-.01.08.051.15.131.15h.637a.5.5 0 0 0 .293-.096 8.33 8.33 0 0 0 3.32-6.664c0-4.59-3.74-8.33-8.34-8.33"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeGlobeBold;
