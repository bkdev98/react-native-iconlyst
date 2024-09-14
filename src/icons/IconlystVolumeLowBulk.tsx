import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeLowBulk = ({
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
      d="M13.92 20.673c-.61 0-1.218-.174-1.775-.523L8.87 18.103c-.279-.176-.704-.288-1.082-.288-.38-.029-.679-.04-.94-.05l-.076-.003c-.964-.035-1.604-.059-2.447-.754-1.1-.922-1.095-3.016-1.09-4.698l.001-.31v-.317c-.006-1.68-.012-3.771 1.086-4.69.842-.7 1.484-.722 2.454-.757l.025-.001c.271-.01.58-.021.944-.048.388-.031.836-.11 1.125-.29l3.276-2.047c1.03-.642 2.23-.695 3.3-.145 1.135.585 1.89 1.763 1.97 3.074a72.6 72.6 0 0 1 0 10.448 3.67 3.67 0 0 1-1.949 3.059 3.33 3.33 0 0 1-1.546.387"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M20.407 15.683a.75.75 0 0 0 1.5 0v-7.37a.75.75 0 0 0-1.5 0z"
    />
  </Svg>
);
export default IconlystVolumeLowBulk;
