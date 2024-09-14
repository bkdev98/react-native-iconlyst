import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislike3Broken = ({
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
      d="M21 7.93V5.607c0-.663 0-.994-.128-1.248a1.2 1.2 0 0 0-.538-.539c-.254-.126-.586-.126-1.248-.126h-.23c-.995 0-1.492 0-1.873.19a1.8 1.8 0 0 0-.808.808c-.19.381-.19.878-.19 1.872v5.792c0 .993 0 1.49.19 1.871.175.35.46.634.808.808.381.191.878.191 1.872.191h.231c.662 0 .994 0 1.248-.127.233-.117.422-.306.538-.539.127-.254.127-.585.127-1.248v-2.05M18.643 6.1v.01M7.307 3.742c-.637 0-.956 0-1.252.077-.274.071-.533.19-.766.351-.252.174-.46.415-.877.897l-.481.556c-.341.395-.512.592-.634.815a2.4 2.4 0 0 0-.244.656C3 7.344 3 7.604 3 8.125v2.238c0 1.215 0 1.822.232 2.288.214.427.56.773.988.987.465.233 1.073.233 2.287.233h3.595M15.986 5.197 13.18 4.034c-.26-.108-.39-.162-.525-.2a2.4 2.4 0 0 0-.379-.075c-.139-.017-.28-.017-.561-.017h-1.091M15.986 14.022c-1.373 0-3.456 1.448-4.266 5.094-.104.467-.217.929-.713 1.117-.341.129-.788.062-1.138-.01-1.335-.274-2.365-1.942-.852-6.301"
    />
  </Svg>
);
export default IconlystThumbDislike3Broken;
