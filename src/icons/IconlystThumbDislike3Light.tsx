import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislike3Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.856 15.227h.23c.663 0 .995 0 1.249-.127.233-.117.422-.306.538-.539.127-.254.127-.585.127-1.248V5.608c0-.663 0-.994-.127-1.248a1.2 1.2 0 0 0-.539-.539c-.253-.126-.585-.126-1.247-.126h0-.231 0c-.994 0-1.49 0-1.872.19-.35.175-.633.458-.808.808-.19.38-.19.878-.19 1.872v5.792c0 .994 0 1.49.19 1.871.175.35.459.633.808.808.381.19.878.19 1.872.19M18.643 6.1v.01M15.986 5.197 13.18 4.034c-.26-.107-.39-.161-.524-.2a2.4 2.4 0 0 0-.38-.075c-.139-.016-.28-.016-.56-.016H7.307c-.637 0-.956 0-1.252.077-.274.07-.534.19-.766.35-.252.174-.46.415-.877.897l-.481.556c-.341.395-.512.592-.634.815a2.4 2.4 0 0 0-.245.657C3 7.343 3 7.605 3 8.125v2.238c0 1.215 0 1.822.233 2.288.213.427.56.774.987.987.466.233 1.073.233 2.288.233h3.595M15.986 14.02c-1.373 0-3.455 1.45-4.266 5.095-.104.467-.217.93-.712 1.117-.341.129-.789.062-1.139-.01-1.334-.274-2.365-1.942-.852-6.301"
    />
  </Svg>
);
export default IconlystThumbDislike3Light;
