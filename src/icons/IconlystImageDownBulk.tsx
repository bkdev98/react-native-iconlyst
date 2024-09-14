import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageDownBulk = ({
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
      d="M19.638 11.202c-.219.22-.477.39-.755.514q-.022.012-.045.024a2.49 2.49 0 0 1-1.943 0q-.027-.014-.053-.028a2.5 2.5 0 0 1-.747-.51l-2.408-2.418a2.5 2.5 0 0 1 .007-3.536c.39-.39.878-.618 1.385-.694.16-.024.288-.154.285-.316-.004-.293-.011-.588.005-.88a.32.32 0 0 0-.311-.34H7.787c-3.163 0-5.287 2.219-5.287 5.52v6.105a.3.3 0 0 0 .476.243l3.192-2.316a4.91 4.91 0 0 1 6.163.286l2.814 2.525c.1.09.249.102.363.03a30 30 0 0 1 1.733-1.02c1.524-.82 2.794-.45 3.76.152.211.131.499-.012.499-.261v-4.224a.3.3 0 0 0-.513-.212z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.927 7.55 2.408 2.418a.75.75 0 0 0 1.063 0l2.407-2.418a.75.75 0 1 0-1.062-1.06l-1.127 1.133v-4.28a.75.75 0 1 0-1.5 0v4.28L15.989 6.49a.749.749 0 1 0-1.062 1.059M7.115 13.8l-4.326 3.14-.004.002c-.113.08-.209.196-.193.335.314 2.859 2.318 4.74 5.219 4.74h8.436c1.064 0 2.008-.257 2.795-.72.166-.098.18-.328.036-.457l-7.627-6.843a3.46 3.46 0 0 0-4.336-.197M18.124 15.745c-.424.23-.82.46-1.161.668a.297.297 0 0 0-.043.476l3.26 2.926a.285.285 0 0 0 .432-.05c.517-.797.83-1.774.888-2.893a.3.3 0 0 0-.096-.231c-1.053-.954-1.984-1.592-3.28-.896"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageDownBulk;
