import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageDownBold = ({
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
      d="M19.638 11.203c-.219.22-.477.39-.755.514q-.022.012-.045.024a2.49 2.49 0 0 1-1.943 0c-.019-.008-.035-.02-.053-.028a2.5 2.5 0 0 1-.747-.51l-2.408-2.418a2.5 2.5 0 0 1 .007-3.536c.39-.39.878-.618 1.385-.694.16-.024.288-.154.285-.316-.004-.293-.011-.588.005-.88a.32.32 0 0 0-.311-.34H7.787c-3.163 0-5.287 2.219-5.287 5.52v6.105a.3.3 0 0 0 .476.243l3.192-2.316a4.91 4.91 0 0 1 6.163.286l2.814 2.525c.1.09.249.102.363.03a30 30 0 0 1 1.733-1.02c1.524-.82 2.794-.45 3.76.152.211.131.499-.013.499-.261v-4.224a.3.3 0 0 0-.513-.212z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m7.05 13.784-4.286 3.11-.007.004c-.114.08-.21.196-.195.335.301 2.88 2.312 4.776 5.225 4.776h8.435c1.041 0 1.97-.244 2.747-.687.169-.096.184-.328.04-.458l-7.674-6.885a3.42 3.42 0 0 0-4.286-.195M21.315 16.707c-1.091-1.002-2.03-1.71-3.361-.996-.416.226-.804.451-1.14.655a.297.297 0 0 0-.043.475l3.354 3.01c.13.117.333.098.43-.048.52-.782.837-1.74.91-2.841.005-.092-.052-.165-.12-.227zM14.927 7.55l2.408 2.418a.75.75 0 0 0 1.063 0l2.407-2.418a.75.75 0 1 0-1.062-1.06l-1.127 1.133v-4.28a.75.75 0 1 0-1.5 0v4.28L15.989 6.49a.749.749 0 1 0-1.062 1.059"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageDownBold;
